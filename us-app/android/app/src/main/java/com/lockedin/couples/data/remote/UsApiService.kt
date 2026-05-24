package com.lockedin.couples.data.remote

import com.lockedin.couples.data.remote.dto.AuthResponseDto
import com.lockedin.couples.data.remote.dto.LoginRequestDto
import com.lockedin.couples.data.remote.dto.RegisterRequestDto
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.POST

interface UsApiService {

    @POST("api/auth/register")
    suspend fun register(@Body request: RegisterRequestDto): Response<AuthResponseDto>

    @POST("api/auth/login")
    suspend fun login(@Body request: LoginRequestDto): Response<AuthResponseDto>
}
