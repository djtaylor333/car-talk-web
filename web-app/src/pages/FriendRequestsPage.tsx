import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useFriends } from '../hooks/useFriends';
import { respondToRequest } from '../services/friends';
import { FriendRequest } from '../types';

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
      {friends.length === 0 && <p className="empty-state-text">No friends yet.</p>}
      {friends.map((f) => (
        <div key={f.userId} className="card friend-card">
          <p className="friend-vehicle">{f.vehicleId}</p>
          {f.nickname && <p className="friend-nickname">{f.nickname}</p>}
        </div>
      ))}
    </div>
  );
};

export default FriendRequestsPage;
