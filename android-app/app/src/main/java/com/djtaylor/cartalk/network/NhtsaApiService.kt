package com.djtaylor.cartalk.network

import com.djtaylor.cartalk.network.model.NhtsaMakesResponse
import com.djtaylor.cartalk.network.model.NhtsaModelsResponse
import retrofit2.http.GET
import retrofit2.http.Path

interface NhtsaApiService {
    @GET("vehicles/GetAllMakes?format=json")
    suspend fun getAllMakes(): NhtsaMakesResponse

    @GET("vehicles/GetModelsForMake/{make}?format=json")
    suspend fun getModelsForMake(@Path("make") make: String): NhtsaModelsResponse
}
