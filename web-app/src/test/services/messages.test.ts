import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock Firestore
vi.mock('firebase/firestore', () => ({
  getDoc: vi.fn(),
  doc: vi.fn(() => ({})),
  addDoc: vi.fn(),
  collection: vi.fn(() => ({})),
  serverTimestamp: vi.fn(() => null),
  Timestamp: { fromDate: (d: Date) => ({ toDate: () => d }) },
  updateDoc: vi.fn(),
  setDoc: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  orderBy: vi.fn(),
  onSnapshot: vi.fn(),
}));

vi.mock('../../services/firebaseConfig', () => ({ db: {} }));

import { sendMessage } from '../../services/messages';
import * as firestoreModule from 'firebase/firestore';

// Helper to call sendMessage with the updated 6-arg signature
const send = (content: string, isFriendMessage: boolean, isAnonymous = true) =>
  sendMessage('uid', 'vA', 'Toyota Camry (Blue)', 'uid2', 'vB', { content, isFriendMessage, isAnonymous });

describe('sendMessage', () => {
  beforeEach(() => vi.clearAllMocks());

  it('throws when anonymous message exceeds 200 chars', async () => {
    await expect(send('a'.repeat(201), false)).rejects.toThrow('200');
  });

  it('throws when friend message exceeds 500 chars', async () => {
    await expect(send('a'.repeat(501), true)).rejects.toThrow('500');
  });

  it('throws for profanity', async () => {
    await expect(send('you are an ass', false)).rejects.toThrow('inappropriate');
  });

  it('throws when daily limit reached', async () => {
    vi.mocked(firestoreModule.getDoc).mockResolvedValueOnce({
      exists: () => true,
      data: () => ({ count: 5 }),
    } as ReturnType<typeof firestoreModule.getDoc> extends Promise<infer R> ? R : never);

    await expect(send('Hello!', false)).rejects.toThrow('Daily');
  });

  it('succeeds with valid anonymous message under limit', async () => {
    const notExistsSnap = {
      exists: () => false,
      data: () => null,
    } as ReturnType<typeof firestoreModule.getDoc> extends Promise<infer R> ? R : never;

    vi.mocked(firestoreModule.getDoc)
      .mockResolvedValueOnce(notExistsSnap)  // checkDailyLimit
      .mockResolvedValueOnce(notExistsSnap); // incrementDailyCount

    vi.mocked(firestoreModule.addDoc).mockResolvedValueOnce(
      { id: 'msg1' } as unknown as ReturnType<typeof firestoreModule.addDoc> extends Promise<infer R> ? R : never
    );
    vi.mocked(firestoreModule.setDoc).mockResolvedValueOnce(undefined);

    await expect(send('Hello there', false)).resolves.toBeUndefined();
  });
});
