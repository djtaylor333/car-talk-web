import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
  serverTimestamp,
  getDoc,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Message, MessageFormData, ANON_MAX_CHARS, FRIEND_MAX_CHARS, MAX_DAILY_ANON, RETENTION_DAYS } from '../types';
import { generateThreadId } from '../utils/threadId';
import { containsProfanity } from '../utils/profanityFilter';

export const sendMessage = async (
  senderId: string,
  senderVehicleId: string,
  senderVehicleDisplay: string,
  recipientUserId: string,
  recipientVehicleId: string,
  data: MessageFormData
): Promise<void> => {
  const isFriendMessage = data.isFriendMessage ?? false;
  const maxChars = isFriendMessage ? FRIEND_MAX_CHARS : ANON_MAX_CHARS;

  if (data.content.length > maxChars) {
    throw new Error(`Message exceeds ${maxChars} characters`);
  }
  if (containsProfanity(data.content)) {
    throw new Error('Message contains inappropriate language');
  }

  if (!isFriendMessage) {
    await checkDailyLimit(senderId, senderVehicleId);
  }

  const threadId = generateThreadId(senderVehicleId, recipientVehicleId);
  const expiresAt = Timestamp.fromDate(
    new Date(Date.now() + RETENTION_DAYS * 24 * 60 * 60 * 1000)
  );

  await addDoc(collection(db, 'messages'), {
    senderId,
    senderVehicleId,
    senderVehicleDisplay,
    recipientUserId,
    recipientVehicleId,
    threadId,
    content: data.content,
    isFriendMessage,
    isAnonymous: data.isAnonymous,
    isRead: false,
    timestamp: serverTimestamp(),
    expiresAt,
  });

  if (!isFriendMessage) {
    await incrementDailyCount(senderId, senderVehicleId);
  }
};

const checkDailyLimit = async (userId: string, vehicleId: string): Promise<void> => {
  const today = new Date().toISOString().split('T')[0];
  const countRef = doc(db, 'messageCounts', `${userId}_${vehicleId}_${today}`);
  const snap = await getDoc(countRef);
  if (snap.exists() && (snap.data().count ?? 0) >= MAX_DAILY_ANON) {
    throw new Error(`Daily anonymous message limit of ${MAX_DAILY_ANON} reached`);
  }
};

const incrementDailyCount = async (userId: string, vehicleId: string): Promise<void> => {
  const today = new Date().toISOString().split('T')[0];
  const countRef = doc(db, 'messageCounts', `${userId}_${vehicleId}_${today}`);
  const snap = await getDoc(countRef);
  if (snap.exists()) {
    await updateDoc(countRef, { count: (snap.data().count ?? 0) + 1 });
  } else {
    await setDoc(countRef, { userId, vehicleId, date: today, count: 1 });
  }
};

export const subscribeToInbox = (
  userId: string,
  onMessages: (msgs: Message[]) => void
): (() => void) => {
  // Single-field equality query avoids requiring a composite Firestore index.
  // Firestore can prove the read rule (recipientUserId == auth.uid) from the
  // query constraint.  We sort the results client-side.
  const q = query(
    collection(db, 'messages'),
    where('recipientUserId', '==', userId)
  );
  return onSnapshot(q, (snap) => {
    const now = new Date();
    const msgs: Message[] = snap.docs
      .map((d) => ({ id: d.id, ...d.data() } as Message))
      .filter((m) => !m.expiresAt || m.expiresAt.toDate() > now)
      .sort((a, b) => {
        const aMs = a.timestamp?.toDate?.()?.getTime() ?? 0;
        const bMs = b.timestamp?.toDate?.()?.getTime() ?? 0;
        return bMs - aMs; // newest first
      });
    onMessages(msgs);
  });
};

/**
 * Subscribe to all messages in a thread visible to `userId`.
 *
 * Uses two separate single-field queries (sent + received) instead of a
 * threadId filter, so Firestore can prove the read-rule for each query
 * without requiring a composite index.
 */
export const subscribeToThread = (
  threadId: string,
  userId: string,
  onMessages: (msgs: Message[]) => void
): (() => void) => {
  let receivedMsgs: Message[] = [];
  let sentMsgs: Message[] = [];

  const emit = () => {
    const all = [...receivedMsgs, ...sentMsgs].sort((a, b) => {
      const aMs = a.timestamp?.toDate?.()?.getTime() ?? 0;
      const bMs = b.timestamp?.toDate?.()?.getTime() ?? 0;
      return aMs - bMs; // oldest first
    });
    onMessages(all);
  };

  const unsubReceived = onSnapshot(
    query(collection(db, 'messages'), where('recipientUserId', '==', userId)),
    (snap) => {
      receivedMsgs = snap.docs
        .map((d) => ({ id: d.id, ...d.data() } as Message))
        .filter((m) => m.threadId === threadId);
      emit();
    }
  );

  const unsubSent = onSnapshot(
    query(collection(db, 'messages'), where('senderId', '==', userId)),
    (snap) => {
      sentMsgs = snap.docs
        .map((d) => ({ id: d.id, ...d.data() } as Message))
        .filter((m) => m.threadId === threadId);
      emit();
    }
  );

  return () => {
    unsubReceived();
    unsubSent();
  };
};

export const markAsRead = async (messageId: string): Promise<void> => {
  await updateDoc(doc(db, 'messages', messageId), { isRead: true });
};

export const getDailyCount = async (userId: string, vehicleId: string): Promise<number> => {
  const today = new Date().toISOString().split('T')[0];
  const countRef = doc(db, 'messageCounts', `${userId}_${vehicleId}_${today}`);
  const snap = await getDoc(countRef);
  return snap.exists() ? (snap.data().count ?? 0) : 0;
};
