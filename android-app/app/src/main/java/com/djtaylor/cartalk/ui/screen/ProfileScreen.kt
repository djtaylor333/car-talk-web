package com.djtaylor.cartalk.ui.screen

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.DirectionsCar
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.djtaylor.cartalk.data.model.Vehicle
import com.djtaylor.cartalk.ui.viewmodel.ProfileViewModel
import com.google.firebase.auth.FirebaseAuth

@Composable
fun ProfileScreen(
    onSignOut: () -> Unit,
    viewModel: ProfileViewModel = hiltViewModel()
) {
    val uid = FirebaseAuth.getInstance().currentUser?.uid ?: return
    val uiState by viewModel.uiState.collectAsState()
    var showAddVehicleDialog by remember { mutableStateOf(false) }

    LaunchedEffect(uid) { viewModel.loadProfile(uid) }

    LazyColumn(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        item {
            Text("Profile", style = MaterialTheme.typography.headlineSmall)
            Spacer(Modifier.height(4.dp))
            Text("Account: ${FirebaseAuth.getInstance().currentUser?.email ?: "Unknown"}", style = MaterialTheme.typography.bodySmall)
            Spacer(Modifier.height(16.dp))
            Text("My Vehicles (${uiState.profile?.vehicles?.size ?: 0}/3)", style = MaterialTheme.typography.titleMedium)
            Spacer(Modifier.height(8.dp))
        }

        items(uiState.profile?.vehicles ?: emptyList(), key = { it.id }) { vehicle ->
            VehicleCard(vehicle = vehicle, onDelete = { viewModel.removeVehicle(uid, vehicle.id) })
            Spacer(Modifier.height(8.dp))
        }

        item {
            val canAdd = (uiState.profile?.vehicles?.size ?: 0) < 3
            if (canAdd) {
                OutlinedButton(
                    onClick = { showAddVehicleDialog = true },
                    modifier = Modifier.fillMaxWidth()
                ) { Text("Add Vehicle") }
            } else {
                Text("Maximum 3 vehicles reached.", style = MaterialTheme.typography.bodySmall)
            }

            uiState.error?.let {
                Spacer(Modifier.height(8.dp))
                Text(it, color = MaterialTheme.colorScheme.error)
            }

            Spacer(Modifier.height(32.dp))
            Button(
                onClick = { onSignOut(); FirebaseAuth.getInstance().signOut() },
                colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.error),
                modifier = Modifier.fillMaxWidth()
            ) { Text("Sign Out") }
        }
    }

    if (showAddVehicleDialog) {
        AddVehicleDialog(
            onDismiss = { showAddVehicleDialog = false },
            onConfirm = { vehicle ->
                viewModel.addVehicle(uid, vehicle)
                showAddVehicleDialog = false
            }
        )
    }
}

@Composable
private fun VehicleCard(vehicle: Vehicle, onDelete: () -> Unit) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Row(
            modifier = Modifier.padding(12.dp).fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(Icons.Default.DirectionsCar, null, modifier = Modifier.size(32.dp))
            Spacer(Modifier.width(12.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text("${vehicle.make} ${vehicle.model}", style = MaterialTheme.typography.bodyLarge)
                Text("${vehicle.licensePlate} · ${vehicle.color}", style = MaterialTheme.typography.bodySmall)
            }
            IconButton(onClick = onDelete) {
                Icon(Icons.Default.Delete, "Remove", tint = MaterialTheme.colorScheme.error)
            }
        }
    }
}

@Composable
private fun AddVehicleDialog(onDismiss: () -> Unit, onConfirm: (Vehicle) -> Unit) {
    var plate by remember { mutableStateOf("") }
    var make by remember { mutableStateOf("") }
    var model by remember { mutableStateOf("") }
    var color by remember { mutableStateOf("") }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Add Vehicle") },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                OutlinedTextField(plate, { plate = it.uppercase() }, label = { Text("License Plate") }, singleLine = true)
                OutlinedTextField(make, { make = it }, label = { Text("Make") }, singleLine = true)
                OutlinedTextField(model, { model = it }, label = { Text("Model") }, singleLine = true)
                OutlinedTextField(color, { color = it }, label = { Text("Color") }, singleLine = true)
            }
        },
        confirmButton = {
            Button(
                onClick = { onConfirm(Vehicle(licensePlate = plate, make = make, model = model, color = color)) },
                enabled = plate.isNotBlank() && make.isNotBlank() && model.isNotBlank() && color.isNotBlank()
            ) { Text("Add") }
        },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Cancel") } }
    )
}
