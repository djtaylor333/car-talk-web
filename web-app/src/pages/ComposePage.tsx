import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getProfile } from '../services/vehicles';
import { sendMessage } from '../services/messages';
import { sendFriendRequest } from '../services/friends';
import { Vehicle, ANON_MAX_CHARS, FRIEND_MAX_CHARS, FRIEND_REQUEST_MAX_CHARS, MessageFormData } from '../types';

const ComposePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const recipientId = params.get('recipientId') ?? '';
  const recipientVehicleId = params.get('vehicleId') ?? '';
  const plate = params.get('plate') ?? '';
  const isFriendParam = params.get('isFriend') === 'true';
  const isFriendRequest = params.get('friendRequest') === 'true';

  const [content, setContent] = useState('');
  const [senderVehicle, setSenderVehicle] = useState<Vehicle | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const maxChars = isFriendRequest
    ? FRIEND_REQUEST_MAX_CHARS
    : isFriendParam
    ? FRIEND_MAX_CHARS
    : ANON_MAX_CHARS;

  useEffect(() => {
    if (!user) return;
    getProfile(user.uid).then((p) => {
      if (p?.vehicles?.length) setSenderVehicle(p.vehicles[0]);
    });
  }, [user]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !senderVehicle) return;
    setError('');
    setLoading(true);
    try {
      if (isFriendRequest) {
        await sendFriendRequest(user.uid, senderVehicle.id, recipientId, recipientVehicleId, content);
      } else {
        const formData: MessageFormData = { content, isFriendMessage: isFriendParam };
        await sendMessage(user.uid, senderVehicle.id, recipientId, recipientVehicleId, formData);
      }
      navigate('/inbox');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1 className="page-title">
        {isFriendRequest ? 'Friend Request' : `Message to ${plate}`}
      </h1>
      <form onSubmit={handleSend}>
        <div className="form-group">
          <label htmlFor="content">
            {isFriendRequest ? 'Intro message' : 'Message'} ({content.length}/{maxChars})
          </label>
          <textarea
            id="content"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value.slice(0, maxChars))}
            placeholder={isFriendRequest ? 'Hi, we share the highway… (100 chars)' : 'Say something… (anonymous)'}
          />
        </div>
        {error && <p className="error-text" role="alert">{error}</p>}
        <button className="btn-primary" type="submit" disabled={loading || !content.trim() || !senderVehicle}>
          {loading ? 'Sending…' : isFriendRequest ? 'Send Friend Request' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ComposePage;
