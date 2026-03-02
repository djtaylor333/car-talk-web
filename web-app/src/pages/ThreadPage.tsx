import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { subscribeToThread, markAsRead } from '../services/messages';
import { Message } from '../types';

const ThreadPage: React.FC = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Derived from first message in thread that isn't mine
  const otherParty = messages.find((m) => m.senderId !== user?.uid);
  const recipientId = otherParty?.senderId ?? '';
  const recipientVehicleId = otherParty?.senderVehicleId ?? '';
  const plate = otherParty?.senderVehicleDisplay ?? otherParty?.senderVehicleId ?? '';
  const isFriend = messages.some((m) => m.isFriendMessage);

  useEffect(() => {
    if (!threadId || !user?.uid) return;
    const unsub = subscribeToThread(threadId, user.uid, (msgs) => {
      setMessages(msgs);
      msgs
        .filter((m) => !m.isRead && m.recipientUserId === user?.uid)
        .forEach((m) => markAsRead(m.id));
    });
    return unsub;
  }, [threadId, user?.uid]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleReply = () => {
    const params = new URLSearchParams({
      recipientId,
      vehicleId: recipientVehicleId,
      plate,
      ...(isFriend ? { isFriend: 'true' } : {}),
    });
    navigate(`/compose?${params.toString()}`);
  };

  return (
    <div className="thread-page">
      <div className="thread-header">
        <button className="btn-back" onClick={() => navigate('/inbox')} aria-label="Back to inbox">
          &larr;
        </button>
        <span className="thread-title">{plate || 'Thread'}</span>
      </div>

      <div className="thread-messages">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`bubble ${m.senderId === user?.uid ? 'bubble-mine' : 'bubble-theirs'}`}
            data-testid={m.senderId === user?.uid ? 'bubble-mine' : 'bubble-theirs'}
          >
            {!m.isAnonymous && m.senderId !== user?.uid && (
              <span className="bubble-vehicle">{m.senderVehicleDisplay}</span>
            )}
            <p className="bubble-content">{m.content}</p>
            <span className="bubble-time">
              {m.timestamp?.toDate
                ? new Date(m.timestamp.toDate()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                : ''}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {otherParty && (
        <div className="thread-footer">
          <button
            className="btn-primary"
            onClick={handleReply}
            data-testid="reply-btn"
          >
            Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default ThreadPage;
