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
 * If the user is already signed in the route guard redirects away from /login —
 * in that case this function is a no-op.
 */
export async function signInViaUI(
  page: Page,
  email: string,
  password: string
): Promise<void> {
  await page.goto('./login');
  // Race: either the login form appears (user not signed in) or we get
  // redirected away (user already signed in).  Either resolves this race.
  await Promise.race([
    page.locator('#email').waitFor({ state: 'visible', timeout: 8_000 }),
    page.waitForURL(/\/(search|inbox|add-vehicle|profile)/, { timeout: 8_000 }),
  ]).catch(() => {});
  if (!page.url().includes('/login')) return; // already authenticated → no-op
  await page.fill('#email', email);
  await page.fill('#password', password);
  await page.click('button[type="submit"]');
  await page.waitForURL(/inbox|search|add-vehicle/, { timeout: 15_000 });
}

/**
 * Sign out via the window.__e2e helper injected in dev mode.
 * Avoids page.goto('./profile') which can hang on Firestore reconnect.
 */
export async function signOutViaUI(page: Page): Promise<void> {
  await page.waitForFunction(() => !!(window as Record<string, unknown>).__e2e, { timeout: 5_000 });
  await page.evaluate(async () => {
    const e2e = (window as Window & { __e2e?: Record<string, () => Promise<void>> }).__e2e;
    if (e2e?.signOut) await e2e.signOut();
  });
  await page.waitForURL(/login/, { timeout: 10_000 });
}

/**
 * Delete the currently signed-in Firebase Auth user (cleanup).
 * Uses window.__e2e helper injected in dev mode.
 */
export async function deleteCurrentUser(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const e2e = (window as Window & { __e2e?: Record<string, () => Promise<void>> }).__e2e;
    if (e2e?.deleteCurrentUser) await e2e.deleteCurrentUser();
  }).catch(() => { /* ignore: user may already be deleted */ });
}

// ─── Vehicle data helpers ────────────────────────────────────────────────────
// Note: make/model dropdowns now use static bundled data (no NHTSA API calls).
// The vehicle list uses Title Case (e.g. 'Toyota', not 'TOYOTA').

/** @deprecated No-op — NHTSA API is no longer used; dropdowns use static data */
export async function mockNHTSARoutes(_page: Page): Promise<void> {
  // Nothing to mock — makes and models come from bundled vehicleData.ts
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
  // Static vehicleData uses Title Case — must match exactly
  const make  = opts.make  ?? 'Toyota';
  const model = opts.model ?? 'Camry';
  const color = opts.color ?? 'Blue';

  await page.goto('./add-vehicle');
  await page.fill('#plate', plate);

  // Make dropdown is populated synchronously from bundled data; still wait for render
  await page.waitForFunction(
    () => (document.querySelector('#make') as HTMLSelectElement)?.options.length > 1,
    { timeout: 10_000 }
  );
  await page.selectOption('#make', make);

  // Model dropdown enables synchronously after make is selected
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
