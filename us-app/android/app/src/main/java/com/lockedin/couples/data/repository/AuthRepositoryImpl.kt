package com.lockedin.couples.data.repository

import com.lockedin.couples.common.Resource
import com.lockedin.couples.data.local.AuthPreferences
import com.lockedin.couples.data.remote.UsApiService
import com.lockedin.couples.data.remote.dto.AuthResponseDto
import com.lockedin.couples.data.remote.dto.LoginRequestDto
import com.lockedin.couples.data.remote.dto.RegisterRequestDto
import com.lockedin.couples.domain.repository.AuthRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import okio.IOException
import retrofit2.HttpException
import javax.inject.Inject

class AuthRepositoryImpl @Inject constructor(
    private val apiService: UsApiService,
    private val authPreferences: AuthPreferences
) : AuthRepository {

    override fun register(request: RegisterRequestDto): Flow<Resource<AuthResponseDto>> = flow {
        try {
            emit(Resource.Loading())
            val response = apiService.register(request)
            if (response.isSuccessful && response.body() != null) {
                val body = response.body()!!
                body.data?.token?.let { token ->
                    authPreferences.saveToken(token)
                }
                emit(Resource.Success(body))
            } else {
                emit(Resource.Error("Registration failed: ${response.message()}"))
            }
        } catch (e: HttpException) {
            emit(Resource.Error("Network error: ${e.message()}"))
        } catch (e: IOException) {
            emit(Resource.Error("Could not reach server. Check your internet connection."))
        } catch (e: Exception) {
            emit(Resource.Error("An unexpected error occurred: ${e.message}"))
        }
    }

    override fun login(request: LoginRequestDto): Flow<Resource<AuthResponseDto>> = flow {
        try {
            emit(Resource.Loading())
            val response = apiService.login(request)
            if (response.isSuccessful && response.body() != null) {
                val body = response.body()!!
                body.data?.token?.let { token ->
                    authPreferences.saveToken(token)
                }
                emit(Resource.Success(body))
            } else {
                emit(Resource.Error("Login failed: ${response.message()}"))
            }
        } catch (e: HttpException) {
            emit(Resource.Error("Network error: ${e.message()}"))
        } catch (e: IOException) {
            emit(Resource.Error("Could not reach server. Check your internet connection."))
        } catch (e: Exception) {
            emit(Resource.Error("An unexpected error occurred: ${e.message}"))
        }
    }

    override suspend fun logout() {
        authPreferences.clearToken()
    }

    override fun getSavedToken(): Flow<String?> {
        return authPreferences.jwtToken
    }
}
