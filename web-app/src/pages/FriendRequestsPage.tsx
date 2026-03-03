import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useFriends } from '../hooks/useFriends';
import { respondToRequest } from '../services/friends';
import { FriendRequest, Friend } from '../types';

const RequestCard: React.FC<{ req: FriendRequest; onRespond: () => void }> = ({ req, onRespond }) => {
  const [loading, setLoading] = React.useState(false);

  const handle = async (accept: boolean) => {
    setLoading(true);
    await respondToRequest(req.id, accept, req.recipientUserId);
    onRespond();
    setLoading(false);
  };

  return (
    <div className="card friend-request-card">
      <p className="fr-plate">From vehicle: {req.requesterVehicleId}</p>
      {req.message && <p className="fr-intro">"{req.message}"</p>}
      <div className="fr-actions">
        <button className="btn-primary" onClick={() => handle(true)} disabled={loading}>Accept</button>
        <button className="btn-secondary" onClick={() => handle(false)} disabled={loading}>Decline</button>
      </div>
    </div>
  );
};

const FriendCard: React.FC<{ friend: Friend }> = ({ friend }) => {
  const navigate = useNavigate();
  const displayName = friend.vehicleDisplay || friend.vehicleId;

  const handleMessage = () => {
    const params = new URLSearchParams({
      recipientId: friend.userId,
      vehicleId: friend.vehicleId,
      plate: displayName,
      isFriend: 'true',
    });
    navigate(`/compose?${params.toString()}`);
  };

  return (
    <div className="card friend-card">
      <div className="friend-card-info">
        <p className="friend-vehicle">{displayName}</p>
        {friend.nickname && <p className="friend-nickname">{friend.nickname}</p>}
      </div>
      <div className="friend-actions">
        <button className="btn-primary" onClick={handleMessage}>Message</button>
      </div>
    </div>
  );
};

const FriendRequestsPage: React.FC = () => {
  const { user } = useAuth();
  const { requests, friends, loading, } = useFriends(user?.uid ?? null);
  const [, forceUpdate] = React.useReducer((x: number) => x + 1, 0);

  if (loading) return <div className="loading-screen">Loading…</div>;

  return (
    <div className="page">
      <h1 className="page-title">Friends</h1>
      <h2 className="section-title">Pending Requests ({requests.length})</h2>
      {requests.length === 0 && <p className="empty-state-text">No pending requests.</p>}
      {requests.map((r) => (
        <RequestCard key={r.id} req={r} onRespond={forceUpdate} />
      ))}

      <h2 className="section-title" style={{ marginTop: 24 }}>My Friends ({friends.length})</h2>
      {friends.length === 0 && <p className="empty-state-text">No friends yet. Search a plate and tap "Add as Friend".</p>}
      {friends.map((f) => (
        <FriendCard key={f.userId} friend={f} />
      ))}
    </div>
  );
};

export default FriendRequestsPage;
