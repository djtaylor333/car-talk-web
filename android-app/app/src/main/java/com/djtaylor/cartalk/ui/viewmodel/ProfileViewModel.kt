package com.djtaylor.cartalk.ui.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.djtaylor.cartalk.data.model.UserProfile
import com.djtaylor.cartalk.data.model.Vehicle
import com.djtaylor.cartalk.data.repository.RepoResult
import com.djtaylor.cartalk.data.repository.UserRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

data class ProfileUiState(
    val profile: UserProfile? = null,
    val isLoading: Boolean = false,
    val error: String? = null,
    val successMessage: String? = null
)

@HiltViewModel
class ProfileViewModel @Inject constructor(
    private val userRepository: UserRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(ProfileUiState())
    val uiState: StateFlow<ProfileUiState> = _uiState.asStateFlow()

    fun loadProfile(uid: String) {
        viewModelScope.launch {
            _uiState.value = ProfileUiState(isLoading = true)
            when (val result = userRepository.getProfile(uid)) {
                is RepoResult.Success -> _uiState.value = ProfileUiState(profile = result.data)
                is RepoResult.Error -> _uiState.value = ProfileUiState(error = result.message)
            }
        }
    }

    fun createProfile(profile: UserProfile) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            when (val result = userRepository.createOrUpdateProfile(profile)) {
                is RepoResult.Success -> _uiState.value = _uiState.value.copy(
                    isLoading = false, profile = profile, successMessage = "Profile saved"
                )
                is RepoResult.Error -> _uiState.value = _uiState.value.copy(
                    isLoading = false, error = result.message
                )
            }
        }
    }

    fun addVehicle(uid: String, vehicle: Vehicle) {
        val current = _uiState.value.profile ?: return
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            when (val result = userRepository.addVehicle(uid, vehicle, current)) {
                is RepoResult.Success -> loadProfile(uid)
                is RepoResult.Error -> _uiState.value = _uiState.value.copy(
                    isLoading = false, error = result.message
                )
            }
        }
    }

    fun removeVehicle(uid: String, vehicleId: String) {
        val current = _uiState.value.profile ?: return
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            when (val result = userRepository.removeVehicle(uid, vehicleId, current)) {
                is RepoResult.Success -> loadProfile(uid)
                is RepoResult.Error -> _uiState.value = _uiState.value.copy(
                    isLoading = false, error = result.message
                )
            }
        }
    }

    fun clearMessages() {
        _uiState.value = _uiState.value.copy(error = null, successMessage = null)
    }
}
