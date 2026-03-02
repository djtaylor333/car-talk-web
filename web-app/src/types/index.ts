import { Timestamp } from 'firebase/firestore';

export interface Vehicle {
  id: string;
  licensePlate: string;
  make: string;
  model: string;
  color: string;
  addedAt?: Timestamp;
}

export interface UserProfile {
  uid: string;
  email?: string;
  displayName?: string;
  phone?: string;
  vehicles: Vehicle[];
  createdAt?: Timestamp;
}

export interface MessageFormData {
  content: string;
  isFriendMessage: boolean;
}

export enum FriendRequestStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Declined = 'declined',
}

export const FRIEND_REQUEST_MAX_CHARS = 100;

export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  senderVehicleId: string;
  senderVehicleDisplay: string;
  isAnonymous: boolean;
  recipientVehicleId: string;
  recipientUserId: string;
  content: string;
  timestamp: Timestamp;
  expiresAt: Timestamp;
  isRead: boolean;
  isFriendMessage: boolean;
}

export interface FriendRequest {
  id: string;
  requesterId: string;
  requesterVehicleId: string;
  requesterVehicleDisplay: string;
  recipientVehicleId: string;
  recipientUserId: string;
  message: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: Timestamp;
}

export interface Friend {
  userId: string;
  vehicleId: string;
  vehicleDisplay?: string;
  nickname: string | null;
  since?: string;
  addedAt?: Timestamp;
}

export interface VehicleSearchResult {
  userId: string;
  vehicleId: string;
  licensePlate: string;
  make: string;
  model: string;
  color: string;
}

export const VEHICLE_COLORS = [
  { name: 'White', hex: '#F5F5F5' },
  { name: 'Black', hex: '#1A1A1A' },
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'Grey', hex: '#808080' },
  { name: 'Red', hex: '#D32F2F' },
  { name: 'Blue', hex: '#1565C0' },
  { name: 'Green', hex: '#2E7D32' },
  { name: 'Yellow', hex: '#F9A825' },
  { name: 'Orange', hex: '#E65100' },
  { name: 'Brown', hex: '#4E342E' },
  { name: 'Beige', hex: '#F5F5DC' },
  { name: 'Gold', hex: '#FFC107' },
] as const;

export const ANON_MAX_CHARS = 200;
export const FRIEND_MAX_CHARS = 500;
export const MAX_DAILY_ANON = 5;
export const MAX_VEHICLES = 3;
export const MAX_FRIEND_REQUEST_MSG = 100;
export const RETENTION_DAYS = 30;
