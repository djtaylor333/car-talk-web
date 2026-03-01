package com.djtaylor.cartalk.ui.screen

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Mail
import androidx.compose.material.icons.filled.Notifications
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.djtaylor.cartalk.data.local.entity.MessageEntity
import com.djtaylor.cartalk.ui.viewmodel.InboxViewModel
import com.google.firebase.auth.FirebaseAuth
import java.text.SimpleDateFormat
import java.util.*

@Composable
fun InboxScreen(
    onNavigateToThread: (threadId: String) -> Unit,
    onNavigateToFriendRequests: () -> Unit,
    viewModel: InboxViewModel = hiltViewModel()
) {
    val uid = FirebaseAuth.getInstance().currentUser?.uid ?: return
    val uiState by viewModel.uiState.collectAsState()
    val anonMessages by viewModel.getAnonymousMessages(uid).collectAsState()
    val friendMessages by viewModel.getFriendMessages(uid).collectAsState()

    var selectedTab by remember { mutableIntStateOf(0) }

    LaunchedEffect(uid) { viewModel.syncInbox(uid) }

    Column(modifier = Modifier.fillMaxSize()) {
        Row(
            modifier = Modifier.fillMaxWidth().padding(16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text("Inbox", style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.Bold)
            IconButton(onClick = onNavigateToFriendRequests) {
                Icon(Icons.Default.Notifications, "Friend Requests")
            }
        }

        TabRow(selectedTabIndex = selectedTab) {
            Tab(selected = selectedTab == 0, onClick = { selectedTab = 0 }) {
                Row(modifier = Modifier.padding(12.dp), horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                    Text("Anonymous")
                    if (anonMessages.count { !it.isRead } > 0) {
                        Badge { Text(anonMessages.count { !it.isRead }.toString()) }
                    }
                }
            }
            Tab(selected = selectedTab == 1, onClick = { selectedTab = 1 }) {
                Row(modifier = Modifier.padding(12.dp), horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                    Text("Friends")
                    if (friendMessages.count { !it.isRead } > 0) {
                        Badge { Text(friendMessages.count { !it.isRead }.toString()) }
                    }
                }
            }
        }

        if (uiState.isSyncing) LinearProgressIndicator(modifier = Modifier.fillMaxWidth())

        val messages = if (selectedTab == 0) anonMessages else friendMessages
        if (messages.isEmpty()) {
            Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Icon(Icons.Default.Mail, null, modifier = Modifier.size(48.dp), tint = MaterialTheme.colorScheme.outlineVariant)
                    Spacer(Modifier.height(8.dp))
                    Text("No messages yet", style = MaterialTheme.typography.bodyMedium)
                }
            }
        } else {
            // Group by threadId, show the latest message per thread
            val threads = messages.groupBy { it.threadId }.map { (_, msgs) -> msgs.maxBy { it.timestampMillis } }
            LazyColumn {
                items(threads, key = { it.id }) { msg ->
                    MessageThreadItem(
                        message = msg,
                        onClick = {
                            viewModel.markAsRead(msg.id)
                            onNavigateToThread(msg.threadId)
                        }
                    )
                    HorizontalDivider()
                }
            }
        }
    }
}

@Composable
private fun MessageThreadItem(message: MessageEntity, onClick: () -> Unit) {
    val senderLabel = if (message.isAnonymous) "Anonymous" else message.senderVehicleDisplay
    val date = remember(message.timestampMillis) {
        SimpleDateFormat("MMM d, h:mm a", Locale.getDefault()).format(Date(message.timestampMillis))
    }
    ListItem(
        headlineContent = { Text(senderLabel, fontWeight = if (!message.isRead) FontWeight.Bold else FontWeight.Normal) },
        supportingContent = { Text(message.content, maxLines = 2) },
        trailingContent = { Text(date, style = MaterialTheme.typography.labelSmall) },
        leadingContent = {
            if (!message.isRead) {
                Badge { }
            }
        },
        modifier = Modifier.clickable(onClick = onClick)
    )
}
