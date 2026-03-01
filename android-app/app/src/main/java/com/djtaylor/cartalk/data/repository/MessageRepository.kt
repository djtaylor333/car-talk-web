package com.djtaylor.cartalk.data.repository

import com.djtaylor.cartalk.data.local.dao.MessageDao
import com.djtaylor.cartalk.data.local.entity.MessageEntity
import com.djtaylor.cartalk.data.model.Message
import com.djtaylor.cartalk.util.ProfanityFilter
import com.djtaylor.cartalk.util.ThreadIdUtil
import com.google.firebase.Timestamp
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.tasks.await
import java.util.Calendar
import java.util.UUID
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class MessageRepository @Inject constructor(
    private val firestore: FirebaseFirestore,
    private val messageDao: MessageDao
) {
    private val messagesCol = firestore.collection("messages")
    private val countsCol = firestore.collection("messageCounts")

    companion object {
        const val ANON_MAX_CHARS = 200
        const val FRIEND_MAX_CHARS = 500
        const val MAX_DAILY_ANON = 5
        const val RETENTION_DAYS = 30L
    }

    // ── Local (Room) flows ──────────────────────────────────────────────────
    fun getAnonymousMessages(userId: String): Flow<List<MessageEntity>> =
        messageDao.getAnonymousMessages(userId)

    fun getFriendMessages(userId: String): Flow<List<MessageEntity>> =
        messageDao.getFriendMessages(userId)

    fun getThreadMessages(threadId: String): Flow<List<MessageEntity>> =
        messageDao.getThreadMessages(threadId)

    // ── Send message ────────────────────────────────────────────────────────
    suspend fun sendMessage(
        senderId: String,
        senderVehicleId: String,
        senderVehicleDisplay: String,
        isAnonymous: Boolean,
        recipientVehicleId: String,
        recipientUserId: String,
        content: String,
        isFriendMessage: Boolean
    ): RepoResult<Unit> {
        val maxChars = if (isFriendMessage) FRIEND_MAX_CHARS else ANON_MAX_CHARS
        if (content.length > maxChars) return RepoResult.Error("Message exceeds $maxChars characters")
        if (ProfanityFilter.containsProfanity(content)) return RepoResult.Error("Message contains inappropriate language")

        // Check daily limit for anonymous messages
        if (!isFriendMessage) {
            val today = todayKey()
            val countDocId = "${senderId}_${recipientVehicleId}_${today}"
            val countDoc = countsCol.document(countDocId).get().await()
            val count = (countDoc.getLong("count") ?: 0L).toInt()
            if (count >= MAX_DAILY_ANON) return RepoResult.Error("Daily message limit reached for this vehicle")
        }

        return runCatching {
            val messageId = UUID.randomUUID().toString()
            val now = Timestamp.now()
            val expiresAt = Timestamp(
                Calendar.getInstance().apply { add(Calendar.DAY_OF_YEAR, RETENTION_DAYS.toInt()) }.time
            )
            val threadId = ThreadIdUtil.generate(senderVehicleId, recipientVehicleId)
            val message = mapOf(
                "id" to messageId,
                "threadId" to threadId,
                "senderId" to senderId,
                "senderVehicleId" to senderVehicleId,
                "senderVehicleDisplay" to senderVehicleDisplay,
                "isAnonymous" to isAnonymous,
                "recipientVehicleId" to recipientVehicleId,
                "recipientUserId" to recipientUserId,
                "content" to content,
                "timestamp" to now,
                "expiresAt" to expiresAt,
                "isRead" to false,
                "isFriendMessage" to isFriendMessage
            )
            firestore.runBatch { batch ->
                batch.set(messagesCol.document(messageId), message)
                if (!isFriendMessage) {
                    val countDocId = "${senderId}_${recipientVehicleId}_${todayKey()}"
                    val countRef = countsCol.document(countDocId)
                    // increment — uses FieldValue.increment for atomic safety
                    batch.set(
                        countRef,
                        mapOf("count" to com.google.firebase.firestore.FieldValue.increment(1)),
                        com.google.firebase.firestore.SetOptions.merge()
                    )
                }
            }.await()
            RepoResult.Success(Unit)
        }.getOrElse { RepoResult.Error(it.message ?: "Failed to send message") }
    }

    // ── Sync messages from Firestore into Room ──────────────────────────────
    suspend fun syncInboxFromFirestore(userId: String) = runCatching {
        val now = Timestamp.now()
        val docs = messagesCol
            .whereEqualTo("recipientUserId", userId)
            .whereGreaterThan("expiresAt", now)
            .orderBy("expiresAt", Query.Direction.DESCENDING)
            .orderBy("timestamp", Query.Direction.DESCENDING)
            .limit(200)
            .get().await()

        val entities = docs.map { doc ->
            val ts = doc.getTimestamp("timestamp")?.toDate()?.time ?: 0L
            val exp = doc.getTimestamp("expiresAt")?.toDate()?.time ?: 0L
            MessageEntity(
                id = doc.id,
                threadId = doc.getString("threadId") ?: "",
                senderId = doc.getString("senderId") ?: "",
                senderVehicleId = doc.getString("senderVehicleId") ?: "",
                senderVehicleDisplay = doc.getString("senderVehicleDisplay") ?: "",
                isAnonymous = doc.getBoolean("isAnonymous") ?: true,
                recipientVehicleId = doc.getString("recipientVehicleId") ?: "",
                recipientUserId = doc.getString("recipientUserId") ?: "",
                content = doc.getString("content") ?: "",
                timestampMillis = ts,
                expiresAtMillis = exp,
                isRead = doc.getBoolean("isRead") ?: false,
                isFriendMessage = doc.getBoolean("isFriendMessage") ?: false
            )
        }
        messageDao.upsertMessages(entities)
    }

    suspend fun markAsRead(messageId: String) {
        messageDao.markAsRead(messageId)
        runCatching { messagesCol.document(messageId).update("isRead", true).await() }
    }

    suspend fun purgeExpiredLocal() {
        messageDao.deleteExpiredMessages(System.currentTimeMillis())
    }

    private fun todayKey(): String {
        val cal = Calendar.getInstance()
        return "${cal.get(Calendar.YEAR)}-${cal.get(Calendar.MONTH) + 1}-${cal.get(Calendar.DAY_OF_MONTH)}"
    }
}
