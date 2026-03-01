/**
 * Seed script — populates Firestore with 10 test vehicles for development.
 *
 * Usage (from repo root):
 *   node scripts/seed_test_data.js
 *
 * Requires GOOGLE_APPLICATION_CREDENTIALS env var pointing to a service account key,
 * OR run after `firebase emulators:start` with FIRESTORE_EMULATOR_HOST=127.0.0.1:8080
 */

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
let app;
if (serviceAccount) {
  app = initializeApp({ credential: cert(require(serviceAccount)) });
} else {
  // Emulator mode
  process.env.FIRESTORE_EMULATOR_HOST = process.env.FIRESTORE_EMULATOR_HOST || '127.0.0.1:8080';
  app = initializeApp({ projectId: 'cartalk-app' });
}

const db = getFirestore(app);

const TEST_VEHICLES = [
  { userId: 'test_user_01', vehicleId: 'veh_01', licensePlate: 'ABC1234', make: 'Toyota',     model: 'Camry',    color: 'Silver' },
  { userId: 'test_user_02', vehicleId: 'veh_02', licensePlate: 'XYZ9876', make: 'Ford',       model: 'F-150',    color: 'White'  },
  { userId: 'test_user_03', vehicleId: 'veh_03', licensePlate: 'BMW3456', make: 'BMW',        model: '3 Series', color: 'Black'  },
  { userId: 'test_user_04', vehicleId: 'veh_04', licensePlate: 'HON7890', make: 'Honda',      model: 'Civic',    color: 'Blue'   },
  { userId: 'test_user_05', vehicleId: 'veh_05', licensePlate: 'CHV4321', make: 'Chevrolet',  model: 'Silverado','color': 'Red'  },
  { userId: 'test_user_06', vehicleId: 'veh_06', licensePlate: 'TSL0001', make: 'Tesla',      model: 'Model 3',  color: 'White'  },
  { userId: 'test_user_07', vehicleId: 'veh_07', licensePlate: 'VWG2022', make: 'Volkswagen', model: 'Golf',     color: 'Grey'   },
  { userId: 'test_user_08', vehicleId: 'veh_08', licensePlate: 'MAZ5555', make: 'Mazda',      model: 'CX-5',     color: 'Red'    },
  { userId: 'test_user_09', vehicleId: 'veh_09', licensePlate: 'SUB8888', make: 'Subaru',     model: 'Outback',  color: 'Green'  },
  { userId: 'test_user_10', vehicleId: 'veh_10', licensePlate: 'JEP4444', make: 'Jeep',       model: 'Wrangler', color: 'Yellow' },
];

async function seed() {
  const batch = db.batch();

  for (const v of TEST_VEHICLES) {
    // vehicleLookup
    batch.set(db.collection('vehicleLookup').doc(v.licensePlate), v);

    // user profile
    batch.set(db.collection('users').doc(v.userId), {
      id: v.userId,
      displayName: `Test Driver ${v.userId.slice(-2)}`,
      email: `driver${v.userId.slice(-2)}@test.car`,
      vehicles: [{
        id: v.vehicleId,
        licensePlate: v.licensePlate,
        make: v.make,
        model: v.model,
        color: v.color,
      }],
    });
  }

  await batch.commit();
  console.log(`✅  Seeded ${TEST_VEHICLES.length} test vehicles and profiles.`);
  process.exit(0);
}

seed().catch((err) => { console.error(err); process.exit(1); });
