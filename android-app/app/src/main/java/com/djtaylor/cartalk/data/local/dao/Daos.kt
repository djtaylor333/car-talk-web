package com.djtaylor.cartalk.data.local.dao

import androidx.room.*
import com.djtaylor.cartalk.data.local.entity.MessageEntity
import com.djtaylor.cartalk.data.local.entity.VehicleMakeEntity
import com.djtaylor.cartalk.data.local.entity.VehicleModelEntity
import kotlinx.coroutines.flow.Flow

@Dao
interface MessageDao {
    @Query("SELECT * FROM messages WHERE recipientUserId = :userId AND isFriendMessage = 0 ORDER BY timestampMillis DESC")
    fun getAnonymousMessages(userId: String): Flow<List<MessageEntity>>

    @Query("SELECT * FROM messages WHERE recipientUserId = :userId AND isFriendMessage = 1 ORDER BY timestampMillis DESC")
    fun getFriendMessages(userId: String): Flow<List<MessageEntity>>

    @Query("SELECT * FROM messages WHERE threadId = :threadId ORDER BY timestampMillis ASC")
    fun getThreadMessages(threadId: String): Flow<List<MessageEntity>>

    @Upsert
    suspend fun upsertMessages(messages: List<MessageEntity>)

    @Query("DELETE FROM messages WHERE expiresAtMillis < :nowMillis")
    suspend fun deleteExpiredMessages(nowMillis: Long)

    @Query("UPDATE messages SET isRead = 1 WHERE id = :messageId")
    suspend fun markAsRead(messageId: String)

    @Query("DELETE FROM messages WHERE id = :messageId")
    suspend fun deleteMessage(messageId: String)
}

@Dao
interface VehicleDao {
    @Query("SELECT * FROM vehicle_makes LIMIT 1")
    suspend fun getFirstMake(): VehicleMakeEntity?

    @Query("SELECT * FROM vehicle_makes ORDER BY makeName ASC")
    fun getAllMakes(): Flow<List<VehicleMakeEntity>>

    @Query("SELECT * FROM vehicle_models WHERE makeName = :makeName ORDER BY modelName ASC")
    fun getModelsForMake(makeName: String): Flow<List<VehicleModelEntity>>

    @Upsert
    suspend fun upsertMakes(makes: List<VehicleMakeEntity>)

    @Upsert
    suspend fun upsertModels(models: List<VehicleModelEntity>)

    @Query("DELETE FROM vehicle_makes")
    suspend fun clearMakes()

    @Query("DELETE FROM vehicle_models WHERE makeName = :makeName")
    suspend fun clearModelsForMake(makeName: String)
}
