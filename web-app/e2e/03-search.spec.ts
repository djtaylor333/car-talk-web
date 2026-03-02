/**
 * E2E — 03: Search by licence plate
 * Creates two users: User A adds a vehicle, User B searches for it and
 * sees the make/model on the result card.
 */
import { test, expect, Browser } from '@playwright/test';
import { createTestUser, cleanupTestUser, signInViaUI, uniqueEmail } from './helpers';

const PASSWORD = 'TestPass123!';

test.describe('Search by licence plate', () => {
  test('searching a known plate shows make, model and allows messaging', async ({ browser }: { browser: Browser }) => {
    // ── User A: create account with a vehicle ──────────────────────────────
    const ctxA = await browser.newContext();
    const pageA = await ctxA.newPage();
    const userA = await createTestUser(pageA, true); // creates vehicle with uniquePlate
    const plate = userA.plate!;

    // ── User B: create account, search for User A's vehicle ─────────────────
    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    const userB = await createTestUser(pageB, true); // needs own vehicle to send

    await pageB.goto('/search');
    await pageB.fill('input[type="text"]', plate);
    await pageB.click('button[type="submit"]');

    // Result should appear with make, model, colour
    await expect(pageB.locator('.search-plate, [class*="plate"]')).toContainText(plate, { timeout: 15_000 });
    await expect(pageB.locator('.search-vehicle, [class*="vehicle"]')).toContainText(/TOYOTA|HONDA|FORD/i);

    // "Send Message" and "Add as Friend" buttons should be visible
    await expect(pageB.getByRole('button', { name: /send message/i })).toBeVisible();
    await expect(pageB.getByRole('button', { name: /add as friend/i })).toBeVisible();

    // ── Cleanup ────────────────────────────────────────────────────────────
    await cleanupTestUser(pageB);
    await ctxB.close();

    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });

  test('searching a non-existent plate shows no results', async ({ page }) => {
    await createTestUser(page, false);

    await page.goto('./search');
    await page.fill('input[type="text"]', 'ZZZNONE0000');
    await page.click('button[type="submit"]');

    // Should not navigate away and should show no result card
    await expect(page.locator('.search-result')).toBeHidden({ timeout: 10_000 });

    await cleanupTestUser(page);
  });

  test('search input is accessible', async ({ page }) => {
    await createTestUser(page, false);
    await page.goto('./search');

    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();

    await cleanupTestUser(page);
  });
});
