package com.djtaylor.cartalk.ui.viewmodel

import app.cash.turbine.test
import com.djtaylor.cartalk.data.repository.AuthRepository
import com.djtaylor.cartalk.data.repository.AuthResult
import com.djtaylor.cartalk.util.MainDispatcherRule
import com.google.firebase.auth.FirebaseUser
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.test.runTest
import org.junit.Assert.*
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.mockito.kotlin.*

class AuthViewModelTest {

    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    private lateinit var authRepository: AuthRepository
    private lateinit var viewModel: AuthViewModel

    @Before
    fun setUp() {
        authRepository = mock()
        whenever(authRepository.currentUser).thenReturn(null)
        whenever(authRepository.authStateFlow).thenReturn(flowOf(null))
        viewModel = AuthViewModel(authRepository)
    }

    @Test
    fun `initial state is not loading`() {
        with(viewModel.uiState.value) {
            assertFalse(isLoading)
            assertNull(error)
        }
    }

    @Test
    fun `signIn success calls onSuccess callback`() = runTest {
        val mockUser: FirebaseUser = mock()
        whenever(authRepository.signInWithEmail("test@test.com", "password123"))
            .thenReturn(AuthResult.Success(mockUser))

        var successCalled = false
        viewModel.signIn("test@test.com", "password123") { successCalled = true }

        assertTrue(successCalled)
        assertFalse(viewModel.uiState.value.isLoading)
        assertNull(viewModel.uiState.value.error)
    }

    @Test
    fun `signIn error propagates to state`() = runTest {
        whenever(authRepository.signInWithEmail(any(), any()))
            .thenReturn(AuthResult.Error("Invalid credentials"))

        viewModel.uiState.test {
            awaitItem()
            viewModel.signIn("bad@bad.com", "wrong") {}
            val loading = awaitItem()
            assertTrue(loading.isLoading)
            val error = awaitItem()
            assertEquals("Invalid credentials", error.error)
            assertFalse(error.isLoading)
            cancelAndIgnoreRemainingEvents()
        }
    }

    @Test
    fun `createAccount success calls onSuccess callback`() = runTest {
        val mockUser: FirebaseUser = mock()
        whenever(authRepository.createAccountWithEmail("new@test.com", "password123"))
            .thenReturn(AuthResult.Success(mockUser))

        var successCalled = false
        viewModel.createAccount("new@test.com", "password123") { successCalled = true }
        assertTrue(successCalled)
    }

    @Test
    fun `clearError removes error from state`() = runTest {
        whenever(authRepository.signInWithEmail(any(), any()))
            .thenReturn(AuthResult.Error("err"))
        viewModel.signIn("a@a.com", "b") {}
        viewModel.clearError()
        assertNull(viewModel.uiState.value.error)
    }

    @Test
    fun `signOut delegates to repository`() {
        viewModel.signOut()
        verify(authRepository).signOut()
    }
}
