package com.djtaylor.cartalk.ui.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.djtaylor.cartalk.data.repository.MessageRepository
import com.djtaylor.cartalk.data.repository.RepoResult
import com.djtaylor.cartalk.util.ProfanityFilter
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

data class ComposeUiState(
    val content: String = "",
    val isAnonymous: Boolean = true,
    val isFriendMessage: Boolean = false,
    val isLoading: Boolean = false,
    val error: String? = null,
    val sent: Boolean = false
) {
    val maxChars: Int get() = if (isFriendMessage) MessageRepository.FRIEND_MAX_CHARS else MessageRepository.ANON_MAX_CHARS
    val remainingChars: Int get() = maxChars - content.length
    val hasProfanity: Boolean get() = ProfanityFilter.containsProfanity(content)
    val canSend: Boolean get() = content.isNotBlank() && remainingChars >= 0 && !hasProfanity && !isLoading
}

@HiltViewModel
class ComposeViewModel @Inject constructor(
    private val messageRepository: MessageRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(ComposeUiState())
    val uiState: StateFlow<ComposeUiState> = _uiState.asStateFlow()

    fun onContentChange(text: String) {
        _uiState.value = _uiState.value.copy(content = text, error = null, sent = false)
    }

    fun onAnonymousToggle(anonymous: Boolean) {
        _uiState.value = _uiState.value.copy(isAnonymous = anonymous)
    }

    fun initForFriendMessage(isFriend: Boolean) {
        _uiState.value = _uiState.value.copy(isFriendMessage = isFriend)
    }

    fun sendMessage(
        senderId: String,
        senderVehicleId: String,
        senderVehicleDisplay: String,
        recipientVehicleId: String,
        recipientUserId: String
    ) {
        val state = _uiState.value
        if (!state.canSend) return
        viewModelScope.launch {
            _uiState.value = state.copy(isLoading = true, error = null)
            when (val result = messageRepository.sendMessage(
                senderId = senderId,
                senderVehicleId = senderVehicleId,
                senderVehicleDisplay = senderVehicleDisplay,
                isAnonymous = state.isAnonymous,
                recipientVehicleId = recipientVehicleId,
                recipientUserId = recipientUserId,
                content = state.content,
                isFriendMessage = state.isFriendMessage
            )) {
                is RepoResult.Success -> _uiState.value = ComposeUiState(sent = true)
                is RepoResult.Error -> _uiState.value = state.copy(isLoading = false, error = result.message)
            }
        }
    }

    fun reset() { _uiState.value = ComposeUiState() }
}
