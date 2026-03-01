package com.djtaylor.cartalk.data.local

import android.content.Context
import androidx.room.Room
import androidx.test.core.app.ApplicationProvider
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.djtaylor.cartalk.data.local.dao.MessageDao
import com.djtaylor.cartalk.data.local.dao.VehicleDao
import com.djtaylor.cartalk.data.local.entity.MessageEntity
import com.djtaylor.cartalk.data.local.entity.VehicleMakeEntity
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.test.runTest
import org.junit.After
import org.junit.Assert.*
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith

@OptIn(ExperimentalCoroutinesApi::class)
@RunWith(AndroidJUnit4::class)
class MessageDaoTest {

    private lateinit var db: CarTalkDatabase
    private lateinit var messageDao: MessageDao
    private lateinit var vehicleDao: VehicleDao

    @Before
    fun setUp() {
        val context = ApplicationProvider.getApplicationContext<Context>()
        db = Room.inMemoryDatabaseBuilder(context, CarTalkDatabase::class.java)
            .allowMainThreadQueries()
            .build()
        messageDao = db.messageDao()
        vehicleDao = db.vehicleDao()
    }

    @After
    fun tearDown() = db.close()

    private fun buildMessage(
        id: String,
        recipientUserId: String = "uid1",
        isFriendMessage: Boolean = false,
        isRead: Boolean = false,
        expiresAtMillis: Long = System.currentTimeMillis() + 100_000,
        timestampMillis: Long = System.currentTimeMillis()
    ) = MessageEntity(
        id = id,
        threadId = "v1_v2",
        senderId = "uid2",
        senderVehicleId = "v2",
        senderVehicleDisplay = "Blue Honda Civic · XYZ123",
        isAnonymous = true,
        recipientVehicleId = "v1",
        recipientUserId = recipientUserId,
        content = "Test message",
        timestampMillis = timestampMillis,
        expiresAtMillis = expiresAtMillis,
        isRead = isRead,
        isFriendMessage = isFriendMessage
    )

    @Test
    fun insertAndRetrieveAnonymousMessages() = runTest {
        val msg = buildMessage("msg1", isFriendMessage = false)
        messageDao.upsertMessages(listOf(msg))
        val result = messageDao.getAnonymousMessages("uid1").first()
        assertEquals(1, result.size)
        assertEquals("msg1", result[0].id)
    }

    @Test
    fun insertAndRetrieveFriendMessages() = runTest {
        val msg = buildMessage("msg2", isFriendMessage = true)
        messageDao.upsertMessages(listOf(msg))
        val anonMessages = messageDao.getAnonymousMessages("uid1").first()
        val friendMessages = messageDao.getFriendMessages("uid1").first()
        assertEquals(0, anonMessages.size)
        assertEquals(1, friendMessages.size)
    }

    @Test
    fun markAsReadUpdatesFlag() = runTest {
        val msg = buildMessage("msg3", isRead = false)
        messageDao.upsertMessages(listOf(msg))
        messageDao.markAsRead("msg3")
        val result = messageDao.getAnonymousMessages("uid1").first()
        assertTrue(result[0].isRead)
    }

    @Test
    fun deleteExpiredMessagesRemovesOldOnes() = runTest {
        val now = System.currentTimeMillis()
        val expired = buildMessage("exp1", expiresAtMillis = now - 1000)
        val valid = buildMessage("valid1", expiresAtMillis = now + 100_000)
        messageDao.upsertMessages(listOf(expired, valid))
        messageDao.deleteExpiredMessages(now)
        val result = messageDao.getAnonymousMessages("uid1").first()
        assertEquals(1, result.size)
        assertEquals("valid1", result[0].id)
    }

    @Test
    fun getThreadMessagesReturnsOrderedByTimestamp() = runTest {
        val msg1 = buildMessage("t1", timestampMillis = 1000L)
        val msg2 = buildMessage("t2", timestampMillis = 2000L)
        val msg3 = buildMessage("t3", timestampMillis = 1500L)
        messageDao.upsertMessages(listOf(msg1, msg2, msg3))
        val result = messageDao.getThreadMessages("v1_v2").first()
        assertEquals(listOf("t1", "t3", "t2"), result.map { it.id })
    }

    @Test
    fun upsertUpdatesExistingMessage() = runTest {
        val original = buildMessage("upd1", isRead = false)
        messageDao.upsertMessages(listOf(original))
        val updated = original.copy(isRead = true)
        messageDao.upsertMessages(listOf(updated))
        val result = messageDao.getAnonymousMessages("uid1").first()
        assertEquals(1, result.size)
        assertTrue(result[0].isRead)
    }

    @Test
    fun vehicleMakesAreStoredAndRetrieved() = runTest {
        val makes = listOf(
            VehicleMakeEntity(1, "Toyota", System.currentTimeMillis()),
            VehicleMakeEntity(2, "Honda", System.currentTimeMillis())
        )
        vehicleDao.upsertMakes(makes)
        val result = vehicleDao.getAllMakes().first()
        assertEquals(2, result.size)
        // Should be sorted alphabetically
        assertEquals("Honda", result[0].makeName)
        assertEquals("Toyota", result[1].makeName)
    }
}
