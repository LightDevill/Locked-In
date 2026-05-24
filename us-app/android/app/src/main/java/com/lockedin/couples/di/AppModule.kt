package com.lockedin.couples.di

import android.content.Context
import retrofit2.converter.kotlinx.serialization.asConverterFactory
import com.lockedin.couples.data.local.AuthPreferences
import com.lockedin.couples.data.remote.UsApiService
import com.lockedin.couples.data.repository.AuthRepositoryImpl
import com.lockedin.couples.domain.repository.AuthRepository
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import kotlinx.serialization.json.Json
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object AppModule {

    // IMPORTANT: 10.0.2.2 is the special alias to your host loopback interface (localhost) from the Android emulator.
    // If you run on a physical device, change this to your computer's local IP address (e.g. 192.168.x.x)
    private const val BASE_URL = "http://192.168.1.109:3000/"

    @Provides
    @Singleton
    fun provideAuthPreferences(@ApplicationContext context: Context): AuthPreferences {
        return AuthPreferences(context)
    }

    @Provides
    @Singleton
    fun provideOkHttpClient(): OkHttpClient {
        val loggingInterceptor = HttpLoggingInterceptor().apply {
            level = HttpLoggingInterceptor.Level.BODY
        }
        return OkHttpClient.Builder()
            .addInterceptor(loggingInterceptor)
            .build()
    }

    @Provides
    @Singleton
    fun provideRetrofit(okHttpClient: OkHttpClient): Retrofit {
        val networkJson = Json { ignoreUnknownKeys = true }
        return Retrofit.Builder()
            .baseUrl(BASE_URL)
            .client(okHttpClient)
            .addConverterFactory(networkJson.asConverterFactory("application/json".toMediaType()))
            .build()
    }

    @Provides
    @Singleton
    fun provideUsApiService(retrofit: Retrofit): UsApiService {
        return retrofit.create(UsApiService::class.java)
    }

    @Provides
    @Singleton
    fun provideAuthRepository(
        apiService: UsApiService,
        authPreferences: AuthPreferences
    ): AuthRepository {
        return AuthRepositoryImpl(apiService, authPreferences)
    }
}
