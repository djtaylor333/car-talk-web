import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useMessages } from '../hooks/useMessages';
import { Message } from '../types';

const MessageRow: React.FC<{ msg: Message }> = ({ msg }) => (
  <Link
    to={`/thread/${msg.threadId}`}
    className={`card message-row ${msg.isRead ? '' : 'unread'}`}
  >
    <div className="message-row-header">
      <span className="message-plate">{msg.senderVehicleId}</span>
      <span className="message-time">
        {msg.timestamp?.toDate
          ? new Date(msg.timestamp.toDate()).toLocaleDateString()
          : ''}
      </span>
    </div>
    <p className="message-preview">{msg.content.slice(0, 80)}{msg.content.length > 80 ? '…' : ''}</p>
    {!msg.isRead && <span className="unread-dot" aria-label="Unread" />}
  </Link>
);

const InboxPage: React.FC = () => {
  const { user } = useAuth();
  const { messages, loading } = useMessages(user?.uid ?? null);

  if (loading) return <div className="loading-screen">Loading inbox…</div>;

  return (
    <div className="page">
      <h1 className="page-title">Inbox</h1>
      {messages.length === 0 ? (
        <div className="card empty-state">
          <p>No messages yet.</p>
          <p className="empty-hint">Search a licence plate to start a conversation.</p>
        </div>
      ) : (
        <div className="message-list">
          {messages.map((m) => <MessageRow key={m.id} msg={m} />)}
        </div>
      )}
    </div>
  );
};

export default InboxPage;
