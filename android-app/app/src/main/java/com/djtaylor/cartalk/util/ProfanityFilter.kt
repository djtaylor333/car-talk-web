package com.djtaylor.cartalk.util

/**
 * Simple profanity filter backed by a bundled word list.
 * The list is conservative — only clear slurs and sexual/hate terms.
 * Extend [BANNED_WORDS] as needed.
 */
object ProfanityFilter {

    private val BANNED_WORDS = setOf(
        "fuck", "shit", "cunt", "nigger", "nigga", "faggot", "fag",
        "bitch", "ass", "asshole", "bastard", "cock", "dick", "pussy",
        "slut", "whore", "twat", "wanker", "bollocks", "motherfucker",
        "mf", "stfu", "wtf" // common abbreviations
    )

    /** Returns true if [text] contains a banned word (case-insensitive, word-boundary aware). */
    fun containsProfanity(text: String): Boolean {
        val lower = text.lowercase()
        return BANNED_WORDS.any { word ->
            lower.contains(Regex("\\b${Regex.escape(word)}\\b"))
        }
    }

    /** Sanitise for display purposes — replaces banned words with asterisks. */
    fun sanitise(text: String): String {
        var result = text
        BANNED_WORDS.forEach { word ->
            result = result.replace(
                Regex("(?i)\\b${Regex.escape(word)}\\b"),
                "*".repeat(word.length)
            )
        }
        return result
    }
}
