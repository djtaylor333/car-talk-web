import { useState, useEffect } from 'react';
import { Friend, FriendRequest } from '../types';
import { subscribeToFriendRequests, getFriends } from '../services/friends';

export const useFriends = (userId: string | null) => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [requests, setRequests] = useState<FriendRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) { setLoading(false); return; }
    let active = true;
    getFriends(userId).then((f) => { if (active) setFriends(f); });
    const unsub = subscribeToFriendRequests(userId, (reqs) => {
      if (active) { setRequests(reqs); setLoading(false); }
    });
    setLoading(false);
    return () => { active = false; unsub(); };
  }, [userId]);

  return { friends, requests, loading };
};
