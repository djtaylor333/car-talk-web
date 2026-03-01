package com.djtaylor.cartalk.data.model

import com.google.firebase.Timestamp

data class Message(
    val id: String = "",
    val threadId: String = "",          // sorted pair of vehicleIds: "vehicleA_vehicleB"
    val senderId: String = "",
    val senderVehicleId: String = "",
    val senderVehicleDisplay: String = "", // "Red Toyota Camry · ABC-1234"
    val isAnonymous: Boolean = true,
    val recipientVehicleId: String = "",
    val recipientUserId: String = "",
    val content: String = "",
    val timestamp: Timestamp = Timestamp.now(),
    val expiresAt: Timestamp = Timestamp.now(),
    val isRead: Boolean = false,
    val isFriendMessage: Boolean = false
)

data class FriendRequest(
    val id: String = "",
    val requesterId: String = "",
    val requesterVehicleId: String = "",
    val requesterVehicleDisplay: String = "", // "Blue Honda Civic · XYZ-789"
    val recipientVehicleId: String = "",
    val recipientUserId: String = "",
    val message: String = "",          // max 100 chars
    val status: FriendRequestStatus = FriendRequestStatus.PENDING,
    val createdAt: Timestamp = Timestamp.now()
)

enum class FriendRequestStatus { PENDING, ACCEPTED, REJECTED }

data class Friend(
    val userId: String = "",
    val vehicleId: String = "",
    val vehicleDisplay: String = "",   // public display
    val nickname: String = "",         // private, only visible to owner
    val addedAt: Timestamp = Timestamp.now()
)
