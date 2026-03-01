package com.djtaylor.cartalk.ui.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.djtaylor.cartalk.data.repository.RepoResult
import com.djtaylor.cartalk.data.repository.UserRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

data class VehicleSearchResult(
    val userId: String,
    val vehicleId: String,
    val licensePlate: String,
    val make: String,
    val model: String,
    val color: String
)

data class SearchUiState(
    val query: String = "",
    val result: VehicleSearchResult? = null,
    val isLoading: Boolean = false,
    val error: String? = null,
    val noResults: Boolean = false
)

@HiltViewModel
class SearchViewModel @Inject constructor(
    private val userRepository: UserRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(SearchUiState())
    val uiState: StateFlow<SearchUiState> = _uiState.asStateFlow()

    fun onQueryChange(query: String) {
        _uiState.value = _uiState.value.copy(query = query, error = null, noResults = false)
    }

    fun search() {
        val query = _uiState.value.query.trim()
        if (query.isBlank()) return
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null, noResults = false, result = null)
            when (val result = userRepository.searchByLicensePlate(query)) {
                is RepoResult.Success -> {
                    val data = result.data
                    if (data == null) {
                        _uiState.value = _uiState.value.copy(isLoading = false, noResults = true)
                    } else {
                        _uiState.value = _uiState.value.copy(
                            isLoading = false,
                            result = VehicleSearchResult(
                                userId = data["userId"] as? String ?: "",
                                vehicleId = data["vehicleId"] as? String ?: "",
                                licensePlate = data["licensePlate"] as? String ?: "",
                                make = data["make"] as? String ?: "",
                                model = data["model"] as? String ?: "",
                                color = data["color"] as? String ?: ""
                            )
                        )
                    }
                }
                is RepoResult.Error -> _uiState.value = _uiState.value.copy(
                    isLoading = false, error = result.message
                )
            }
        }
    }

    fun clearResult() {
        _uiState.value = SearchUiState()
    }
}
