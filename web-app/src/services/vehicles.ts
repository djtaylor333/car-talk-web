import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { UserProfile, Vehicle, MAX_VEHICLES } from '../types';

export const getProfile = async (userId: string): Promise<UserProfile | null> => {
  const snap = await getDoc(doc(db, 'users', userId));
  return snap.exists() ? ({ uid: snap.id, ...snap.data() } as UserProfile) : null;
};

export const createOrUpdateProfile = async (
  userId: string,
  data: Partial<UserProfile>
): Promise<void> => {
  const ref = doc(db, 'users', userId);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { ...data });
  } else {
    await setDoc(ref, { ...data, vehicles: [] });
  }
};

export const addVehicle = async (userId: string, vehicle: Vehicle): Promise<void> => {
  const ref = doc(db, 'users', userId);
  const snap = await getDoc(ref);
  const existing: Vehicle[] = snap.exists() ? (snap.data().vehicles ?? []) : [];
  if (existing.length >= MAX_VEHICLES) {
    throw new Error(`Maximum of ${MAX_VEHICLES} vehicles allowed`);
  }
  const plate = vehicle.licensePlate.toUpperCase().replace(/\s/g, '');
  const vehicleWithNormalized = { ...vehicle, licensePlate: plate };
  if (snap.exists()) {
    await updateDoc(ref, { vehicles: arrayUnion(vehicleWithNormalized) });
  } else {
    await setDoc(ref, { uid: userId, vehicles: [vehicleWithNormalized] });
  }
  await setDoc(doc(db, 'vehicleLookup', plate), {
    userId,
    vehicleId: vehicle.id,
    make: vehicle.make,
    model: vehicle.model,
    color: vehicle.color,
    licensePlate: plate,
  });
};

export const removeVehicle = async (userId: string, vehicle: Vehicle): Promise<void> => {
  const ref = doc(db, 'users', userId);
  await updateDoc(ref, { vehicles: arrayRemove(vehicle) });
  const plate = vehicle.licensePlate.toUpperCase().replace(/\s/g, '');
  const { deleteDoc } = await import('firebase/firestore');
  await deleteDoc(doc(db, 'vehicleLookup', plate));
};

export const searchByLicensePlate = async (plate: string): Promise<UserProfile | null> => {
  const normalized = plate.toUpperCase().replace(/\s/g, '');
  const snap = await getDoc(doc(db, 'vehicleLookup', normalized));
  if (!snap.exists()) return null;
  const data = snap.data();
  // Build a minimal UserProfile from the vehicleLookup doc — avoids a
  // cross-user read of /users/{userId} which security rules restrict to
  // the document owner.
  return {
    uid: data.userId as string,
    vehicles: [{
      id: data.vehicleId as string,
      licensePlate: data.licensePlate as string,
      make: data.make as string,
      model: data.model as string,
      color: data.color as string,
    }],
  };
};
