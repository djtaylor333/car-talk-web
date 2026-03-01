package com.djtaylor.cartalk.ui.viewmodel

import app.cash.turbine.test
import com.djtaylor.cartalk.data.repository.RepoResult
import com.djtaylor.cartalk.data.repository.UserRepository
import com.djtaylor.cartalk.util.MainDispatcherRule
import kotlinx.coroutines.test.runTest
import org.junit.Assert.*
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.mockito.kotlin.*

class SearchViewModelTest {

    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    private lateinit var userRepository: UserRepository
    private lateinit var viewModel: SearchViewModel

    @Before
    fun setUp() {
        userRepository = mock()
        viewModel = SearchViewModel(userRepository)
    }

    @Test
    fun `initial state is empty`() {
        val state = viewModel.uiState.value
        assertEquals("", state.query)
        assertNull(state.result)
        assertFalse(state.isLoading)
        assertFalse(state.noResults)
    }

    @Test
    fun `query change updates state`() {
        viewModel.onQueryChange("ABC-1234")
        assertEquals("ABC-1234", viewModel.uiState.value.query)
    }

    @Test
    fun `blank search does nothing`() = runTest {
        viewModel.onQueryChange("")
        viewModel.search()
        verifyNoInteractions(userRepository)
    }

    @Test
    fun `successful search shows result`() = runTest {
        val fakeData: Map<String, Any> = mapOf(
            "userId" to "uid123",
            "vehicleId" to "v1",
            "licensePlate" to "ABC-1234",
            "make" to "Toyota",
            "model" to "Camry",
            "color" to "Red"
        )
        whenever(userRepository.searchByLicensePlate("ABC-1234")).thenReturn(RepoResult.Success(fakeData))
        viewModel.onQueryChange("ABC-1234")

        viewModel.uiState.test {
            awaitItem() // initial from onQueryChange
            viewModel.search()
            val loading = awaitItem()
            assertTrue(loading.isLoading)
            val result = awaitItem()
            assertFalse(result.isLoading)
            assertNotNull(result.result)
            assertEquals("Toyota", result.result?.make)
            assertEquals("ABC-1234", result.result?.licensePlate)
            cancelAndIgnoreRemainingEvents()
        }
    }

    @Test
    fun `no results sets noResults flag`() = runTest {
        whenever(userRepository.searchByLicensePlate(any())).thenReturn(RepoResult.Success(null))
        viewModel.onQueryChange("ZZZ-9999")

        viewModel.uiState.test {
            awaitItem()
            viewModel.search()
            skipItems(1) // loading
            val state = awaitItem()
            assertTrue(state.noResults)
            assertNull(state.result)
            cancelAndIgnoreRemainingEvents()
        }
    }

    @Test
    fun `search error propagates to state`() = runTest {
        whenever(userRepository.searchByLicensePlate(any())).thenReturn(RepoResult.Error("Network error"))
        viewModel.onQueryChange("XYZ")

        viewModel.uiState.test {
            awaitItem()
            viewModel.search()
            skipItems(1) // loading
            val state = awaitItem()
            assertEquals("Network error", state.error)
            assertNull(state.result)
            cancelAndIgnoreRemainingEvents()
        }
    }

    @Test
    fun `clearResult resets state`() = runTest {
        whenever(userRepository.searchByLicensePlate(any())).thenReturn(RepoResult.Success(
            mapOf("userId" to "u1", "vehicleId" to "v1", "licensePlate" to "X", "make" to "A", "model" to "B", "color" to "C")
        ))
        viewModel.onQueryChange("X")
        viewModel.search()
        viewModel.clearResult()

        val state = viewModel.uiState.value
        assertEquals("", state.query)
        assertNull(state.result)
    }
}
