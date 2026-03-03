/**
 * Seed script — creates 10 realistic test accounts in Firebase Auth + Firestore.
 * Includes vehicles, friend relationships, friend requests and sample messages.
 *
 * Usage (from repo root):
 *   node scripts/seed_test_data.js
 *
 * Prerequisites:
 *   npm install firebase-admin   (in repo root or scripts/)
 *
 * Against the real project:
 *   Set GOOGLE_APPLICATION_CREDENTIALS to your service-account JSON path, OR
 *   run `firebase login` and rely on Application Default Credentials.
 *
 * Against the local emulator:
 *   firebase emulators:start --only auth,firestore
 *   FIRESTORE_EMULATOR_HOST=127.0.0.1:8080 \
 *   FIREBASE_AUTH_EMULATOR_HOST=127.0.0.1:9099 \
 *   node scripts/seed_test_data.js
 */

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');

// ── Firebase init ─────────────────────────────────────────────────────────────
const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
let app;
if (credPath) {
  app = initializeApp({ credential: cert(require(credPath)) });
} else {
  // Emulator / Application Default Credentials
  if (!process.env.FIRESTORE_EMULATOR_HOST) {
    process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';
  }
  if (!process.env.FIREBASE_AUTH_EMULATOR_HOST) {
    process.env.FIREBASE_AUTH_EMULATOR_HOST = '127.0.0.1:9099';
  }
  app = initializeApp({ projectId: process.env.GCLOUD_PROJECT || 'cartalk-app' });
}

const db   = getFirestore(app);
const auth = getAuth(app);

// ── Test user definitions ─────────────────────────────────────────────────────
const PASSWORD = 'CarTalk123!';

const USERS = [
  {
    uid: 'seed_alice_001',
    email: 'alice@cartalk.test',
    displayName: 'Alice Johnson',
    region: 'Auckland, NZ',
    vehicles: [
      { id: 'veh_alice_01', licensePlate: 'NZL100', make: 'MG',     model: 'HS PHEV',      color: 'White'  },
      { id: 'veh_alice_02', licensePlate: 'NZL101', make: 'Toyota', model: 'HiLux',         color: 'Silver' },
    ],
  },
  {
    uid: 'seed_bob_002',
    email: 'bob@cartalk.test',
    displayName: 'Bob Williams',
    region: 'Sydney, AU',
    vehicles: [
      { id: 'veh_bob_01', licensePlate: 'NSW200', make: 'Ford',   model: 'Ranger',    color: 'Black' },
    ],
  },
  {
    uid: 'seed_carol_003',
    email: 'carol@cartalk.test',
    displayName: 'Carol Davis',
    region: 'London, UK',
    vehicles: [
      { id: 'veh_carol_01', licensePlate: 'UK30AB', make: 'Vauxhall', model: 'Corsa',      color: 'Red'   },
      { id: 'veh_carol_02', licensePlate: 'UK31AB', make: 'MINI',     model: 'Countryman', color: 'White' },
    ],
  },
  {
    uid: 'seed_dave_004',
    email: 'dave@cartalk.test',
    displayName: 'Dave Smith',
    region: 'Manchester, UK',
    vehicles: [
      { id: 'veh_dave_01', licensePlate: 'UK40CD', make: 'BMW',        model: '3 Series',  color: 'Blue'  },
    ],
  },
  {
    uid: 'seed_emma_005',
    email: 'emma@cartalk.test',
    displayName: 'Emma Brown',
    region: 'Seattle, US',
    vehicles: [
      { id: 'veh_emma_01', licensePlate: 'US500WA', make: 'Tesla', model: 'Model Y', color: 'White' },
    ],
  },
  {
    uid: 'seed_frank_006',
    email: 'frank@cartalk.test',
    displayName: 'Frank Miller',
    region: 'Melbourne, AU',
    vehicles: [
      { id: 'veh_frank_01', licensePlate: 'VIC600', make: 'Toyota', model: 'Land Cruiser 300', color: 'Silver' },
      { id: 'veh_frank_02', licensePlate: 'VIC601', make: 'Haval',  model: 'Jolion',           color: 'Grey'   },
    ],
  },
  {
    uid: 'seed_grace_007',
    email: 'grace@cartalk.test',
    displayName: 'Grace Wilson',
    region: 'Toronto, CA',
    vehicles: [
      { id: 'veh_grace_01', licensePlate: 'ON700G', make: 'Honda', model: 'CR-V', color: 'Grey' },
    ],
  },
  {
    uid: 'seed_henry_008',
    email: 'henry@cartalk.test',
    displayName: 'Henry Moore',
    region: 'Edinburgh, UK',
    vehicles: [
      { id: 'veh_henry_01', licensePlate: 'UK80HM', make: 'Land Rover', model: 'Defender', color: 'Green' },
    ],
  },
  {
    uid: 'seed_isabel_009',
    email: 'isabel@cartalk.test',
    displayName: 'Isabel Martinez',
    region: 'Christchurch, NZ',
    vehicles: [
      { id: 'veh_isabel_01', licensePlate: 'NZL900', make: 'Hyundai',   model: 'Tucson Plug-in Hybrid', color: 'Silver' },
      { id: 'veh_isabel_02', licensePlate: 'NZL901', make: 'Kia',       model: 'EV6',                   color: 'Blue'   },
    ],
  },
  {
    uid: 'seed_james_010',
    email: 'james@cartalk.test',
    displayName: 'James Taylor',
    region: 'Brisbane, AU',
    vehicles: [
      { id: 'veh_james_01', licensePlate: 'QLD010', make: 'Mazda',  model: 'CX-5',   color: 'Red'    },
      { id: 'veh_james_02', licensePlate: 'QLD011', make: 'Isuzu',  model: 'D-Max',  color: 'White'  },
    ],
  },
];

// ── Friend pairs (accepted — both sides written) ──────────────────────────────
const FRIEND_PAIRS = [
  ['seed_alice_001', 'veh_alice_01', 'seed_bob_002',  'veh_bob_01'],
  ['seed_alice_001', 'veh_alice_01', 'seed_carol_003','veh_carol_01'],
  ['seed_dave_004',  'veh_dave_01',  'seed_emma_005', 'veh_emma_01'],
  ['seed_frank_006', 'veh_frank_01', 'seed_james_010','veh_james_01'],
  ['seed_grace_007', 'veh_grace_01', 'seed_isabel_009','veh_isabel_01'],
];

// ── Pending friend requests ───────────────────────────────────────────────────
const FRIEND_REQUESTS = [
  {
    id: 'freq_bob_henry',
    requesterId: 'seed_bob_002', requesterVehicleId: 'veh_bob_01',
    requesterVehicleDisplay: 'Bob Williams · NSW200',
    recipientUserId: 'seed_henry_008', recipientVehicleId: 'veh_henry_01',
    message: "Love seeing Defenders out on the road. Great taste!",
    status: 'pending',
  },
  {
    id: 'freq_carol_dave',
    requesterId: 'seed_carol_003', requesterVehicleId: 'veh_carol_01',
    requesterVehicleDisplay: 'Carol Davis · UK30AB',
    recipientUserId: 'seed_dave_004', recipientVehicleId: 'veh_dave_01',
    message: "Fellow UK driver here — always nice to connect!",
    status: 'pending',
  },
];

// ── Sample messages ───────────────────────────────────────────────────────────
const now = Date.now();
const DAY = 86400000;
const MESSAGES = [
  // Bob → Alice (anonymous, re: MG HS PHEV)
  {
    senderId: 'seed_bob_002', senderVehicleId: 'veh_bob_01',
    senderVehicleDisplay: 'Anonymous',
    recipientUserId: 'seed_alice_001', recipientVehicleId: 'veh_alice_01',
    content: "Hi! How are you finding the MG HS PHEV? I've been thinking about getting one.",
    isFriendMessage: false, isAnonymous: true, isRead: false,
    ts: now - 2 * DAY,
  },
  // Alice → Bob (anonymous reply using her other vehicle)
  {
    senderId: 'seed_alice_001', senderVehicleId: 'veh_alice_02',
    senderVehicleDisplay: 'Anonymous',
    recipientUserId: 'seed_bob_002', recipientVehicleId: 'veh_bob_01',
    content: "It's fantastic! Great range in EV mode and loads of space.",
    isFriendMessage: false, isAnonymous: true, isRead: true,
    ts: now - 1.8 * DAY,
  },
  // Carol → Alice (friend message after they friended)
  {
    senderId: 'seed_carol_003', senderVehicleId: 'veh_carol_01',
    senderVehicleDisplay: 'Carol Davis · UK30AB',
    recipientUserId: 'seed_alice_001', recipientVehicleId: 'veh_alice_01',
    content: "Hey Alice! Just saw you're in NZ. My cousin lives in Auckland — small world! 🚗",
    isFriendMessage: true, isAnonymous: false, isRead: false,
    ts: now - 1 * DAY,
  },
  // Dave → Emma (friend message)
  {
    senderId: 'seed_dave_004', senderVehicleId: 'veh_dave_01',
    senderVehicleDisplay: 'Dave Smith · UK40CD',
    recipientUserId: 'seed_emma_005', recipientVehicleId: 'veh_emma_01',
    content: "Tesla owner checking in 👋 How's the Model Y treating you?",
    isFriendMessage: true, isAnonymous: false, isRead: true,
    ts: now - 3 * DAY,
  },
  // Emma → Dave (reply)
  {
    senderId: 'seed_emma_005', senderVehicleId: 'veh_emma_01',
    senderVehicleDisplay: 'Emma Brown · US500WA',
    recipientUserId: 'seed_dave_004', recipientVehicleId: 'veh_dave_01',
    content: "Love it! 400 miles on a charge and I can't go back to gas. You should try the 3 Series plug-in next!",
    isFriendMessage: true, isAnonymous: false, isRead: true,
    ts: now - 2.9 * DAY,
  },
  // James → Frank (friend message)
  {
    senderId: 'seed_james_010', senderVehicleId: 'veh_james_01',
    senderVehicleDisplay: 'James Taylor · QLD010',
    recipientUserId: 'seed_frank_006', recipientVehicleId: 'veh_frank_01',
    content: "That Land Cruiser 300 is a beast. Seen you around Brisbane a few times!",
    isFriendMessage: true, isAnonymous: false, isRead: false,
    ts: now - 0.5 * DAY,
  },
  // Grace → Alice (anonymous)
  {
    senderId: 'seed_grace_007', senderVehicleId: 'veh_grace_01',
    senderVehicleDisplay: 'Anonymous',
    recipientUserId: 'seed_alice_001', recipientVehicleId: 'veh_alice_01',
    content: "Spotted your MG HS PHEV — loving the colour choice! 👏",
    isFriendMessage: false, isAnonymous: true, isRead: false,
    ts: now - 0.2 * DAY,
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function threadId(aVehicle, bVehicle) {
  return [aVehicle, bVehicle].sort().join('_');
}

function expiresAt(tsMs) {
  return Timestamp.fromMillis(tsMs + 30 * DAY);
}

// ── Main seed function ────────────────────────────────────────────────────────
async function seed() {
  console.log('🌱  Starting seed…\n');

  // 1. Create / update Firebase Auth accounts
  for (const u of USERS) {
    try {
      await auth.createUser({
        uid: u.uid,
        email: u.email,
        password: PASSWORD,
        displayName: u.displayName,
        emailVerified: true,
      });
      console.log(`  ✅ Auth created: ${u.email}`);
    } catch (err) {
      if (err.code === 'auth/uid-already-exists' || err.code === 'auth/email-already-exists') {
        await auth.updateUser(u.uid, { displayName: u.displayName, emailVerified: true });
        console.log(`  ♻️  Auth updated: ${u.email}`);
      } else {
        throw err;
      }
    }
  }

  // 2. Firestore — users + vehicleLookup
  const batch1 = db.batch();
  for (const u of USERS) {
    batch1.set(db.collection('users').doc(u.uid), {
      uid: u.uid,
      email: u.email,
      displayName: u.displayName,
      phone: null,
      vehicles: u.vehicles,
      createdAt: Timestamp.fromMillis(now - 7 * DAY),
    });
    for (const v of u.vehicles) {
      batch1.set(db.collection('vehicleLookup').doc(v.licensePlate), {
        userId: u.uid,
        vehicleId: v.id,
        licensePlate: v.licensePlate,
        make: v.make,
        model: v.model,
        color: v.color,
      });
    }
  }
  await batch1.commit();
  console.log('\n  ✅ Users + vehicleLookup written.');

  // 3. Friend relationships (accepted, bidirectional)
  const batch2 = db.batch();
  const since = new Date(now - 5 * DAY).toISOString();
  for (const [uidA, vehA, uidB, vehB] of FRIEND_PAIRS) {
    const userA = USERS.find(u => u.uid === uidA);
    const userB = USERS.find(u => u.uid === uidB);
    // A's friend list gets B
    batch2.set(db.collection('users').doc(uidA).collection('friends').doc(uidB), {
      userId: uidB,
      vehicleId: vehB,
      vehicleDisplay: `${userB.displayName} · ${userB.vehicles.find(v => v.id === vehB)?.licensePlate ?? ''}`,
      nickname: null,
      since,
    });
    // B's friend list gets A
    batch2.set(db.collection('users').doc(uidB).collection('friends').doc(uidA), {
      userId: uidA,
      vehicleId: vehA,
      vehicleDisplay: `${userA.displayName} · ${userA.vehicles.find(v => v.id === vehA)?.licensePlate ?? ''}`,
      nickname: null,
      since,
    });
  }
  await batch2.commit();
  console.log(`  ✅ ${FRIEND_PAIRS.length} friend pairs written.`);

  // 4. Pending friend requests
  const batch3 = db.batch();
  for (const fr of FRIEND_REQUESTS) {
    batch3.set(db.collection('friendRequests').doc(fr.id), {
      requesterId: fr.requesterId,
      requesterVehicleId: fr.requesterVehicleId,
      requesterVehicleDisplay: fr.requesterVehicleDisplay,
      recipientUserId: fr.recipientUserId,
      recipientVehicleId: fr.recipientVehicleId,
      message: fr.message,
      status: fr.status,
      createdAt: Timestamp.fromMillis(now - 1 * DAY),
    });
  }
  await batch3.commit();
  console.log(`  ✅ ${FRIEND_REQUESTS.length} pending friend requests written.`);

  // 5. Messages
  const batch4 = db.batch();
  for (const m of MESSAGES) {
    const tid = threadId(m.senderVehicleId, m.recipientVehicleId);
    const ref = db.collection('messages').doc();
    batch4.set(ref, {
      senderId: m.senderId,
      senderVehicleId: m.senderVehicleId,
      senderVehicleDisplay: m.senderVehicleDisplay,
      recipientUserId: m.recipientUserId,
      recipientVehicleId: m.recipientVehicleId,
      threadId: tid,
      content: m.content,
      isFriendMessage: m.isFriendMessage,
      isAnonymous: m.isAnonymous,
      isRead: m.isRead,
      timestamp: Timestamp.fromMillis(m.ts),
      expiresAt: expiresAt(m.ts),
    });
  }
  await batch4.commit();
  console.log(`  ✅ ${MESSAGES.length} messages written.`);

  console.log('\n🎉  Seed complete!\n');
  console.log('Test accounts (all share password: CarTalk123!):\n');
  for (const u of USERS) {
    const plates = u.vehicles.map(v => `${v.make} ${v.model} (${v.licensePlate})`).join(', ');
    console.log(`  ${u.email.padEnd(30)} ${u.displayName.padEnd(22)} ${u.region}`);
    console.log(`  ${''.padEnd(30)} Vehicles: ${plates}`);
    console.log();
  }
  process.exit(0);
}

seed().catch(err => { console.error('❌ Seed failed:', err); process.exit(1); });

