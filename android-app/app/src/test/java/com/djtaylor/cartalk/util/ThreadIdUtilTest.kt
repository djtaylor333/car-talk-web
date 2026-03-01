package com.djtaylor.cartalk.util

import org.junit.Assert.*
import org.junit.Test

class ThreadIdUtilTest {

    @Test
    fun `same pair in different order produces same threadId`() {
        val id1 = ThreadIdUtil.generate("vehicleA", "vehicleB")
        val id2 = ThreadIdUtil.generate("vehicleB", "vehicleA")
        assertEquals(id1, id2)
    }

    @Test
    fun `different pairs produce different threadIds`() {
        val id1 = ThreadIdUtil.generate("vehicleA", "vehicleB")
        val id2 = ThreadIdUtil.generate("vehicleA", "vehicleC")
        assertNotEquals(id1, id2)
    }

    @Test
    fun `threadId is deterministic`() {
        repeat(5) {
            assertEquals(
                ThreadIdUtil.generate("vehicleX", "vehicleY"),
                ThreadIdUtil.generate("vehicleX", "vehicleY")
            )
        }
    }

    @Test
    fun `threadId uses underscore separator`() {
        val id = ThreadIdUtil.generate("aaa", "bbb")
        assertTrue(id.contains("_"))
    }

    @Test
    fun `same vehicle with itself produces valid id`() {
        val id = ThreadIdUtil.generate("vehicleA", "vehicleA")
        assertNotNull(id)
        assertTrue(id.isNotBlank())
    }
}
