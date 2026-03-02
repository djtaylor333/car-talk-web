package com.djtaylor.cartalk.data.repository

import com.djtaylor.cartalk.data.model.Friend
import com.djtaylor.cartalk.data.model.FriendRequest
import com.djtaylor.cartalk.data.model.FriendRequestStatus
import com.google.firebase.Timestamp
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.tasks.await
import java.util.UUID
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class FriendsRepository @Inject constructor(
    private val firestore: FirebaseFirestore
) {
    private val requestsCol get() = firestore.collection("friendRequests")
    private val usersCol get() = firestore.collection("users")

    suspend fun sendFriendRequest(
        requesterId: String,
        requesterVehicleId: String,
        requesterVehicleDisplay: String,
        recipientVehicleId: String,
        recipientUserId: String,
        message: String
    ): RepoResult<Unit> {
        if (message.length > 100) return RepoResult.Error("Intro message exceeds 100 characters")
        return runCatching {
            val id = UUID.randomUUID().toString()
            requestsCol.document(id).set(
                mapOf(
                    "id" to id,
                    "requesterId" to requesterId,
                    "requesterVehicleId" to requesterVehicleId,
                    "requesterVehicleDisplay" to requesterVehicleDisplay,
                    "recipientVehicleId" to recipientVehicleId,
                    "recipientUserId" to recipientUserId,
                    "message" to message,
                    "status" to FriendRequestStatus.PENDING.name,
                    "createdAt" to Timestamp.now()
                )
            ).await()
            RepoResult.Success(Unit)
        }.getOrElse { RepoResult.Error(it.message ?: "Failed to send friend request") }
    }

    suspend fun getPendingRequestsForUser(userId: String): RepoResult<List<FriendRequest>> = runCatching {
        val docs = requestsCol
            .whereEqualTo("recipientUserId", userId)
            .whereEqualTo("status", FriendRequestStatus.PENDING.name)
            .get().await()
        val requests = docs.map { doc ->
            FriendRequest(
                id = doc.id,
                requesterId = doc.getString("requesterId") ?: "",
                requesterVehicleId = doc.getString("requesterVehicleId") ?: "",
                requesterVehicleDisplay = doc.getString("requesterVehicleDisplay") ?: "",
                recipientVehicleId = doc.getString("recipientVehicleId") ?: "",
                recipientUserId = doc.getString("recipientUserId") ?: "",
                message = doc.getString("message") ?: "",
                status = FriendRequestStatus.PENDING
            )
        }
        RepoResult.Success(requests)
    }.getOrElse { RepoResult.Error(it.message ?: "Failed to load requests") }

    suspend fun respondToRequest(
        requestId: String,
        requesterId: String,
        requesterVehicleId: String,
        requesterVehicleDisplay: String,
        recipientUserId: String,
        recipientVehicleId: String,
        accept: Boolean
    ): RepoResult<Unit> = runCatching {
        val newStatus = if (accept) FriendRequestStatus.ACCEPTED else FriendRequestStatus.REJECTED
        firestore.runBatch { batch ->
            batch.update(requestsCol.document(requestId), "status", newStatus.name)
            if (accept) {
                // Add friend to both users' subcollections
                batch.set(
                    usersCol.document(recipientUserId).collection("friends").document(requesterId),
                    mapOf(
                        "userId" to requesterId,
                        "vehicleId" to requesterVehicleId,
                        "vehicleDisplay" to requesterVehicleDisplay,
                        "nickname" to "",
                        "addedAt" to Timestamp.now()
                    )
                )
                batch.set(
                    usersCol.document(requesterId).collection("friends").document(recipientUserId),
                    mapOf(
                        "userId" to recipientUserId,
                        "vehicleId" to recipientVehicleId,
                        "vehicleDisplay" to "",
                        "nickname" to "",
                        "addedAt" to Timestamp.now()
                    )
                )
            }
        }.await()
        RepoResult.Success(Unit)
    }.getOrElse { RepoResult.Error(it.message ?: "Failed to respond to request") }

    suspend fun getFriendsForUser(userId: String): RepoResult<List<Friend>> = runCatching {
        val docs = usersCol.document(userId).collection("friends").get().await()
        val friends = docs.map { doc ->
            Friend(
                userId = doc.getString("userId") ?: "",
                vehicleId = doc.getString("vehicleId") ?: "",
                vehicleDisplay = doc.getString("vehicleDisplay") ?: "",
                nickname = doc.getString("nickname") ?: ""
            )
        }
        RepoResult.Success(friends)
    }.getOrElse { RepoResult.Error(it.message ?: "Failed to load friends") }

    suspend fun updateNickname(userId: String, friendUserId: String, nickname: String): RepoResult<Unit> =
        runCatching {
            usersCol.document(userId).collection("friends").document(friendUserId)
                .update("nickname", nickname).await()
            RepoResult.Success(Unit)
        }.getOrElse { RepoResult.Error(it.message ?: "Failed to update nickname") }

    suspend fun areFriends(userId: String, otherUserId: String): Boolean = runCatching {
        usersCol.document(userId).collection("friends").document(otherUserId).get().await().exists()
    }.getOrDefault(false)
}
