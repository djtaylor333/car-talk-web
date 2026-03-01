package com.djtaylor.cartalk.ui.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.djtaylor.cartalk.data.local.entity.MessageEntity
import com.djtaylor.cartalk.data.repository.MessageRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch
import javax.inject.Inject

data class InboxUiState(
    val isSyncing: Boolean = false,
    val error: String? = null
)

@HiltViewModel
class InboxViewModel @Inject constructor(
    private val messageRepository: MessageRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(InboxUiState())
    val uiState: StateFlow<InboxUiState> = _uiState.asStateFlow()

    fun getAnonymousMessages(userId: String): StateFlow<List<MessageEntity>> =
        messageRepository.getAnonymousMessages(userId)
            .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    fun getFriendMessages(userId: String): StateFlow<List<MessageEntity>> =
        messageRepository.getFriendMessages(userId)
            .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    fun getThreadMessages(threadId: String): StateFlow<List<MessageEntity>> =
        messageRepository.getThreadMessages(threadId)
            .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    fun syncInbox(userId: String) {
        viewModelScope.launch {
            _uiState.value = InboxUiState(isSyncing = true)
            runCatching { messageRepository.syncInboxFromFirestore(userId) }
                .onFailure { _uiState.value = InboxUiState(error = it.message) }
                .onSuccess { _uiState.value = InboxUiState() }
        }
    }

    fun markAsRead(messageId: String) {
        viewModelScope.launch { messageRepository.markAsRead(messageId) }
    }
}
