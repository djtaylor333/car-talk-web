package com.djtaylor.cartalk.di

import android.content.Context
import androidx.room.Room
import com.djtaylor.cartalk.data.local.CarTalkDatabase
import com.djtaylor.cartalk.data.local.dao.MessageDao
import com.djtaylor.cartalk.data.local.dao.VehicleDao
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object DatabaseModule {

    @Provides
    @Singleton
    fun provideDatabase(@ApplicationContext context: Context): CarTalkDatabase =
        Room.databaseBuilder(context, CarTalkDatabase::class.java, "cartalk.db")
            .fallbackToDestructiveMigration()
            .build()

    @Provides
    fun provideMessageDao(db: CarTalkDatabase): MessageDao = db.messageDao()

    @Provides
    fun provideVehicleDao(db: CarTalkDatabase): VehicleDao = db.vehicleDao()
}
