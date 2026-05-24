package com.lockedin.couples.di

import dagger.Module
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent

@Module
@InstallIn(SingletonComponent::class)
object AppModule {
    // Add application-level dependencies here (e.g. Retrofit, Room)
}
