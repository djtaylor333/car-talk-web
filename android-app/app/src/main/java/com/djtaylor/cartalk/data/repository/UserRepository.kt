package com.djtaylor.cartalk.data.repository

import com.djtaylor.cartalk.data.model.UserProfile
import com.djtaylor.cartalk.data.model.Vehicle
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.SetOptions
import kotlinx.coroutines.tasks.await
import java.util.UUID
import javax.inject.Inject
import javax.inject.Singleton

sealed class RepoResult<out T> {
    data class Success<T>(val data: T) : RepoResult<T>()
    data class Error(val message: String) : RepoResult<Nothing>()
}

@Singleton
class UserRepository @Inject constructor(
    private val firestore: FirebaseFirestore
) {
    private val usersCol get() = firestore.collection("users")
    private val lookupCol get() = firestore.collection("vehicleLookup")

    suspend fun getProfile(uid: String): RepoResult<UserProfile> = runCatching {
        val doc = usersCol.document(uid).get().await()
        if (doc.exists()) {
            @Suppress("UNCHECKED_CAST")
            val vehicleList = (doc.get("vehicles") as? List<Map<String, Any>> ?: emptyList())
                .map { map ->
                    Vehicle(
                        id = map["id"] as? String ?: "",
                        licensePlate = map["licensePlate"] as? String ?: "",
                        make = map["make"] as? String ?: "",
                        model = map["model"] as? String ?: "",
                        color = map["color"] as? String ?: ""
                    )
                }
            RepoResult.Success(
                UserProfile(
                    uid = uid,
                    email = doc.getString("email"),
                    phone = doc.getString("phone"),
                    vehicles = vehicleList
                )
            )
        } else {
            RepoResult.Error("Profile not found")
        }
    }.getOrElse { RepoResult.Error(it.message ?: "Failed to load profile") }

    suspend fun createOrUpdateProfile(profile: UserProfile): RepoResult<Unit> = runCatching {
        usersCol.document(profile.uid).set(profile, SetOptions.merge()).await()
        RepoResult.Success(Unit)
    }.getOrElse { RepoResult.Error(it.message ?: "Failed to save profile") }

    suspend fun addVehicle(uid: String, vehicle: Vehicle, currentProfile: UserProfile): RepoResult<Unit> {
        if (currentProfile.vehicles.size >= 3) return RepoResult.Error("Maximum 3 vehicles allowed")
        val newVehicle = vehicle.copy(id = vehicle.id.ifBlank { UUID.randomUUID().toString() })
        val updated = currentProfile.copy(vehicles = currentProfile.vehicles + newVehicle)
        return runCatching {
            firestore.runBatch { batch ->
                batch.set(usersCol.document(uid), updated, SetOptions.merge())
                val lookupKey = newVehicle.licensePlate.uppercase().replace(" ", "")
                batch.set(
                    lookupCol.document(lookupKey),
                    mapOf(
                        "userId" to uid,
                        "vehicleId" to newVehicle.id,
                        "licensePlate" to newVehicle.licensePlate,
                        "make" to newVehicle.make,
                        "model" to newVehicle.model,
                        "color" to newVehicle.color
                    )
                )
            }.await()
            RepoResult.Success(Unit)
        }.getOrElse { RepoResult.Error(it.message ?: "Failed to add vehicle") }
    }

    suspend fun removeVehicle(uid: String, vehicleId: String, currentProfile: UserProfile): RepoResult<Unit> {
        val vehicle = currentProfile.vehicles.find { it.id == vehicleId }
            ?: return RepoResult.Error("Vehicle not found")
        val updated = currentProfile.copy(vehicles = currentProfile.vehicles.filter { it.id != vehicleId })
        return runCatching {
            firestore.runBatch { batch ->
                batch.set(usersCol.document(uid), updated, SetOptions.merge())
                val lookupKey = vehicle.licensePlate.uppercase().replace(" ", "")
                batch.delete(lookupCol.document(lookupKey))
            }.await()
            RepoResult.Success(Unit)
        }.getOrElse { RepoResult.Error(it.message ?: "Failed to remove vehicle") }
    }

    suspend fun searchByLicensePlate(plate: String): RepoResult<Map<String, Any>?> = runCatching {
        val key = plate.uppercase().replace(" ", "")
        val doc = lookupCol.document(key).get().await()
        if (doc.exists()) RepoResult.Success(doc.data)
        else RepoResult.Success(null)
    }.getOrElse { RepoResult.Error(it.message ?: "Search failed") }
}
