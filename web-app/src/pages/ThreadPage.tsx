import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { subscribeToThread, markAsRead } from '../services/messages';
import { Message } from '../types';

const ThreadPage: React.FC = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!threadId) return;
    const unsub = subscribeToThread(threadId, (msgs) => {
      setMessages(msgs);
      msgs.filter((m) => !m.isRead && m.recipientUserId === user?.uid)
          .forEach((m) => markAsRead(m.id));
    });
    return unsub;
  }, [threadId, user?.uid]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="thread-page">
      <div className="thread-messages">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`bubble ${m.senderId === user?.uid ? 'bubble-mine' : 'bubble-theirs'}`}
          >
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
    </div>
  );
};

export default ThreadPage;
