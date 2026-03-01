package com.djtaylor.cartalk.ui.screen

import androidx.compose.ui.test.*
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.djtaylor.cartalk.ui.theme.CarTalkTheme
import com.djtaylor.cartalk.ui.viewmodel.AuthViewModel
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.kotlin.*

@RunWith(AndroidJUnit4::class)
class LoginScreenTest {

    @get:Rule
    val composeTestRule = createComposeRule()

    @Test
    fun loginScreen_showsEmailAndPasswordFields() {
        composeTestRule.setContent {
            CarTalkTheme { LoginScreen(onNavigateToSignUp = {}, onLoginSuccess = {}) }
        }
        composeTestRule.onNodeWithText("Email").assertIsDisplayed()
        composeTestRule.onNodeWithText("Password").assertIsDisplayed()
        composeTestRule.onNodeWithText("Sign In").assertIsDisplayed()
        composeTestRule.onNodeWithText("Create account").assertIsDisplayed()
    }

    @Test
    fun loginScreen_signInButtonDisabledWhenFieldsEmpty() {
        composeTestRule.setContent {
            CarTalkTheme { LoginScreen(onNavigateToSignUp = {}, onLoginSuccess = {}) }
        }
        composeTestRule.onNodeWithText("Sign In").assertIsNotEnabled()
    }

    @Test
    fun loginScreen_signInButtonEnabledAfterInput() {
        composeTestRule.setContent {
            CarTalkTheme { LoginScreen(onNavigateToSignUp = {}, onLoginSuccess = {}) }
        }
        composeTestRule.onNodeWithText("Email").performTextInput("test@test.com")
        composeTestRule.onNodeWithText("Password").performTextInput("password123")
        composeTestRule.onNodeWithText("Sign In").assertIsEnabled()
    }

    @Test
    fun loginScreen_createAccountNavigates() {
        var navigated = false
        composeTestRule.setContent {
            CarTalkTheme { LoginScreen(onNavigateToSignUp = { navigated = true }, onLoginSuccess = {}) }
        }
        composeTestRule.onNodeWithText("Create account").performClick()
        assert(navigated)
    }
}
