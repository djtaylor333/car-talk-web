package com.djtaylor.cartalk.ui.components

import androidx.compose.foundation.Canvas
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.DrawScope

/**
 * Simple sedan silhouette drawn with Canvas — colored by the vehicle's colour.
 * No external assets required.
 */
@Composable
fun VehicleSilhouette(color: String, modifier: Modifier = Modifier) {
    val vehicleColor = parseVehicleColor(color)
    val darker = darken(vehicleColor, 0.2f)

    Canvas(modifier = modifier) {
        drawSilhouette(vehicleColor, darker)
    }
}

private fun parseVehicleColor(name: String): Color = when (name.lowercase()) {
    "white" -> Color(0xFFF5F5F5)
    "black" -> Color(0xFF1A1A1A)
    "silver" -> Color(0xFFC0C0C0)
    "grey", "gray" -> Color(0xFF808080)
    "red" -> Color(0xFFD32F2F)
    "blue" -> Color(0xFF1565C0)
    "green" -> Color(0xFF2E7D32)
    "yellow" -> Color(0xFFF9A825)
    "orange" -> Color(0xFFE65100)
    "brown" -> Color(0xFF4E342E)
    "beige" -> Color(0xFFF5F5DC)
    "gold" -> Color(0xFFFFC107)
    else -> Color(0xFF9E9E9E)
}

private fun darken(color: Color, factor: Float): Color =
    Color(
        red = (color.red * (1f - factor)).coerceIn(0f, 1f),
        green = (color.green * (1f - factor)).coerceIn(0f, 1f),
        blue = (color.blue * (1f - factor)).coerceIn(0f, 1f),
        alpha = color.alpha
    )

private fun DrawScope.drawSilhouette(body: Color, shadow: Color) {
    val w = size.width
    val h = size.height
    val baseY = h * 0.65f
    val bodyH = h * 0.30f
    val roofH = h * 0.25f

    // Wheels
    val wheelR = w * 0.08f
    val wheelY = baseY + bodyH - wheelR * 0.4f
    drawCircle(Color.DarkGray, wheelR, Offset(w * 0.22f, wheelY))
    drawCircle(Color.DarkGray, wheelR, Offset(w * 0.78f, wheelY))
    drawCircle(Color.Gray, wheelR * 0.5f, Offset(w * 0.22f, wheelY))
    drawCircle(Color.Gray, wheelR * 0.5f, Offset(w * 0.78f, wheelY))

    // Body
    drawRoundRect(body, topLeft = Offset(w * 0.05f, baseY), size = Size(w * 0.90f, bodyH), cornerRadius = CornerRadius(16f))

    // Roof (cabin)
    drawRoundRect(shadow, topLeft = Offset(w * 0.23f, baseY - roofH + 4f), size = Size(w * 0.54f, roofH), cornerRadius = CornerRadius(24f))
    drawRoundRect(body, topLeft = Offset(w * 0.23f, baseY - roofH), size = Size(w * 0.54f, roofH), cornerRadius = CornerRadius(24f))

    // Windows
    drawRoundRect(Color(0xAA87CEEB), topLeft = Offset(w * 0.26f, baseY - roofH + h * 0.03f), size = Size(w * 0.22f, roofH * 0.65f), cornerRadius = CornerRadius(8f))
    drawRoundRect(Color(0xAA87CEEB), topLeft = Offset(w * 0.52f, baseY - roofH + h * 0.03f), size = Size(w * 0.22f, roofH * 0.65f), cornerRadius = CornerRadius(8f))

    // Headlights
    drawRoundRect(Color(0xFFFFF176), topLeft = Offset(w * 0.06f, baseY + bodyH * 0.2f), size = Size(w * 0.06f, bodyH * 0.3f), cornerRadius = CornerRadius(4f))
    drawRoundRect(Color(0xFFEF9A9A), topLeft = Offset(w * 0.88f, baseY + bodyH * 0.2f), size = Size(w * 0.06f, bodyH * 0.3f), cornerRadius = CornerRadius(4f))
}
