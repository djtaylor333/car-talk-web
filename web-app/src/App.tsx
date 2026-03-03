import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AddVehiclePage from './pages/AddVehiclePage';
import SearchPage from './pages/SearchPage';
import InboxPage from './pages/InboxPage';
import ThreadPage from './pages/ThreadPage';
import ComposePage from './pages/ComposePage';
import ProfilePage from './pages/ProfilePage';
import FriendRequestsPage from './pages/FriendRequestsPage';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading-screen">Loading…</div>;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={user ? <Navigate to="/search" replace /> : <LoginPage />} />
      <Route path="/signup" element={user ? <Navigate to="/add-vehicle" replace /> : <SignUpPage />} />

      {/* Protected routes with bottom nav layout */}
      <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/friends" element={<FriendRequestsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      {/* Protected routes without bottom nav */}
      <Route path="/add-vehicle" element={<ProtectedRoute><AddVehiclePage /></ProtectedRoute>} />
      <Route path="/thread/:threadId" element={<ProtectedRoute><ThreadPage /></ProtectedRoute>} />
      <Route path="/compose" element={<ProtectedRoute><ComposePage /></ProtectedRoute>} />
      {/* Keep old route as redirect for any existing links */}
      <Route path="/friend-requests" element={<Navigate to="/friends" replace />} />

      {/* Default redirect */}
      <Route path="/" element={<Navigate to={user ? '/search' : '/login'} replace />} />
      <Route path="*" element={<Navigate to={user ? '/search' : '/login'} replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter basename="/car-talk-web">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
