/**
 * Shared E2E test utilities for CarTalk Playwright tests.
 *
 * Strategy: Tests run against the real Firebase dev project (no emulator).
 * Each test creates users with unique timestamped addresses and cleans them up
 * via the Firebase Web SDK at the end of each spec.
 *
 * NHTSA make/model API calls are mocked at the route level to keep tests fast
 * and independent of external APIs.
 */
import { Page } from '@playwright/test';

// ─── Unique data generators ────────────────────────────────────────────────
export function uniqueEmail(): string {
  return `e2e-${Date.now()}-${Math.random().toString(36).slice(2, 6)}@cartalk.test`;
}

export function uniquePlate(): string {
  const n = Math.floor(Math.random() * 9000) + 1000;
  return `TEST${n}`;
}

// ─── Firebase Auth helpers (executed in browser context) ───────────────────

/**
 * Sign up a new user via the UI then return the credentials for later cleanup.
 */
export async function signUpViaUI(
  page: Page,
  email: string,
  password: string,
  displayName = 'Test Driver'
): Promise<void> {
  await page.goto('./signup');
  await page.fill('#name', displayName);
  await page.fill('#email', email);
  await page.fill('#password', password);
  await page.click('button[type="submit"]');
  // After signup, app redirects to /add-vehicle
  await page.waitForURL(/add-vehicle/, { timeout: 30_000 });
}

/**
 * Sign in via the UI.
 */
export async function signInViaUI(
  page: Page,
  email: string,
  password: string
): Promise<void> {
  await page.goto('./login');
  await page.fill('#email', email);
  await page.fill('#password', password);
  await page.click('button[type="submit"]');
  await page.waitForURL(/inbox|search|add-vehicle/, { timeout: 15_000 });
}

/**
 * Sign out via Firebase in the browser context.
 */
export async function signOutViaUI(page: Page): Promise<void> {
  // Navigate to profile and click sign out
  await page.goto('./profile');
  await page.getByRole('button', { name: /sign out/i }).click();
  await page.waitForURL(/login/, { timeout: 10_000 });
}

/**
 * Delete the currently signed-in Firebase Auth user (cleanup).
 * Called from browser context via page.evaluate.
 */
export async function deleteCurrentUser(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const { getAuth, deleteUser } = await import('firebase/auth');
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) await deleteUser(user);
  });
}

// ─── NHTSA API mocking ─────────────────────────────────────────────────────

const MOCK_MAKES = ['TOYOTA', 'HONDA', 'FORD'];
const MOCK_MODELS: Record<string, string[]> = {
  TOYOTA: ['Camry', 'Corolla', 'RAV4'],
  HONDA: ['Civic', 'Accord', 'CR-V'],
  FORD: ['F-150', 'Mustang', 'Explorer'],
};

export async function mockNHTSARoutes(page: Page): Promise<void> {
  await page.route('**/vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes**', (route) =>
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({
        Results: MOCK_MAKES.map((MakeName) => ({ MakeName })),
      }),
    })
  );

  await page.route('**/vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/**', (route) => {
    const url = route.request().url();
    const makeEncoded = url.split('/GetModelsForMake/')[1]?.split('?')[0] ?? '';
    const make = decodeURIComponent(makeEncoded).toUpperCase();
    const models = MOCK_MODELS[make] ?? ['Model A', 'Model B'];
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({
        Results: models.map((Model_Name) => ({ Model_Name })),
      }),
    });
  });
}

// ─── Vehicle profile helpers ───────────────────────────────────────────────

export interface VehicleOptions {
  plate?: string;
  make?: string;
  model?: string;
  color?: string;
}

export async function addVehicleViaUI(
  page: Page,
  opts: VehicleOptions = {}
): Promise<string> {
  const plate = opts.plate ?? uniquePlate();
  const make = opts.make ?? 'TOYOTA';
  const model = opts.model ?? 'Camry';
  const color = opts.color ?? 'Blue';

  await mockNHTSARoutes(page);
  await page.goto('./add-vehicle');

  await page.fill('#plate', plate);

  // Wait for makes dropdown to be populated (NHTSA response)
  await page.waitForFunction(
    () => (document.querySelector('#make') as HTMLSelectElement)?.options.length > 1,
    { timeout: 10_000 }
  );
  await page.selectOption('#make', make);

  // Wait for models dropdown to be populated
  await page.waitForFunction(
    () => !(document.querySelector('#model') as HTMLSelectElement)?.disabled
        && (document.querySelector('#model') as HTMLSelectElement)?.options.length > 1,
    { timeout: 10_000 }
  );
  await page.selectOption('#model', model);
  await page.selectOption('#color', color);

  await page.click('button[type="submit"]');
  await page.waitForURL(/profile/, { timeout: 15_000 });

  return plate;
}

// ─── Test user lifecycle ───────────────────────────────────────────────────

export interface TestUser {
  email: string;
  password: string;
  displayName: string;
  plate?: string;
}

export async function createTestUser(page: Page, withVehicle = false): Promise<TestUser> {
  const user: TestUser = {
    email: uniqueEmail(),
    password: 'TestPass123!',
    displayName: 'E2E Tester',
  };
  await signUpViaUI(page, user.email, user.password, user.displayName);
  if (withVehicle) {
    user.plate = await addVehicleViaUI(page);
  }
  return user;
}

export async function cleanupTestUser(page: Page): Promise<void> {
  try {
    await deleteCurrentUser(page);
  } catch {
    // User may already be gone
  }
}
