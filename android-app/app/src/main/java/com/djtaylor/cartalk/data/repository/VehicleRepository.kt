package com.djtaylor.cartalk.data.repository

import com.djtaylor.cartalk.data.local.dao.VehicleDao
import com.djtaylor.cartalk.data.local.entity.VehicleMakeEntity
import com.djtaylor.cartalk.data.local.entity.VehicleModelEntity
import com.djtaylor.cartalk.network.NhtsaApiService
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.first
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class VehicleRepository @Inject constructor(
    private val apiService: NhtsaApiService,
    private val vehicleDao: VehicleDao
) {
    companion object {
        private const val CACHE_TTL_MS = 7L * 24 * 60 * 60 * 1000 // 7 days
    }

    fun getMakesFlow(): Flow<List<VehicleMakeEntity>> = vehicleDao.getAllMakes()

    fun getModelsFlow(makeName: String): Flow<List<VehicleModelEntity>> =
        vehicleDao.getModelsForMake(makeName)

    /** Fetches makes from NHTSA if cache is stale (>7 days) or empty. */
    suspend fun refreshMakesIfNeeded(): RepoResult<Unit> = runCatching {
        val first = vehicleDao.getFirstMake()
        val now = System.currentTimeMillis()
        if (first == null || now - first.cachedAtMillis > CACHE_TTL_MS) {
            val response = apiService.getAllMakes()
            val entities = response.results.map { make ->
                VehicleMakeEntity(
                    makeId = make.makeId,
                    makeName = make.makeName,
                    cachedAtMillis = now
                )
            }
            vehicleDao.clearMakes()
            vehicleDao.upsertMakes(entities)
        }
        RepoResult.Success(Unit)
    }.getOrElse { RepoResult.Error(it.message ?: "Failed to load vehicle makes") }

    suspend fun refreshModelsIfNeeded(makeName: String): RepoResult<Unit> = runCatching {
        val existing = vehicleDao.getModelsForMake(makeName).first()
        val now = System.currentTimeMillis()
        val stale = existing.isEmpty() || now - (existing.firstOrNull()?.cachedAtMillis ?: 0L) > CACHE_TTL_MS
        if (stale) {
            val response = apiService.getModelsForMake(makeName)
            val entities = response.results.map { model ->
                VehicleModelEntity(
                    modelId = model.modelId,
                    makeName = makeName,
                    modelName = model.modelName,
                    cachedAtMillis = now
                )
            }
            vehicleDao.clearModelsForMake(makeName)
            vehicleDao.upsertModels(entities)
        }
        RepoResult.Success(Unit)
    }.getOrElse { RepoResult.Error(it.message ?: "Failed to load vehicle models") }
}
