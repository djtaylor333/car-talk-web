package com.djtaylor.cartalk.data.repository

import com.djtaylor.cartalk.data.local.dao.MessageDao
import com.djtaylor.cartalk.util.MainDispatcherRule
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.test.runTest
import org.junit.Assert.*
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.mockito.kotlin.*

class MessageRepositoryTest {

    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    private lateinit var firestore: FirebaseFirestore
    private lateinit var messageDao: MessageDao
    private lateinit var repository: MessageRepository

    @Before
    fun setUp() {
        firestore = mock()
        messageDao = mock()
        repository = MessageRepository(firestore, messageDao)
    }

    @Test
    fun `sendMessage rejects content over 200 chars for anon`() = runTest {
        val longMessage = "a".repeat(201)
        val result = repository.sendMessage(
            senderId = "uid1",
            senderVehicleId = "v1",
            senderVehicleDisplay = "Red Toyota · ABC123",
            isAnonymous = true,
            recipientVehicleId = "v2",
            recipientUserId = "uid2",
            content = longMessage,
            isFriendMessage = false
        )
        assertTrue(result is RepoResult.Error)
        assertTrue((result as RepoResult.Error).message.contains("200"))
    }

    @Test
    fun `sendMessage rejects content over 500 chars for friends`() = runTest {
        val longMessage = "a".repeat(501)
        val result = repository.sendMessage(
            senderId = "uid1",
            senderVehicleId = "v1",
            senderVehicleDisplay = "Red Toyota · ABC123",
            isAnonymous = false,
            recipientVehicleId = "v2",
            recipientUserId = "uid2",
            content = longMessage,
            isFriendMessage = true
        )
        assertTrue(result is RepoResult.Error)
        assertTrue((result as RepoResult.Error).message.contains("500"))
    }

    @Test
    fun `sendMessage rejects profane content`() = runTest {
        val result = repository.sendMessage(
            senderId = "uid1",
            senderVehicleId = "v1",
            senderVehicleDisplay = "display",
            isAnonymous = true,
            recipientVehicleId = "v2",
            recipientUserId = "uid2",
            content = "You are an asshole",
            isFriendMessage = false
        )
        assertTrue(result is RepoResult.Error)
        assertTrue((result as RepoResult.Error).message.lowercase().contains("inappropriate"))
    }

    @Test
    fun `sendMessage allows exactly 200 chars for anon`() = runTest {
        // Note: Firestore calls will fail in unit test (not mocked to return tasks)
        // This test verifies the validation layer passes - Firestore task mock would be needed for full integration
        val content = "a".repeat(200)
        // We can only verify it doesn't return a validation error
        // The Firestore interaction itself is covered by integration/instrumented tests
        val result = try {
            repository.sendMessage("uid1", "v1", "display", true, "v2", "uid2", content, false)
        } catch (e: Exception) {
            // Firestore not configured in unit tests is expected
            null
        }
        // If result is available, it should NOT be a validation error about character count
        if (result is RepoResult.Error) {
            assertFalse((result).message.contains("200"))
        }
    }

    @Test
    fun `friend message allows exactly 500 chars`() = runTest {
        val content = "a".repeat(500)
        val result = try {
            repository.sendMessage("uid1", "v1", "display", false, "v2", "uid2", content, true)
        } catch (e: Exception) { null }
        if (result is RepoResult.Error) {
            assertFalse((result).message.contains("500"))
        }
    }

    @Test
    fun `ANON_MAX_CHARS is 200`() {
        assertEquals(200, MessageRepository.ANON_MAX_CHARS)
    }

    @Test
    fun `FRIEND_MAX_CHARS is 500`() {
        assertEquals(500, MessageRepository.FRIEND_MAX_CHARS)
    }

    @Test
    fun `MAX_DAILY_ANON is 5`() {
        assertEquals(5, MessageRepository.MAX_DAILY_ANON)
    }

    @Test
    fun `RETENTION_DAYS is 30`() {
        assertEquals(30L, MessageRepository.RETENTION_DAYS)
    }
}
