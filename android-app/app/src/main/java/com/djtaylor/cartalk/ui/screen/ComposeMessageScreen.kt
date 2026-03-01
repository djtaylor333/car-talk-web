package com.djtaylor.cartalk.ui.screen

import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.djtaylor.cartalk.ui.viewmodel.ComposeViewModel
import com.djtaylor.cartalk.ui.viewmodel.ProfileViewModel
import com.google.firebase.auth.FirebaseAuth

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ComposeMessageScreen(
    recipientVehicleId: String,
    recipientUserId: String,
    isFriend: Boolean,
    onBack: () -> Unit,
    onSent: () -> Unit,
    composeViewModel: ComposeViewModel = hiltViewModel(),
    profileViewModel: ProfileViewModel = hiltViewModel()
) {
    val uid = FirebaseAuth.getInstance().currentUser?.uid ?: return
    val uiState by composeViewModel.uiState.collectAsState()
    val profileUiState by profileViewModel.uiState.collectAsState()

    LaunchedEffect(Unit) {
        profileViewModel.loadProfile(uid)
        composeViewModel.initForFriendMessage(isFriend)
    }
    LaunchedEffect(uiState.sent) { if (uiState.sent) onSent() }

    val primaryVehicle = profileUiState.profile?.vehicles?.firstOrNull()
    val senderDisplay = primaryVehicle?.let { "${it.color} ${it.make} ${it.model} · ${it.licensePlate}" } ?: ""

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(if (isFriend) "Message Friend" else "Send Anonymous Message") },
                navigationIcon = {
                    IconButton(onClick = onBack) { Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back") }
                }
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier.fillMaxSize().padding(padding).padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            if (!isFriend) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Switch(
                        checked = !uiState.isAnonymous,
                        onCheckedChange = { composeViewModel.onAnonymousToggle(!it) }
                    )
                    Spacer(Modifier.width(8.dp))
                    Text(
                        if (uiState.isAnonymous) "Sending anonymously" else "Showing: $senderDisplay",
                        style = MaterialTheme.typography.bodySmall
                    )
                }
            }

            OutlinedTextField(
                value = uiState.content,
                onValueChange = composeViewModel::onContentChange,
                label = { Text("Message") },
                placeholder = { Text("Type your message...") },
                maxLines = 8,
                modifier = Modifier.fillMaxWidth().weight(1f),
                isError = uiState.hasProfanity || uiState.remainingChars < 0,
                supportingText = {
                    Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                        when {
                            uiState.hasProfanity -> Text("Message contains inappropriate language", color = MaterialTheme.colorScheme.error)
                            uiState.remainingChars < 0 -> Text("Too long by ${-uiState.remainingChars} chars", color = MaterialTheme.colorScheme.error)
                            else -> Text("")
                        }
                        Text(
                            "${uiState.remainingChars}",
                            color = if (uiState.remainingChars < 0) MaterialTheme.colorScheme.error else Color.Unspecified
                        )
                    }
                }
            )

            uiState.error?.let { Text(it, color = MaterialTheme.colorScheme.error) }

            Button(
                onClick = {
                    composeViewModel.sendMessage(
                        senderId = uid,
                        senderVehicleId = primaryVehicle?.id ?: "",
                        senderVehicleDisplay = senderDisplay,
                        recipientVehicleId = recipientVehicleId,
                        recipientUserId = recipientUserId
                    )
                },
                enabled = uiState.canSend,
                modifier = Modifier.fillMaxWidth()
            ) {
                if (uiState.isLoading) CircularProgressIndicator(modifier = Modifier.size(18.dp), strokeWidth = 2.dp)
                else Text("Send")
            }
        }
    }
}
