package com.lockedin.couples.domain.repository

import com.lockedin.couples.common.Resource
import com.lockedin.couples.data.remote.dto.AuthResponseDto
import com.lockedin.couples.data.remote.dto.LoginRequestDto
import com.lockedin.couples.data.remote.dto.RegisterRequestDto
import kotlinx.coroutines.flow.Flow

interface AuthRepository {
    fun register(request: RegisterRequestDto): Flow<Resource<AuthResponseDto>>
    fun login(request: LoginRequestDto): Flow<Resource<AuthResponseDto>>
    suspend fun logout()
    fun getSavedToken(): Flow<String?>
}
