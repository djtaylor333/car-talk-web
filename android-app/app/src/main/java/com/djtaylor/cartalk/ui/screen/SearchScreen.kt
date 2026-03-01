package com.djtaylor.cartalk.ui.screen

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Mail
import androidx.compose.material.icons.filled.PersonAdd
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.djtaylor.cartalk.ui.components.VehicleSilhouette
import com.djtaylor.cartalk.ui.viewmodel.FriendsViewModel
import com.djtaylor.cartalk.ui.viewmodel.SearchViewModel
import com.google.firebase.auth.FirebaseAuth

@Composable
fun SearchScreen(
    onNavigateToCompose: (vehicleId: String, userId: String, isFriend: Boolean) -> Unit,
    searchViewModel: SearchViewModel = hiltViewModel(),
    friendsViewModel: FriendsViewModel = hiltViewModel()
) {
    val uid = FirebaseAuth.getInstance().currentUser?.uid ?: ""
    val uiState by searchViewModel.uiState.collectAsState()
    val friendsUiState by friendsViewModel.uiState.collectAsState()

    LaunchedEffect(uid) { if (uid.isNotEmpty()) friendsViewModel.loadFriendsAndRequests(uid) }

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Text("Search Vehicles", style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.Bold)
        Spacer(Modifier.height(12.dp))

        OutlinedTextField(
            value = uiState.query,
            onValueChange = searchViewModel::onQueryChange,
            placeholder = { Text("Enter license plate (e.g. ABC-1234)") },
            trailingIcon = {
                IconButton(onClick = searchViewModel::search) {
                    Icon(Icons.Default.Search, "Search")
                }
            },
            singleLine = true,
            keyboardOptions = KeyboardOptions(imeAction = ImeAction.Search),
            keyboardActions = KeyboardActions(onSearch = { searchViewModel.search() }),
            modifier = Modifier.fillMaxWidth()
        )

        Spacer(Modifier.height(16.dp))

        when {
            uiState.isLoading -> Box(Modifier.fillMaxWidth(), contentAlignment = Alignment.Center) {
                CircularProgressIndicator()
            }
            uiState.noResults -> Text("No vehicle found for that plate.", style = MaterialTheme.typography.bodyMedium)
            uiState.error != null -> Text(uiState.error!!, color = MaterialTheme.colorScheme.error)
            uiState.result != null -> {
                val r = uiState.result!!
                val isFriend = friendsUiState.friends.any { it.vehicleId == r.vehicleId }
                Card(modifier = Modifier.fillMaxWidth()) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        VehicleSilhouette(color = r.color, modifier = Modifier.fillMaxWidth().height(120.dp))
                        Spacer(Modifier.height(8.dp))
                        Text(r.licensePlate, style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
                        Text("${r.make} ${r.model} · ${r.color}", style = MaterialTheme.typography.bodyMedium)
                        Spacer(Modifier.height(12.dp))
                        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                            Button(
                                onClick = { onNavigateToCompose(r.vehicleId, r.userId, isFriend) },
                                modifier = Modifier.weight(1f)
                            ) {
                                Icon(Icons.Default.Mail, null, modifier = Modifier.size(18.dp))
                                Spacer(Modifier.width(4.dp))
                                Text("Message")
                            }
                            if (!isFriend) {
                                OutlinedButton(
                                    onClick = {
                                        friendsViewModel.sendFriendRequest(
                                            requesterId = uid,
                                            requesterVehicleId = "",
                                            requesterVehicleDisplay = "",
                                            recipientVehicleId = r.vehicleId,
                                            recipientUserId = r.userId,
                                            message = ""
                                        )
                                    },
                                    modifier = Modifier.weight(1f)
                                ) {
                                    Icon(Icons.Default.PersonAdd, null, modifier = Modifier.size(18.dp))
                                    Spacer(Modifier.width(4.dp))
                                    Text("Add Friend")
                                }
                            }
                        }
                        if (isFriend) {
                            Text("Friend", style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.primary)
                        }
                        friendsUiState.successMessage?.let {
                            Text(it, color = MaterialTheme.colorScheme.primary, style = MaterialTheme.typography.bodySmall)
                        }
                    }
                }
            }
        }
    }
}
