import {
  doc,
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  query,
  where,
  getDoc,
  setDoc,
  serverTimestamp,
  getDocs,
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { FriendRequest, Friend, FriendRequestStatus, FRIEND_REQUEST_MAX_CHARS } from '../types';

export const sendFriendRequest = async (
  requesterId: string,
  requesterVehicleId: string,
  recipientUserId: string,
  recipientVehicleId: string,
  message: string
): Promise<void> => {
  if (message.length > FRIEND_REQUEST_MAX_CHARS) {
    throw new Error(`Intro exceeds ${FRIEND_REQUEST_MAX_CHARS} characters`);
  }
  await addDoc(collection(db, 'friendRequests'), {
    requesterId,
    requesterVehicleId,
    recipientUserId,
    recipientVehicleId,
    message,
    status: FriendRequestStatus.Pending,
    createdAt: serverTimestamp(),
  });
};

export const respondToRequest = async (
  requestId: string,
  accept: boolean,
  _currentUserId: string
): Promise<void> => {
  const reqRef = doc(db, 'friendRequests', requestId);
  const reqSnap = await getDoc(reqRef);
  if (!reqSnap.exists()) throw new Error('Friend request not found');
  const req = reqSnap.data() as FriendRequest;
  const status = accept ? FriendRequestStatus.Accepted : FriendRequestStatus.Declined;
  await updateDoc(reqRef, { status });
  if (accept) {
    const friendA: Friend = {
      userId: req.requesterId,
      vehicleId: req.requesterVehicleId,
      nickname: null,
      since: new Date().toISOString(),
    };
    const friendB: Friend = {
      userId: req.recipientUserId,
      vehicleId: req.recipientVehicleId,
      nickname: null,
      since: new Date().toISOString(),
    };
    await setDoc(
      doc(db, 'users', req.recipientUserId, 'friends', req.requesterId),
      friendA
    );
    await setDoc(
      doc(db, 'users', req.requesterId, 'friends', req.recipientUserId),
      friendB
    );
  }
};

export const subscribeToFriendRequests = (
  userId: string,
  onRequests: (reqs: FriendRequest[]) => void
): (() => void) => {
  const q = query(
    collection(db, 'friendRequests'),
    where('recipientUserId', '==', userId),
    where('status', '==', FriendRequestStatus.Pending)
  );
  return onSnapshot(q, (snap) => {
    const reqs: FriendRequest[] = snap.docs.map((d) => ({ id: d.id, ...d.data() } as FriendRequest));
    onRequests(reqs);
  });
};

export const getFriends = async (userId: string): Promise<Friend[]> => {
  const snap = await getDocs(collection(db, 'users', userId, 'friends'));
  return snap.docs.map((d) => d.data() as Friend);
};

export const areFriends = async (userId: string, otherUserId: string): Promise<boolean> => {
  const snap = await getDoc(doc(db, 'users', userId, 'friends', otherUserId));
  return snap.exists();
};

export const updateNickname = async (
  userId: string,
  friendUserId: string,
  nickname: string
): Promise<void> => {
  await updateDoc(doc(db, 'users', userId, 'friends', friendUserId), { nickname });
};
