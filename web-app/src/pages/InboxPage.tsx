import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useMessages } from '../hooks/useMessages';
import { Message } from '../types';

type FilterTab = 'all' | 'anonymous' | 'friends';

const MessageRow: React.FC<{ msg: Message }> = ({ msg }) => (
  <Link
    to={`/thread/${msg.threadId}`}
    className={`card message-row ${msg.isRead ? '' : 'unread'}`}
    data-testid="message-row"
  >
    <div className="message-row-header">
      <span className="message-plate">
        {msg.isAnonymous ? 'Anonymous' : (msg.senderVehicleDisplay || msg.senderVehicleId)}
      </span>
      <div className="message-row-meta">
        {msg.isFriendMessage && <span className="badge-friend">Friend</span>}
        {msg.isAnonymous && <span className="badge-anon">Anon</span>}
        <span className="message-time">
          {msg.timestamp?.toDate
            ? new Date(msg.timestamp.toDate()).toLocaleDateString()
            : ''}
        </span>
      </div>
    </div>
    <p className="message-preview">
      {msg.content.slice(0, 80)}{msg.content.length > 80 ? '\u2026' : ''}
    </p>
    {!msg.isRead && <span className="unread-dot" aria-label="Unread" />}
  </Link>
);

const InboxPage: React.FC = () => {
  const { user } = useAuth();
  const { messages, loading } = useMessages(user?.uid ?? null);
  const [tab, setTab] = useState<FilterTab>('all');

  const filtered = messages.filter((m) => {
    if (tab === 'anonymous') return m.isAnonymous;
    if (tab === 'friends') return m.isFriendMessage;
    return true;
  });

  const unreadCount = messages.filter((m) => !m.isRead).length;

  if (loading) return <div className="loading-screen">Loading inbox...</div>;

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">
          Inbox {unreadCount > 0 && <span className="badge-count">{unreadCount}</span>}
        </h1>
      </div>

      <div className="filter-tabs" role="tablist" aria-label="Inbox filter">
        {(['all', 'anonymous', 'friends'] as FilterTab[]).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={`filter-tab ${tab === t ? 'active' : ''}`}
            onClick={() => setTab(t)}
            data-testid={`tab-${t}`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card empty-state">
          <p>No {tab === 'all' ? '' : tab + ' '}messages yet.</p>
          {tab === 'all' && (
            <p className="empty-hint">Search a licence plate to start a conversation.</p>
          )}
        </div>
      ) : (
        <div className="message-list">
          {filtered.map((m) => <MessageRow key={m.id} msg={m} />)}
        </div>
      )}
    </div>
  );
};

export default InboxPage;
