package com.lockedin.couples.ui.register

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lockedin.couples.common.Resource
import com.lockedin.couples.data.remote.dto.RegisterRequestDto
import com.lockedin.couples.domain.repository.AuthRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import javax.inject.Inject

data class RegisterState(
    val isLoading: Boolean = false,
    val success: Boolean = false,
    val error: String = ""
)

@HiltViewModel
class RegisterViewModel @Inject constructor(
    private val repository: AuthRepository
) : ViewModel() {

    private val _state = MutableStateFlow(RegisterState())
    val state: StateFlow<RegisterState> = _state.asStateFlow()

    fun register(email: String, password: String, name: String) {
        if (email.isBlank() || password.isBlank() || name.isBlank()) {
            _state.value = RegisterState(error = "Please fill all fields")
            return
        }

        if (password.length < 6) {
            _state.value = RegisterState(error = "Password must be at least 6 characters")
            return
        }

        repository.register(RegisterRequestDto(email, password, name)).onEach { result ->
            when (result) {
                is Resource.Success -> {
                    _state.value = RegisterState(success = true)
                }
                is Resource.Error -> {
                    _state.value = RegisterState(error = result.message ?: "An unexpected error occurred")
                }
                is Resource.Loading -> {
                    _state.value = RegisterState(isLoading = true)
                }
            }
        }.launchIn(viewModelScope)
    }

    fun resetState() {
        _state.value = RegisterState()
    }
}
