package com.djtaylor.cartalk.ui.screen

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Close
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.djtaylor.cartalk.data.model.FriendRequest
import com.djtaylor.cartalk.ui.viewmodel.FriendsViewModel
import com.djtaylor.cartalk.ui.viewmodel.ProfileViewModel
import com.google.firebase.auth.FirebaseAuth

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FriendRequestsScreen(
    onBack: () -> Unit,
    friendsViewModel: FriendsViewModel = hiltViewModel(),
    profileViewModel: ProfileViewModel = hiltViewModel()
) {
    val uid = FirebaseAuth.getInstance().currentUser?.uid ?: return
    val uiState by friendsViewModel.uiState.collectAsState()
    val profileUiState by profileViewModel.uiState.collectAsState()

    LaunchedEffect(uid) {
        friendsViewModel.loadFriendsAndRequests(uid)
        profileViewModel.loadProfile(uid)
    }

    val primaryVehicleId = profileUiState.profile?.vehicles?.firstOrNull()?.id ?: ""

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Friend Requests") },
                navigationIcon = { IconButton(onClick = onBack) { Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back") } }
            )
        }
    ) { padding ->
        if (uiState.isLoading) {
            Box(Modifier.fillMaxSize().padding(padding), contentAlignment = Alignment.Center) {
                CircularProgressIndicator()
            }
        } else if (uiState.pendingRequests.isEmpty()) {
            Box(Modifier.fillMaxSize().padding(padding), contentAlignment = Alignment.Center) {
                Text("No pending friend requests.")
            }
        } else {
            LazyColumn(modifier = Modifier.padding(padding)) {
                items(uiState.pendingRequests, key = { it.id }) { request ->
                    FriendRequestItem(
                        request = request,
                        onAccept = {
                            friendsViewModel.respondToRequest(
                                requestId = request.id,
                                request = request,
                                recipientUserId = uid,
                                recipientVehicleId = primaryVehicleId,
                                accept = true
                            )
                        },
                        onDecline = {
                            friendsViewModel.respondToRequest(
                                requestId = request.id,
                                request = request,
                                recipientUserId = uid,
                                recipientVehicleId = primaryVehicleId,
                                accept = false
                            )
                        }
                    )
                    HorizontalDivider()
                }
            }
        }
        uiState.successMessage?.let { msg ->
            LaunchedEffect(msg) { friendsViewModel.clearMessages() }
        }
    }
}

@Composable
private fun FriendRequestItem(
    request: FriendRequest,
    onAccept: () -> Unit,
    onDecline: () -> Unit
) {
    ListItem(
        headlineContent = { Text(request.requesterVehicleDisplay.ifBlank { "Unknown vehicle" }) },
        supportingContent = {
            if (request.message.isNotBlank()) Text("\"${request.message}\"")
        },
        trailingContent = {
            Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                IconButton(onClick = onAccept) {
                    Icon(Icons.Default.Check, "Accept", tint = MaterialTheme.colorScheme.primary)
                }
                IconButton(onClick = onDecline) {
                    Icon(Icons.Default.Close, "Decline", tint = MaterialTheme.colorScheme.error)
                }
            }
        }
    )
}
