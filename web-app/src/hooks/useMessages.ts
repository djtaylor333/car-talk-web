import { useState, useEffect } from 'react';
import { Message } from '../types';
import { subscribeToInbox, markAsRead as markRead } from '../services/messages';

export const useMessages = (userId: string | null) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) { setLoading(false); return; }
    setLoading(true);
    const unsub = subscribeToInbox(userId, (msgs) => {
      setMessages(msgs);
      setLoading(false);
    });
    return unsub;
  }, [userId]);

  const markAsRead = async (messageId: string) => {
    await markRead(messageId);
  };

  return { messages, loading, markAsRead };
};
