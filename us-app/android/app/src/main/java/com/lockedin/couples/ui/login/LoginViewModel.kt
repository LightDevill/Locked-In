package com.lockedin.couples.ui.login

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lockedin.couples.common.Resource
import com.lockedin.couples.data.remote.dto.LoginRequestDto
import com.lockedin.couples.domain.repository.AuthRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import javax.inject.Inject

data class LoginState(
    val isLoading: Boolean = false,
    val success: Boolean = false,
    val error: String = ""
)

@HiltViewModel
class LoginViewModel @Inject constructor(
    private val repository: AuthRepository
) : ViewModel() {

    private val _state = MutableStateFlow(LoginState())
    val state: StateFlow<LoginState> = _state.asStateFlow()

    fun login(email: String, password: String) {
        if (email.isBlank() || password.isBlank()) {
            _state.value = LoginState(error = "Please enter email and password")
            return
        }

        repository.login(LoginRequestDto(email, password)).onEach { result ->
            when (result) {
                is Resource.Success -> {
                    _state.value = LoginState(success = true)
                }
                is Resource.Error -> {
                    _state.value = LoginState(error = result.message ?: "An unexpected error occurred")
                }
                is Resource.Loading -> {
                    _state.value = LoginState(isLoading = true)
                }
            }
        }.launchIn(viewModelScope)
    }

    fun resetState() {
        _state.value = LoginState()
    }
}
