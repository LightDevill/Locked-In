package com.lockedin.couples

import android.app.Application
import dagger.hilt.android.HiltAndroidApp

@HiltAndroidApp
class UsApplication : Application() {
    override fun onCreate() {
        super.onCreate()
    }
}
