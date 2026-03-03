/**
 * Seed script â€” creates 10 test accounts in Firebase Auth + Firestore.
 * Uses the Firebase REST API only â€” NO service account / admin SDK required.
 * Credentials are read automatically from web-app/.env.local.
 *
 * Usage (from repo root):
 *   node scripts/seed_test_data.js
 *
 * Re-running is safe: existing accounts are signed-in and their data overwritten.
 */

'use strict';
const fs   = require('fs');
const path = require('path');

// â”€â”€ Read config from web-app/.env.local â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const envPath = path.join(__dirname, '../web-app/.env.local');
if (!fs.existsSync(envPath)) {
  console.error('âŒ  web-app/.env.local not found. Copy .env.example and fill it in.');
  process.exit(1);
}
const env = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .filter(l => l.includes('='))
    .map(l => { const [k, ...rest] = l.split('='); return [k.trim(), rest.join('=').trim()]; })
);
const API_KEY    = env.VITE_FIREBASE_API_KEY;
const PROJECT_ID = env.VITE_FIREBASE_PROJECT_ID;
if (!API_KEY || !PROJECT_ID) {
  console.error('âŒ  VITE_FIREBASE_API_KEY / VITE_FIREBASE_PROJECT_ID missing in .env.local');
  process.exit(1);
}

const PASSWORD = 'CarTalk123!';
const DAY      = 86_400_000;
const now      = Date.now();

// â”€â”€ Firebase REST helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
async function authPost(endpoint, body) {
  const res  = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${API_KEY}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
  );
  const data = await res.json();
  if (!res.ok) throw new Error(`Auth/${endpoint}: ${data?.error?.message ?? JSON.stringify(data)}`);
  return data;
}

const FS_BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

async function fsSet(docPath, fields, idToken) {
  const res  = await fetch(`${FS_BASE}/${docPath}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${idToken}` },
    body: JSON.stringify({ fields: toFields(fields) }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Firestore PATCH ${docPath}: ${data?.error?.message ?? JSON.stringify(data)}`);
}

async function fsAdd(colPath, fields, idToken) {
  const res  = await fetch(`${FS_BASE}/${colPath}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${idToken}` },
    body: JSON.stringify({ fields: toFields(fields) }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Firestore POST ${colPath}: ${data?.error?.message ?? JSON.stringify(data)}`);
}

// Convert a plain JS object/value to Firestore REST wire format
function toVal(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === 'boolean')        return { booleanValue: v };
  if (typeof v === 'number')         return Number.isInteger(v)
                                       ? { integerValue: String(v) }
                                       : { doubleValue: v };
  if (typeof v === 'string')         return { stringValue: v };
  if (Array.isArray(v))              return { arrayValue: { values: v.map(toVal) } };
  // Firestore timestamp sentinel
  if (v && typeof v === 'object' && v.__type === '__firestore_timestamp__')
    return { timestampValue: new Date(v.seconds * 1000).toISOString() };
  if (typeof v === 'object')         return { mapValue: { fields: toFields(v) } };
  return { stringValue: String(v) };
}
function toFields(obj) {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => [k, toVal(v)])
  );
}

// â”€â”€ Test user definitions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const USERS = [
  {
    key: 'alice', email: 'alice@cartalk.test', displayName: 'Alice Johnson', region: 'Auckland, NZ',
    vehicles: [
      { id: 'veh_alice_01', licensePlate: 'NZL100', make: 'MG',     model: 'HS PHEV', color: 'White'  },
      { id: 'veh_alice_02', licensePlate: 'NZL101', make: 'Toyota', model: 'HiLux',   color: 'Silver' },
    ],
  },
  {
    key: 'bob', email: 'bob@cartalk.test', displayName: 'Bob Williams', region: 'Sydney, AU',
    vehicles: [
      { id: 'veh_bob_01', licensePlate: 'NSW200', make: 'Ford', model: 'Ranger', color: 'Black' },
    ],
  },
  {
    key: 'carol', email: 'carol@cartalk.test', displayName: 'Carol Davis', region: 'London, UK',
    vehicles: [
      { id: 'veh_carol_01', licensePlate: 'UK30AB', make: 'Vauxhall', model: 'Corsa',      color: 'Red'   },
      { id: 'veh_carol_02', licensePlate: 'UK31AB', make: 'MINI',     model: 'Countryman', color: 'White' },
    ],
  },
  {
    key: 'dave', email: 'dave@cartalk.test', displayName: 'Dave Smith', region: 'Manchester, UK',
    vehicles: [
      { id: 'veh_dave_01', licensePlate: 'UK40CD', make: 'BMW', model: '3 Series', color: 'Blue' },
    ],
  },
  {
    key: 'emma', email: 'emma@cartalk.test', displayName: 'Emma Brown', region: 'Seattle, US',
    vehicles: [
      { id: 'veh_emma_01', licensePlate: 'US500WA', make: 'Tesla', model: 'Model Y', color: 'White' },
    ],
  },
  {
    key: 'frank', email: 'frank@cartalk.test', displayName: 'Frank Miller', region: 'Melbourne, AU',
    vehicles: [
      { id: 'veh_frank_01', licensePlate: 'VIC600', make: 'Toyota', model: 'Land Cruiser 300', color: 'Silver' },
      { id: 'veh_frank_02', licensePlate: 'VIC601', make: 'Haval',  model: 'Jolion',           color: 'Grey'   },
    ],
  },
  {
    key: 'grace', email: 'grace@cartalk.test', displayName: 'Grace Wilson', region: 'Toronto, CA',
    vehicles: [
      { id: 'veh_grace_01', licensePlate: 'ON700G', make: 'Honda', model: 'CR-V', color: 'Grey' },
    ],
  },
  {
    key: 'henry', email: 'henry@cartalk.test', displayName: 'Henry Moore', region: 'Edinburgh, UK',
    vehicles: [
      { id: 'veh_henry_01', licensePlate: 'UK80HM', make: 'Land Rover', model: 'Defender', color: 'Green' },
    ],
  },
  {
    key: 'isabel', email: 'isabel@cartalk.test', displayName: 'Isabel Martinez', region: 'Christchurch, NZ',
    vehicles: [
      { id: 'veh_isabel_01', licensePlate: 'NZL900', make: 'Hyundai', model: 'Tucson Plug-in Hybrid', color: 'Silver' },
      { id: 'veh_isabel_02', licensePlate: 'NZL901', make: 'Kia',     model: 'EV6',                   color: 'Blue'   },
    ],
  },
  {
    key: 'james', email: 'james@cartalk.test', displayName: 'James Taylor', region: 'Brisbane, AU',
    vehicles: [
      { id: 'veh_james_01', licensePlate: 'QLD010', make: 'Mazda', model: 'CX-5',  color: 'Red'   },
      { id: 'veh_james_02', licensePlate: 'QLD011', make: 'Isuzu', model: 'D-Max', color: 'White' },
    ],
  },
];

// [keyA, vehIdA, keyB, vehIdB]
const FRIEND_PAIRS = [
  ['alice', 'veh_alice_01', 'bob',    'veh_bob_01'  ],
  ['alice', 'veh_alice_01', 'carol',  'veh_carol_01'],
  ['dave',  'veh_dave_01',  'emma',   'veh_emma_01' ],
  ['frank', 'veh_frank_01', 'james',  'veh_james_01'],
  ['grace', 'veh_grace_01', 'isabel', 'veh_isabel_01'],
];

// senderKey, senderVehicleId, recipientKey, recipientVehicleId
const MESSAGES = [
  { senderKey: 'bob',   senderVehId: 'veh_bob_01',    recipientKey: 'alice', recipientVehId: 'veh_alice_01',
    content: 'Hi! How are you finding the MG HS PHEV? I\'ve been thinking about getting one.',
    isFriendMessage: false, isAnonymous: true,  isRead: false, tsOffset: -2 * DAY },
  { senderKey: 'alice', senderVehId: 'veh_alice_02',  recipientKey: 'bob',   recipientVehId: 'veh_bob_01',
    content: "It's fantastic! Great range in EV mode and loads of space.",
    isFriendMessage: false, isAnonymous: true,  isRead: true,  tsOffset: -1.8 * DAY },
  { senderKey: 'carol', senderVehId: 'veh_carol_01',  recipientKey: 'alice', recipientVehId: 'veh_alice_01',
    content: 'Hey Alice! Just saw you\'re in NZ. My cousin lives in Auckland â€” small world! ðŸš—',
    isFriendMessage: true,  isAnonymous: false, isRead: false, tsOffset: -1 * DAY },
  { senderKey: 'dave',  senderVehId: 'veh_dave_01',   recipientKey: 'emma',  recipientVehId: 'veh_emma_01',
    content: 'Tesla owner checking in ðŸ‘‹ How\'s the Model Y treating you?',
    isFriendMessage: true,  isAnonymous: false, isRead: true,  tsOffset: -3 * DAY },
  { senderKey: 'emma',  senderVehId: 'veh_emma_01',   recipientKey: 'dave',  recipientVehId: 'veh_dave_01',
    content: 'Love it! You should try the 3 Series plug-in next!',
    isFriendMessage: true,  isAnonymous: false, isRead: true,  tsOffset: -2.9 * DAY },
  { senderKey: 'james', senderVehId: 'veh_james_01',  recipientKey: 'frank', recipientVehId: 'veh_frank_01',
    content: 'That Land Cruiser 300 is a beast. Seen you around Brisbane a few times!',
    isFriendMessage: true,  isAnonymous: false, isRead: false, tsOffset: -0.5 * DAY },
  { senderKey: 'grace', senderVehId: 'veh_grace_01',  recipientKey: 'alice', recipientVehId: 'veh_alice_01',
    content: 'Spotted your MG HS PHEV â€” loving the colour choice! ðŸ‘',
    isFriendMessage: false, isAnonymous: true,  isRead: false, tsOffset: -0.2 * DAY },
];

function threadId(vehA, vehB) { return [vehA, vehB].sort().join('_'); }

// â”€â”€ Main â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
async function seed() {
  console.log(`ðŸŒ±  Seeding ${PROJECT_ID} â€¦\n`);

  // Phase 1 â€” create / sign in all Auth accounts, collect uid + idToken
  const userMap = {}; // key â†’ { uid, idToken, user }
  for (const u of USERS) {
    let uid, idToken;
    try {
      const r = await authPost('signUp', { email: u.email, password: PASSWORD, displayName: u.displayName, returnSecureToken: true });
      uid = r.localId; idToken = r.idToken;
      console.log(`  âœ… Created auth: ${u.email}`);
    } catch (err) {
      if (err.message.includes('EMAIL_EXISTS')) {
        const r = await authPost('signInWithPassword', { email: u.email, password: PASSWORD, returnSecureToken: true });
        uid = r.localId; idToken = r.idToken;
        console.log(`  â™»ï¸  Exists, signed in: ${u.email}`);
      } else throw err;
    }
    userMap[u.key] = { uid, idToken, user: u };
  }

  // Phase 2 â€” write /users/{uid} + /vehicleLookup/{plate}
  console.log('\n  Writing profiles and vehicle lookupâ€¦');
  for (const u of USERS) {
    const { uid, idToken } = userMap[u.key];
    await fsSet(`users/${uid}`, {
      uid, email: u.email, displayName: u.displayName, phone: null,
      vehicles: u.vehicles,
    }, idToken);
    for (const v of u.vehicles) {
      await fsSet(`vehicleLookup/${v.licensePlate}`, {
        userId: uid, vehicleId: v.id, licensePlate: v.licensePlate,
        make: v.make, model: v.model, color: v.color,
      }, idToken);
    }
    process.stdout.write('.');
  }
  console.log(' done.');

  // Phase 3 â€” write friends subcollections (each user writes their own side)
  console.log('\n  Writing friend relationshipsâ€¦');
  for (const [keyA, vehIdA, keyB, vehIdB] of FRIEND_PAIRS) {
    const { uid: uidA, idToken: tokA, user: userA } = userMap[keyA];
    const { uid: uidB, idToken: tokB, user: userB } = userMap[keyB];
    const vehB = userB.vehicles.find(v => v.id === vehIdB);
    const vehA = userA.vehicles.find(v => v.id === vehIdA);
    const since = new Date(now - 5 * DAY).toISOString();

    await fsSet(`users/${uidA}/friends/${uidB}`, {
      userId: uidB, vehicleId: vehIdB,
      vehicleDisplay: `${userB.displayName} Â· ${vehB.licensePlate}`,
      nickname: null, since,
    }, tokA);

    await fsSet(`users/${uidB}/friends/${uidA}`, {
      userId: uidA, vehicleId: vehIdA,
      vehicleDisplay: `${userA.displayName} Â· ${vehA.licensePlate}`,
      nickname: null, since,
    }, tokB);
    process.stdout.write('.');
  }
  console.log(' done.');

  // Phase 4 â€” write pending friend requests
  console.log('\n  Writing friend requestsâ€¦');
  const FREQ = [
    { reqKey: 'bob',   reqVehId: 'veh_bob_01',   recipKey: 'henry',  recipVehId: 'veh_henry_01',
      message: 'Love seeing Defenders out on the road. Great taste!' },
    { reqKey: 'carol', reqVehId: 'veh_carol_01',  recipKey: 'dave',   recipVehId: 'veh_dave_01',
      message: 'Fellow UK driver here â€” always nice to connect!' },
  ];
  for (const fr of FREQ) {
    const { uid: rUid, idToken: rTok, user: rUser } = userMap[fr.reqKey];
    const { uid: recUid, user: recUser } = userMap[fr.recipKey];
    const rVeh = rUser.vehicles.find(v => v.id === fr.reqVehId);
    await fsAdd('friendRequests', {
      requesterId: rUid, requesterVehicleId: fr.reqVehId,
      requesterVehicleDisplay: `${rUser.displayName} Â· ${rVeh.licensePlate}`,
      recipientUserId: recUid, recipientVehicleId: fr.recipVehId,
      message: fr.message, status: 'pending',
    }, rTok);
    process.stdout.write('.');
  }
  console.log(' done.');

  // Phase 5 â€” write messages (signed in as sender)
  console.log('\n  Writing messagesâ€¦');
  for (const m of MESSAGES) {
    const { uid: sUid, idToken: sTok, user: sUser } = userMap[m.senderKey];
    const { uid: rUid }                              = userMap[m.recipientKey];
    const sVeh = sUser.vehicles.find(v => v.id === m.senderVehId);
    const ts   = now + m.tsOffset;
    const exp  = ts + 30 * DAY;
    const tid  = threadId(m.senderVehId, m.recipientVehId);
    await fsAdd('messages', {
      senderId: sUid, senderVehicleId: m.senderVehId,
      senderVehicleDisplay: m.isAnonymous ? 'Anonymous' : `${sUser.displayName} Â· ${sVeh.licensePlate}`,
      recipientUserId: rUid, recipientVehicleId: m.recipientVehId,
      threadId: tid, content: m.content,
      isFriendMessage: m.isFriendMessage, isAnonymous: m.isAnonymous, isRead: m.isRead,
      timestamp:  { __type: '__firestore_timestamp__', seconds: Math.floor(ts / 1000), nanos: 0 },
      expiresAt:  { __type: '__firestore_timestamp__', seconds: Math.floor(exp / 1000), nanos: 0 },
    }, sTok);
    process.stdout.write('.');
  }
  console.log(' done.');

  console.log('\nðŸŽ‰  Seed complete!\n');
  console.log('Password for all accounts: CarTalk123!\n');
  for (const u of USERS) {
    const { uid } = userMap[u.key];
    const plates = u.vehicles.map(v => `${v.licensePlate} (${v.make} ${v.model})`).join(', ');
    console.log(`  ${u.email.padEnd(28)} uid: ${uid}`);
    console.log(`  ${''.padEnd(28)} ${plates}`);
    console.log();
  }
}

seed().catch(err => { console.error('\nâŒ Seed failed:', err.message); process.exit(1); });
