package com.lockedin.couples.data.remote.dto

import kotlinx.serialization.Serializable

@Serializable
data class LoginRequestDto(
    val email: String,
    val password: String
)

@Serializable
data class RegisterRequestDto(
    val email: String,
    val password: String,
    val name: String
)

@Serializable
data class UserDto(
    val id: String,
    val email: String,
    val name: String
)

@Serializable
data class AuthResponseDataDto(
    val token: String,
    val user: UserDto
)

@Serializable
data class AuthResponseDto(
    val status: String,
    val message: String,
    val data: AuthResponseDataDto? = null
)
