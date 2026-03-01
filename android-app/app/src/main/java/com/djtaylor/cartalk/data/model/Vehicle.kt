package com.djtaylor.cartalk.data.model

import com.google.firebase.Timestamp

data class Vehicle(
    val id: String = "",
    val licensePlate: String = "",
    val make: String = "",
    val model: String = "",
    val color: String = "",
    val addedAt: Timestamp = Timestamp.now()
)

data class UserProfile(
    val uid: String = "",
    val email: String? = null,
    val phone: String? = null,
    val vehicles: List<Vehicle> = emptyList(),
    val createdAt: Timestamp = Timestamp.now()
)

// Vehicle colors supported by the app
enum class VehicleColor(val displayName: String, val hexColor: String) {
    WHITE("White", "#FFFFFF"),
    BLACK("Black", "#1A1A1A"),
    SILVER("Silver", "#C0C0C0"),
    GREY("Grey", "#808080"),
    RED("Red", "#D32F2F"),
    BLUE("Blue", "#1565C0"),
    GREEN("Green", "#2E7D32"),
    YELLOW("Yellow", "#F9A825"),
    ORANGE("Orange", "#E65100"),
    BROWN("Brown", "#4E342E"),
    BEIGE("Beige", "#F5F5DC"),
    GOLD("Gold", "#FFC107")
}
