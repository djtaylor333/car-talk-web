package com.djtaylor.cartalk.service

import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Intent
import android.net.Uri
import androidx.core.app.NotificationCompat
import com.djtaylor.cartalk.CarTalkApplication
import com.djtaylor.cartalk.MainActivity
import com.djtaylor.cartalk.R
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import kotlin.random.Random

class CarTalkMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        val data = remoteMessage.data
        val threadId = data["threadId"] ?: ""
        val senderLabel = data["senderLabel"] ?: "Anonymous"
        val preview = data["preview"] ?: "You have a new message"

        showNotification(threadId, senderLabel, preview)
    }

    override fun onNewToken(token: String) {
        // Token refresh — in production store this to Firestore for the current user
    }

    private fun showNotification(threadId: String, senderLabel: String, preview: String) {
        val deepLinkIntent = Intent(
            Intent.ACTION_VIEW,
            Uri.parse("cartalk://thread?threadId=$threadId"),
            this,
            MainActivity::class.java
        )
        val pendingIntent = PendingIntent.getActivity(
            this,
            0,
            deepLinkIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val title = "CarTalk message received"
        val body = "$senderLabel sent '$preview'"

        val notification = NotificationCompat.Builder(this, CarTalkApplication.CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_notification)
            .setContentTitle(title)
            .setContentText(body)
            .setStyle(NotificationCompat.BigTextStyle().bigText(body))
            .setAutoCancel(true)
            .setContentIntent(pendingIntent)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            // Android Auto notification extension — displays on Auto-compatible head units
            .extend(
                NotificationCompat.CarExtender()
                    .setLargeIcon(null)
            )
            .build()

        val manager = getSystemService(NotificationManager::class.java)
        manager.notify(Random.nextInt(), notification)
    }
}
