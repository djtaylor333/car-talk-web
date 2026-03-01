package com.djtaylor.cartalk.util

/** Generates consistent threadId from two vehicleIds (order-independent). */
object ThreadIdUtil {
    fun generate(vehicleIdA: String, vehicleIdB: String): String {
        val sorted = listOf(vehicleIdA, vehicleIdB).sorted()
        return "${sorted[0]}_${sorted[1]}"
    }
}
