import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { logOut } from '../services/auth';
import { getProfile, removeVehicle } from '../services/vehicles';
import { UserProfile, Vehicle } from '../types';
import VehicleSilhouette from '../components/VehicleSilhouette';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    if (!user) return;
    setLoading(true);
    const p = await getProfile(user.uid);
    setProfile(p);
    setLoading(false);
  };

  useEffect(() => { load(); }, [user]);

  const handleRemove = async (vehicle: Vehicle) => {
    if (!user) return;
    if (!confirm(`Remove ${vehicle.licensePlate}?`)) return;
    await removeVehicle(user.uid, vehicle);
    await load();
  };

  const handleSignOut = async () => {
    await logOut();
    navigate('/login');
  };

  if (loading) return <div className="loading-screen">Loading…</div>;

  return (
    <div className="page">
      <h1 className="page-title">Profile</h1>
      <div className="card profile-header">
        <p className="profile-name">{profile?.displayName ?? user?.email}</p>
        <p className="profile-email">{user?.email}</p>
      </div>

      <h2 className="section-title">My Vehicles</h2>
      {(profile?.vehicles ?? []).map((v) => (
        <div key={v.id} className="card vehicle-card">
          <VehicleSilhouette color={v.color} size={80} />
          <div className="vehicle-info">
            <p className="vehicle-plate">{v.licensePlate}</p>
            <p className="vehicle-detail">{v.make} {v.model} · {v.color}</p>
          </div>
          <button className="btn-danger" onClick={() => handleRemove(v)}>Remove</button>
        </div>
      ))}

      {(profile?.vehicles?.length ?? 0) < 3 && (
        <button className="btn-secondary" onClick={() => navigate('/add-vehicle')}>
          + Add Vehicle
        </button>
      )}

      <button className="btn-secondary" style={{ marginTop: 16 }} onClick={() => navigate('/friend-requests')}>
        Friend Requests
      </button>
      <button className="btn-secondary" style={{ marginTop: 8 }} onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default ProfilePage;
