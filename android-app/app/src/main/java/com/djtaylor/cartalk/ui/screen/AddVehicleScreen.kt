package com.djtaylor.cartalk.ui.screen

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Check
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.unit.dp
import androidx.core.graphics.ColorUtils
import androidx.hilt.navigation.compose.hiltViewModel
import com.djtaylor.cartalk.data.VehicleData
import com.djtaylor.cartalk.data.model.Vehicle
import com.djtaylor.cartalk.data.model.VehicleColor
import com.djtaylor.cartalk.ui.viewmodel.ProfileViewModel
import com.google.firebase.auth.FirebaseAuth

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AddVehicleScreen(
    onDone: () -> Unit,
    profileViewModel: ProfileViewModel = hiltViewModel()
) {
    val uid = FirebaseAuth.getInstance().currentUser?.uid ?: return
    val uiState by profileViewModel.uiState.collectAsState()

    var licensePlate by remember { mutableStateOf("") }
    var make by remember { mutableStateOf("") }
    var model by remember { mutableStateOf("") }
    var selectedColor by remember { mutableStateOf<VehicleColor?>(null) }

    var makeExpanded by remember { mutableStateOf(false) }
    var modelExpanded by remember { mutableStateOf(false) }
    val availableModels by remember(make) { derivedStateOf { VehicleData.modelsFor(make) } }

    LaunchedEffect(uiState.successMessage) {
        if (uiState.successMessage != null) onDone()
    }

    Column(
        modifier = Modifier.fillMaxSize().padding(24.dp).verticalScroll(rememberScrollState()),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Text("Add Your Vehicle", style = MaterialTheme.typography.headlineMedium)
        Text("Your vehicle is your anonymous identity in CarTalk.", style = MaterialTheme.typography.bodySmall)

        OutlinedTextField(
            value = licensePlate,
            onValueChange = { licensePlate = it.uppercase() },
            label = { Text("License Plate (e.g. ABC-1234)") },
            singleLine = true,
            modifier = Modifier.fillMaxWidth()
        )

        // Make dropdown
        ExposedDropdownMenuBox(
            expanded = makeExpanded,
            onExpandedChange = { makeExpanded = it },
            modifier = Modifier.fillMaxWidth()
        ) {
            OutlinedTextField(
                value = make,
                onValueChange = {},
                readOnly = true,
                label = { Text("Make") },
                trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = makeExpanded) },
                singleLine = true,
                modifier = Modifier.fillMaxWidth().menuAnchor()
            )
            ExposedDropdownMenu(
                expanded = makeExpanded,
                onDismissRequest = { makeExpanded = false }
            ) {
                VehicleData.makes.forEach { makeName ->
                    DropdownMenuItem(
                        text = { Text(makeName) },
                        onClick = {
                            make = makeName
                            model = ""
                            makeExpanded = false
                        }
                    )
                }
            }
        }

        // Model dropdown (disabled until make selected)
        ExposedDropdownMenuBox(
            expanded = modelExpanded && make.isNotEmpty(),
            onExpandedChange = { if (make.isNotEmpty()) modelExpanded = it },
            modifier = Modifier.fillMaxWidth()
        ) {
            OutlinedTextField(
                value = model,
                onValueChange = {},
                readOnly = true,
                enabled = make.isNotEmpty(),
                label = { Text("Model") },
                trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = modelExpanded && make.isNotEmpty()) },
                singleLine = true,
                modifier = Modifier.fillMaxWidth().menuAnchor()
            )
            ExposedDropdownMenu(
                expanded = modelExpanded && make.isNotEmpty(),
                onDismissRequest = { modelExpanded = false }
            ) {
                availableModels.forEach { modelName ->
                    DropdownMenuItem(
                        text = { Text(modelName) },
                        onClick = {
                            model = modelName
                            modelExpanded = false
                        }
                    )
                }
            }
        }

        Text("Color", style = MaterialTheme.typography.labelLarge)
        LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            items(VehicleColor.values()) { vehicleColor ->
                val parsedColor = Color(android.graphics.Color.parseColor(vehicleColor.hexColor))
                val isSelected = selectedColor == vehicleColor
                Box(
                    modifier = Modifier
                        .size(44.dp)
                        .clip(CircleShape)
                        .background(parsedColor)
                        .border(
                            width = if (isSelected) 3.dp else 1.dp,
                            color = if (isSelected) MaterialTheme.colorScheme.primary else Color.Gray,
                            shape = CircleShape
                        )
                        .clickable { selectedColor = vehicleColor },
                    contentAlignment = Alignment.Center
                ) {
                    if (isSelected) {
                        val isLight = ColorUtils.calculateLuminance(parsedColor.toArgb()) > 0.5
                        Icon(
                            Icons.Default.Check,
                            contentDescription = null,
                            tint = if (isLight) Color.Black else Color.White,
                            modifier = Modifier.size(20.dp)
                        )
                    }
                }
            }
        }
        selectedColor?.let { Text(it.displayName, style = MaterialTheme.typography.bodySmall) }

        uiState.error?.let { Text(it, color = MaterialTheme.colorScheme.error) }

        Button(
            onClick = {
                profileViewModel.addVehicle(
                    uid,
                    Vehicle(
                        licensePlate = licensePlate.trim(),
                        make = make.trim(),
                        model = model.trim(),
                        color = selectedColor?.displayName ?: ""
                    )
                )
            },
            enabled = licensePlate.isNotBlank() && make.isNotBlank() && model.isNotBlank() && selectedColor != null && !uiState.isLoading,
            modifier = Modifier.fillMaxWidth()
        ) {
            if (uiState.isLoading) CircularProgressIndicator(modifier = Modifier.size(18.dp), strokeWidth = 2.dp)
            else Text("Add Vehicle")
        }

        TextButton(onClick = onDone, modifier = Modifier.fillMaxWidth()) { Text("Skip for now") }
    }
}


        Text("Color", style = MaterialTheme.typography.labelLarge)
        LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            items(VehicleColor.values()) { vehicleColor ->
                val parsedColor = Color(android.graphics.Color.parseColor(vehicleColor.hexColor))
                val isSelected = selectedColor == vehicleColor
                Box(
                    modifier = Modifier
                        .size(44.dp)
                        .clip(CircleShape)
                        .background(parsedColor)
                        .border(
                            width = if (isSelected) 3.dp else 1.dp,
                            color = if (isSelected) MaterialTheme.colorScheme.primary else Color.Gray,
                            shape = CircleShape
                        )
                        .clickable { selectedColor = vehicleColor },
                    contentAlignment = Alignment.Center
                ) {
                    if (isSelected) {
                        val isLight = ColorUtils.calculateLuminance(parsedColor.toArgb()) > 0.5
                        Icon(
                            Icons.Default.Check,
                            contentDescription = null,
                            tint = if (isLight) Color.Black else Color.White,
                            modifier = Modifier.size(20.dp)
                        )
                    }
                }
            }
        }
        selectedColor?.let { Text(it.displayName, style = MaterialTheme.typography.bodySmall) }

        uiState.error?.let { Text(it, color = MaterialTheme.colorScheme.error) }

        Button(
            onClick = {
                profileViewModel.addVehicle(
                    uid,
                    Vehicle(
                        licensePlate = licensePlate.trim(),
                        make = make.trim(),
                        model = model.trim(),
                        color = selectedColor?.displayName ?: ""
                    )
                )
            },
            enabled = licensePlate.isNotBlank() && make.isNotBlank() && model.isNotBlank() && selectedColor != null && !uiState.isLoading,
            modifier = Modifier.fillMaxWidth()
        ) {
            if (uiState.isLoading) CircularProgressIndicator(modifier = Modifier.size(18.dp), strokeWidth = 2.dp)
            else Text("Add Vehicle")
        }

        TextButton(onClick = onDone, modifier = Modifier.fillMaxWidth()) { Text("Skip for now") }
    }
}
