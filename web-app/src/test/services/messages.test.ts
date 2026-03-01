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
  limit: vi.fn(),
}));

vi.mock('../../services/firebaseConfig', () => ({ db: {} }));

import { sendMessage } from '../../services/messages';
import * as firestoreModule from 'firebase/firestore';

describe('sendMessage', () => {
  beforeEach(() => vi.clearAllMocks());

  it('throws when anonymous message exceeds 200 chars', async () => {
    const longMsg = 'a'.repeat(201);
    await expect(
      sendMessage('uid', 'vA', 'uid2', 'vB', { content: longMsg, isFriendMessage: false })
    ).rejects.toThrow('200');
  });

  it('throws when friend message exceeds 500 chars', async () => {
    const longMsg = 'a'.repeat(501);
    await expect(
      sendMessage('uid', 'vA', 'uid2', 'vB', { content: longMsg, isFriendMessage: true })
    ).rejects.toThrow('500');
  });

  it('throws for profanity', async () => {
    await expect(
      sendMessage('uid', 'vA', 'uid2', 'vB', { content: 'you are an ass', isFriendMessage: false })
    ).rejects.toThrow('inappropriate');
  });

  it('throws when daily limit reached', async () => {
    vi.mocked(firestoreModule.getDoc).mockResolvedValueOnce({
      exists: () => true,
      data: () => ({ count: 5 }),
    } as ReturnType<typeof firestoreModule.getDoc> extends Promise<infer R> ? R : never);

    await expect(
      sendMessage('uid', 'vA', 'uid2', 'vB', { content: 'Hello!', isFriendMessage: false })
    ).rejects.toThrow('Daily');
  });

  it('succeeds with valid anonymous message under limit', async () => {
    vi.mocked(firestoreModule.getDoc).mockResolvedValueOnce({
      exists: () => false,
      data: () => null,
    } as ReturnType<typeof firestoreModule.getDoc> extends Promise<infer R> ? R : never);
    vi.mocked(firestoreModule.addDoc).mockResolvedValueOnce({ id: 'msg1' } as unknown as ReturnType<typeof firestoreModule.addDoc> extends Promise<infer R> ? R : never);
    vi.mocked(firestoreModule.setDoc).mockResolvedValueOnce(undefined);

    await expect(
      sendMessage('uid', 'vA', 'uid2', 'vB', { content: 'Hello there', isFriendMessage: false })
    ).resolves.toBeUndefined();
  });
});
