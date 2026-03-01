package com.djtaylor.cartalk.data.local

import androidx.room.Database
import androidx.room.RoomDatabase
import com.djtaylor.cartalk.data.local.dao.MessageDao
import com.djtaylor.cartalk.data.local.dao.VehicleDao
import com.djtaylor.cartalk.data.local.entity.MessageEntity
import com.djtaylor.cartalk.data.local.entity.VehicleMakeEntity
import com.djtaylor.cartalk.data.local.entity.VehicleModelEntity

@Database(
    entities = [
        MessageEntity::class,
        VehicleMakeEntity::class,
        VehicleModelEntity::class
    ],
    version = 1,
    exportSchema = false
)
abstract class CarTalkDatabase : RoomDatabase() {
    abstract fun messageDao(): MessageDao
    abstract fun vehicleDao(): VehicleDao
}
