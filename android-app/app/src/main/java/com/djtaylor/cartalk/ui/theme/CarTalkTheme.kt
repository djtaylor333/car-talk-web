package com.djtaylor.cartalk.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val CarTalkBlue = Color(0xFF1565C0)
private val CarTalkBlueLight = Color(0xFF1976D2)
private val CarTalkBlueDark = Color(0xFF0D47A1)

private val LightColors = lightColorScheme(
    primary = CarTalkBlue,
    onPrimary = Color.White,
    primaryContainer = Color(0xFFD1E4FF),
    secondary = Color(0xFF535F70),
    background = Color(0xFFFAFCFF),
    surface = Color(0xFFFAFCFF)
)

private val DarkColors = darkColorScheme(
    primary = CarTalkBlueLight,
    onPrimary = Color(0xFF003063),
    primaryContainer = CarTalkBlueDark,
    secondary = Color(0xFFBBC7DB),
    background = Color(0xFF1A1C1E),
    surface = Color(0xFF1A1C1E)
)

@Composable
fun CarTalkTheme(
    darkTheme: Boolean = false,
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColors else LightColors
    MaterialTheme(
        colorScheme = colorScheme,
        content = content
    )
}
