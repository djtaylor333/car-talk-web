package com.djtaylor.cartalk.ui.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.djtaylor.cartalk.data.model.Friend
import com.djtaylor.cartalk.data.model.FriendRequest
import com.djtaylor.cartalk.data.repository.FriendsRepository
import com.djtaylor.cartalk.data.repository.RepoResult
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

data class FriendsUiState(
    val friends: List<Friend> = emptyList(),
    val pendingRequests: List<FriendRequest> = emptyList(),
    val isLoading: Boolean = false,
    val error: String? = null,
    val successMessage: String? = null
)

@HiltViewModel
class FriendsViewModel @Inject constructor(
    private val friendsRepository: FriendsRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(FriendsUiState())
    val uiState: StateFlow<FriendsUiState> = _uiState.asStateFlow()

    fun loadFriendsAndRequests(userId: String) {
        viewModelScope.launch {
            _uiState.value = FriendsUiState(isLoading = true)
            val friendsResult = friendsRepository.getFriendsForUser(userId)
            val requestsResult = friendsRepository.getPendingRequestsForUser(userId)
            _uiState.value = FriendsUiState(
                friends = (friendsResult as? RepoResult.Success)?.data ?: emptyList(),
                pendingRequests = (requestsResult as? RepoResult.Success)?.data ?: emptyList(),
                error = (friendsResult as? RepoResult.Error)?.message
            )
        }
    }

    fun sendFriendRequest(
        requesterId: String,
        requesterVehicleId: String,
        requesterVehicleDisplay: String,
        recipientVehicleId: String,
        recipientUserId: String,
        message: String
    ) {
        if (message.length > 100) {
            _uiState.value = _uiState.value.copy(error = "Intro message exceeds 100 characters")
            return
        }
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            when (val result = friendsRepository.sendFriendRequest(
                requesterId, requesterVehicleId, requesterVehicleDisplay,
                recipientVehicleId, recipientUserId, message
            )) {
                is RepoResult.Success -> _uiState.value = _uiState.value.copy(
                    isLoading = false, successMessage = "Friend request sent"
                )
                is RepoResult.Error -> _uiState.value = _uiState.value.copy(
                    isLoading = false, error = result.message
                )
            }
        }
    }

    fun respondToRequest(
        requestId: String,
        request: FriendRequest,
        recipientUserId: String,
        recipientVehicleId: String,
        accept: Boolean
    ) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true)
            when (val result = friendsRepository.respondToRequest(
                requestId,
                request.requesterId,
                request.requesterVehicleId,
                request.requesterVehicleDisplay,
                recipientUserId,
                recipientVehicleId,
                accept
            )) {
                is RepoResult.Success -> {
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        pendingRequests = _uiState.value.pendingRequests.filter { it.id != requestId },
                        successMessage = if (accept) "Friend added!" else "Request declined"
                    )
                }
                is RepoResult.Error -> _uiState.value = _uiState.value.copy(
                    isLoading = false, error = result.message
                )
            }
        }
    }

    fun updateNickname(userId: String, friendUserId: String, nickname: String) {
        viewModelScope.launch {
            friendsRepository.updateNickname(userId, friendUserId, nickname)
            loadFriendsAndRequests(userId)
        }
    }

    fun clearMessages() { _uiState.value = _uiState.value.copy(error = null, successMessage = null) }
}
