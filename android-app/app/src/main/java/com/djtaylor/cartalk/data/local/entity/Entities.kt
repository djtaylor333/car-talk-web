package com.djtaylor.cartalk.data.local.entity

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "messages")
data class MessageEntity(
    @PrimaryKey val id: String,
    val threadId: String,
    val senderId: String,
    val senderVehicleId: String,
    val senderVehicleDisplay: String,
    val isAnonymous: Boolean,
    val recipientVehicleId: String,
    val recipientUserId: String,
    val content: String,
    val timestampMillis: Long,
    val expiresAtMillis: Long,
    val isRead: Boolean,
    val isFriendMessage: Boolean
)

@Entity(tableName = "vehicle_makes")
data class VehicleMakeEntity(
    @PrimaryKey val makeId: Int,
    val makeName: String,
    val cachedAtMillis: Long
)

@Entity(tableName = "vehicle_models")
data class VehicleModelEntity(
    @PrimaryKey val modelId: Int,
    val makeName: String,
    val modelName: String,
    val cachedAtMillis: Long
)
