import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  getDocs,
  Timestamp,
  limit,
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Message, MessageFormData, ANON_MAX_CHARS, FRIEND_MAX_CHARS, MAX_DAILY_ANON, RETENTION_DAYS } from '../types';
import { generateThreadId } from '../utils/threadId';
import { containsProfanity } from '../utils/profanityFilter';

export const sendMessage = async (
  senderId: string,
  senderVehicleId: string,
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
    recipientUserId,
    recipientVehicleId,
    threadId,
    content: data.content,
    isFriendMessage,
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
    const { setDoc } = await import('firebase/firestore');
    await setDoc(countRef, { userId, vehicleId, date: today, count: 1 });
  }
};

export const subscribeToInbox = (
  userId: string,
  onMessages: (msgs: Message[]) => void
): (() => void) => {
  const q = query(
    collection(db, 'messages'),
    where('recipientUserId', '==', userId),
    orderBy('timestamp', 'desc')
  );
  return onSnapshot(q, (snap) => {
    const msgs: Message[] = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Message));
    onMessages(msgs);
  });
};

export const subscribeToThread = (
  threadId: string,
  onMessages: (msgs: Message[]) => void
): (() => void) => {
  const q = query(
    collection(db, 'messages'),
    where('threadId', '==', threadId),
    orderBy('timestamp', 'asc')
  );
  return onSnapshot(q, (snap) => {
    const msgs: Message[] = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Message));
    onMessages(msgs);
  });
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
