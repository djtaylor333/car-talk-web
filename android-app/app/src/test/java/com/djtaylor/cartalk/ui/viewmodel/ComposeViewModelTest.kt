package com.djtaylor.cartalk.ui.viewmodel

import app.cash.turbine.test
import com.djtaylor.cartalk.data.repository.MessageRepository
import com.djtaylor.cartalk.data.repository.RepoResult
import com.djtaylor.cartalk.util.MainDispatcherRule
import kotlinx.coroutines.test.runTest
import org.junit.Assert.*
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.mockito.kotlin.*

class ComposeViewModelTest {

    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    private lateinit var messageRepository: MessageRepository
    private lateinit var viewModel: ComposeViewModel

    @Before
    fun setUp() {
        messageRepository = mock()
        viewModel = ComposeViewModel(messageRepository)
    }

    @Test
    fun `initial state is blank and not loading`() {
        val state = viewModel.uiState.value
        assertEquals("", state.content)
        assertFalse(state.isLoading)
        assertFalse(state.sent)
        assertNull(state.error)
    }

    @Test
    fun `content change updates state and clears error`() = runTest {
        viewModel.uiState.test {
            awaitItem() // initial
            viewModel.onContentChange("hello")
            val updated = awaitItem()
            assertEquals("hello", updated.content)
            assertNull(updated.error)
            cancelAndIgnoreRemainingEvents()
        }
    }

    @Test
    fun `canSend is false when content is blank`() {
        viewModel.onContentChange("   ")
        assertFalse(viewModel.uiState.value.canSend)
    }

    @Test
    fun `canSend is false when profanity detected`() {
        viewModel.onContentChange("what the fuck")
        assertFalse(viewModel.uiState.value.canSend)
        assertTrue(viewModel.uiState.value.hasProfanity)
    }

    @Test
    fun `canSend is false when exceeds maxChars`() {
        viewModel.onContentChange("a".repeat(201))
        assertFalse(viewModel.uiState.value.canSend)
        assertTrue(viewModel.uiState.value.remainingChars < 0)
    }

    @Test
    fun `friend message has 500 char limit`() {
        viewModel.initForFriendMessage(true)
        viewModel.onContentChange("a".repeat(500))
        assertTrue(viewModel.uiState.value.canSend)
        viewModel.onContentChange("a".repeat(501))
        assertFalse(viewModel.uiState.value.canSend)
    }

    @Test
    fun `successful send transitions to sent state`() = runTest {
        whenever(messageRepository.sendMessage(any(), any(), any(), any(), any(), any(), any(), any()))
            .thenReturn(RepoResult.Success(Unit))

        viewModel.onContentChange("Your left brake light is out")

        viewModel.uiState.test {
            awaitItem() // content changed state
            viewModel.sendMessage("uid1", "v1", "Red Toyota · ABC123", "v2", "uid2")
            val loading = awaitItem()
            assertTrue(loading.isLoading)
            val sent = awaitItem()
            assertTrue(sent.sent)
            cancelAndIgnoreRemainingEvents()
        }
    }

    @Test
    fun `send error is propagated to state`() = runTest {
        whenever(messageRepository.sendMessage(any(), any(), any(), any(), any(), any(), any(), any()))
            .thenReturn(RepoResult.Error("Daily limit reached"))

        viewModel.onContentChange("Test message")

        viewModel.uiState.test {
            awaitItem()
            viewModel.sendMessage("uid1", "v1", "display", "v2", "uid2")
            skipItems(1) // loading
            val error = awaitItem()
            assertEquals("Daily limit reached", error.error)
            assertFalse(error.sent)
            cancelAndIgnoreRemainingEvents()
        }
    }

    @Test
    fun `anonymous toggle changes isAnonymous`() {
        assertTrue(viewModel.uiState.value.isAnonymous)
        viewModel.onAnonymousToggle(false)
        assertFalse(viewModel.uiState.value.isAnonymous)
    }

    @Test
    fun `reset clears all state`() {
        viewModel.onContentChange("some content")
        viewModel.reset()
        val state = viewModel.uiState.value
        assertEquals("", state.content)
        assertFalse(state.isLoading)
        assertFalse(state.sent)
    }
}
