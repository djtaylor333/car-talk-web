package com.djtaylor.cartalk.data.repository

import com.djtaylor.cartalk.util.MainDispatcherRule
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.test.runTest
import org.junit.Assert.*
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.mockito.kotlin.*

class FriendsRepositoryTest {

    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    private lateinit var firestore: FirebaseFirestore
    private lateinit var repository: FriendsRepository

    @Before
    fun setUp() {
        firestore = mock()
        repository = FriendsRepository(firestore)
    }

    @Test
    fun `sendFriendRequest rejects message over 100 chars`() = runTest {
        val longMessage = "a".repeat(101)
        val result = repository.sendFriendRequest(
            requesterId = "uid1",
            requesterVehicleId = "v1",
            requesterVehicleDisplay = "Red Toyota",
            recipientVehicleId = "v2",
            recipientUserId = "uid2",
            message = longMessage
        )
        assertTrue(result is RepoResult.Error)
        assertTrue((result as RepoResult.Error).message.contains("100"))
    }

    @Test
    fun `sendFriendRequest accepts empty message`() = runTest {
        // Firestore not mocked — exception expected but NOT a validation error
        val result = try {
            repository.sendFriendRequest("uid1", "v1", "display", "v2", "uid2", "")
        } catch (e: Exception) { null }
        if (result is RepoResult.Error) {
            assertFalse((result).message.contains("100"))
        }
    }

    @Test
    fun `sendFriendRequest accepts exactly 100 chars`() = runTest {
        val message = "a".repeat(100)
        val result = try {
            repository.sendFriendRequest("uid1", "v1", "display", "v2", "uid2", message)
        } catch (e: Exception) { null }
        if (result is RepoResult.Error) {
            assertFalse((result).message.contains("100"))
        }
    }
}
