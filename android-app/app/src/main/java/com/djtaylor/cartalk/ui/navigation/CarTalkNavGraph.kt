package com.djtaylor.cartalk.ui.navigation

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Mail
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.djtaylor.cartalk.ui.screen.AddVehicleScreen
import com.djtaylor.cartalk.ui.screen.ComposeMessageScreen
import com.djtaylor.cartalk.ui.screen.FriendRequestsScreen
import com.djtaylor.cartalk.ui.screen.InboxScreen
import com.djtaylor.cartalk.ui.screen.LoginScreen
import com.djtaylor.cartalk.ui.screen.ProfileScreen
import com.djtaylor.cartalk.ui.screen.SearchScreen
import com.djtaylor.cartalk.ui.screen.SignUpScreen
import com.djtaylor.cartalk.ui.screen.ThreadScreen
import com.djtaylor.cartalk.ui.viewmodel.AuthViewModel

sealed class Screen(val route: String) {
    object Login : Screen("login")
    object SignUp : Screen("signup")
    object AddVehicle : Screen("add_vehicle")
    object Search : Screen("search")
    object Inbox : Screen("inbox")
    object Profile : Screen("profile")
    object ComposeMessage : Screen("compose/{recipientVehicleId}/{recipientUserId}/{isFriend}") {
        fun createRoute(vehicleId: String, userId: String, isFriend: Boolean) =
            "compose/$vehicleId/$userId/$isFriend"
    }
    object Thread : Screen("thread/{threadId}") {
        fun createRoute(threadId: String) = "thread/$threadId"
    }
    object FriendRequests : Screen("friend_requests")
}

private val bottomNavItems = listOf(
    Triple(Screen.Search, Icons.Default.Search, "Search"),
    Triple(Screen.Inbox, Icons.Default.Mail, "Inbox"),
    Triple(Screen.Profile, Icons.Default.Person, "Profile")
)

@Composable
fun CarTalkNavGraph(
    navController: NavHostController = rememberNavController(),
    authViewModel: AuthViewModel = hiltViewModel()
) {
    val currentUser by authViewModel.currentUser.collectAsState()
    val startDestination = if (currentUser != null) Screen.Search.route else Screen.Login.route

    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentDest = navBackStackEntry?.destination
    val showBottomBar = bottomNavItems.any { (screen, _, _) ->
        currentDest?.hierarchy?.any { it.route == screen.route } == true
    }

    Scaffold(
        bottomBar = {
            if (showBottomBar) {
                NavigationBar {
                    bottomNavItems.forEach { (screen, icon, label) ->
                        NavigationBarItem(
                            icon = { Icon(icon, contentDescription = label) },
                            label = { Text(label) },
                            selected = currentDest?.hierarchy?.any { it.route == screen.route } == true,
                            onClick = {
                                navController.navigate(screen.route) {
                                    popUpTo(navController.graph.findStartDestination().id) { saveState = true }
                                    launchSingleTop = true
                                    restoreState = true
                                }
                            }
                        )
                    }
                }
            }
        }
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = startDestination,
            modifier = Modifier.padding(innerPadding)
        ) {
            composable(Screen.Login.route) {
                LoginScreen(
                    onNavigateToSignUp = { navController.navigate(Screen.SignUp.route) },
                    onLoginSuccess = {
                        navController.navigate(Screen.Search.route) {
                            popUpTo(Screen.Login.route) { inclusive = true }
                        }
                    }
                )
            }
            composable(Screen.SignUp.route) {
                SignUpScreen(
                    onSignUpSuccess = { navController.navigate(Screen.AddVehicle.route) },
                    onNavigateToLogin = { navController.popBackStack() }
                )
            }
            composable(Screen.AddVehicle.route) {
                AddVehicleScreen(
                    onDone = {
                        navController.navigate(Screen.Search.route) {
                            popUpTo(Screen.SignUp.route) { inclusive = true }
                        }
                    }
                )
            }
            composable(Screen.Search.route) {
                SearchScreen(
                    onNavigateToCompose = { vehicleId, userId, isFriend ->
                        navController.navigate(Screen.ComposeMessage.createRoute(vehicleId, userId, isFriend))
                    }
                )
            }
            composable(Screen.Inbox.route) {
                InboxScreen(
                    onNavigateToThread = { threadId ->
                        navController.navigate(Screen.Thread.createRoute(threadId))
                    },
                    onNavigateToFriendRequests = {
                        navController.navigate(Screen.FriendRequests.route)
                    }
                )
            }
            composable(
                route = Screen.Thread.route,
                arguments = listOf(navArgument("threadId") { type = NavType.StringType })
            ) { backStackEntry ->
                ThreadScreen(
                    threadId = backStackEntry.arguments?.getString("threadId") ?: "",
                    onBack = { navController.popBackStack() }
                )
            }
            composable(
                route = Screen.ComposeMessage.route,
                arguments = listOf(
                    navArgument("recipientVehicleId") { type = NavType.StringType },
                    navArgument("recipientUserId") { type = NavType.StringType },
                    navArgument("isFriend") { type = NavType.BoolType }
                )
            ) { backStackEntry ->
                ComposeMessageScreen(
                    recipientVehicleId = backStackEntry.arguments?.getString("recipientVehicleId") ?: "",
                    recipientUserId = backStackEntry.arguments?.getString("recipientUserId") ?: "",
                    isFriend = backStackEntry.arguments?.getBoolean("isFriend") ?: false,
                    onBack = { navController.popBackStack() },
                    onSent = { navController.popBackStack() }
                )
            }
            composable(Screen.Profile.route) {
                ProfileScreen(
                    onSignOut = {
                        navController.navigate(Screen.Login.route) {
                            popUpTo(0) { inclusive = true }
                        }
                    }
                )
            }
            composable(Screen.FriendRequests.route) {
                FriendRequestsScreen(onBack = { navController.popBackStack() })
            }
        }
    }
}
