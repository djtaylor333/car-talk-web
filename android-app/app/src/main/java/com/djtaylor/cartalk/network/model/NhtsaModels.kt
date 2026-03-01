package com.djtaylor.cartalk.network.model

import com.google.gson.annotations.SerializedName

data class NhtsaMakesResponse(
    @SerializedName("Count") val count: Int,
    @SerializedName("Results") val results: List<NhtsaMake>
)

data class NhtsaMake(
    @SerializedName("Make_ID") val makeId: Int,
    @SerializedName("Make_Name") val makeName: String
)

data class NhtsaModelsResponse(
    @SerializedName("Count") val count: Int,
    @SerializedName("Results") val results: List<NhtsaModel>
)

data class NhtsaModel(
    @SerializedName("Model_ID") val modelId: Int,
    @SerializedName("Model_Name") val modelName: String,
    @SerializedName("Make_ID") val makeId: Int,
    @SerializedName("Make_Name") val makeName: String
)
