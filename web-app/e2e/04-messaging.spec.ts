/**
 * E2E — 04: Messaging
 * Tests: anonymous flag, identified flag, profanity rejection, daily-limit error.
 * Uses two browser contexts (User A = recipient, User B = sender).
 */
import { test, expect, Browser } from '@playwright/test';
import { createTestUser, cleanupTestUser, signInViaUI } from './helpers';

const PASSWORD = 'TestPass123!';

test.describe('Messaging', () => {
  test('compose page has anonymous toggle and send button', async ({ browser }: { browser: Browser }) => {
    const ctxA = await browser.newContext();
    const pageA = await ctxA.newPage();
    const userA = await createTestUser(pageA, true);

    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    await createTestUser(pageB, true);

    // User B searches for User A's plate and opens compose
    await pageB.goto(`/compose?recipientId=uid&vehicleId=vid&plate=${userA.plate}`);

    // Anonymous toggle should be present and checked by default
    const checkbox = pageB.locator('[data-testid="anon-checkbox"]');
    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeChecked();

    // Hint text reflects anonymous state
    await expect(pageB.locator('.checkbox-hint')).toContainText(/cannot see/i);

    // Uncheck → hint changes
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    await expect(pageB.locator('.checkbox-hint')).toContainText(/can see/i);

    await cleanupTestUser(pageB);
    await ctxB.close();

    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });

  test('sends anonymous message and it appears in recipient inbox', async ({ browser }: { browser: Browser }) => {
    const ctxA = await browser.newContext();
    const pageA = await ctxA.newPage();
    const userA = await createTestUser(pageA, true);
    const plate = userA.plate!;

    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    await createTestUser(pageB, true);

    // Get User A's uid + vehicleId from vehicleLookup via search
    await pageB.goto('/search');
    await pageB.fill('input[type="text"]', plate);
    await pageB.click('button[type="submit"]');
    await pageB.getByRole('button', { name: /send message/i }).waitFor({ timeout: 15_000 });

    // Navigate via the Send Message button (builds correct compose URL)
    await pageB.getByRole('button', { name: /send message/i }).click();
    await pageB.waitForURL(/compose/, { timeout: 10_000 });

    const msgText = `Hello from anonymous ${Date.now()}`;
    await pageB.fill('#content', msgText);
    // Anonymous checkbox should be checked by default
    await expect(pageB.locator('[data-testid="anon-checkbox"]')).toBeChecked();

    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/, { timeout: 15_000 });

    // User A should see the message in their inbox
    await pageA.goto('/inbox');
    await expect(pageA.locator('[data-testid="message-row"]').first()).toBeVisible({ timeout: 15_000 });
    await expect(pageA.locator('[data-testid="message-row"]').first()).toContainText(msgText.slice(0, 40));
    // Sender shown as Anonymous
    await expect(pageA.locator('.message-plate, .badge-anon').first()).toContainText(/anon/i);

    // Cleanup
    await cleanupTestUser(pageB);
    await ctxB.close();

    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });

  test('sends identified (non-anonymous) message — sender vehicle shown', async ({ browser }: { browser: Browser }) => {
    const ctxA = await browser.newContext();
    const pageA = await ctxA.newPage();
    const userA = await createTestUser(pageA, true);

    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    await createTestUser(pageB, true);

    await pageB.goto('/search');
    await pageB.fill('input[type="text"]', userA.plate!);
    await pageB.click('button[type="submit"]');
    await pageB.getByRole('button', { name: /send message/i }).waitFor({ timeout: 15_000 });
    await pageB.getByRole('button', { name: /send message/i }).click();
    await pageB.waitForURL(/compose/);

    // Uncheck anonymous
    await pageB.locator('[data-testid="anon-checkbox"]').uncheck();

    const msgText = `Identified msg ${Date.now()}`;
    await pageB.fill('#content', msgText);
    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/);

    // In User A's inbox the sender vehicle should be visible (not "Anonymous")
    await pageA.goto('/inbox');
    await expect(pageA.locator('[data-testid="message-row"]').first()).toBeVisible({ timeout: 15_000 });
    const rowText = await pageA.locator('[data-testid="message-row"]').first().textContent();
    expect(rowText).not.toContain('Anonymous');

    await cleanupTestUser(pageB);
    await ctxB.close();
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });

  test('profanity in message shows error and does not navigate', async ({ browser }: { browser: Browser }) => {
    const ctxA = await browser.newContext();
    const pageA = await ctxA.newPage();
    const userA = await createTestUser(pageA, true);

    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    await createTestUser(pageB, true);

    await pageB.goto('/search');
    await pageB.fill('input[type="text"]', userA.plate!);
    await pageB.click('button[type="submit"]');
    await pageB.getByRole('button', { name: /send message/i }).waitFor({ timeout: 15_000 });
    await pageB.getByRole('button', { name: /send message/i }).click();
    await pageB.waitForURL(/compose/);

    await pageB.fill('#content', 'you are an ass');
    await pageB.locator('[data-testid="send-btn"]').click();

    // Should show an error and NOT navigate to inbox
    await expect(pageB.locator('[role="alert"]')).toContainText(/inappropriate/i, { timeout: 10_000 });
    await expect(pageB).toHaveURL(/compose/);

    await cleanupTestUser(pageB);
    await ctxB.close();
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });

  test('character counter updates as message is typed', async ({ browser }: { browser: Browser }) => {
    const ctxA = await browser.newContext();
    const pageA = await ctxA.newPage();
    const userA = await createTestUser(pageA, true);

    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    await createTestUser(pageB, true);

    await pageB.goto('/search');
    await pageB.fill('input[type="text"]', userA.plate!);
    await pageB.click('button[type="submit"]');
    await pageB.getByRole('button', { name: /send message/i }).waitFor({ timeout: 15_000 });
    await pageB.getByRole('button', { name: /send message/i }).click();
    await pageB.waitForURL(/compose/);

    await pageB.fill('#content', 'Hello');
    await expect(pageB.locator('label[for="content"]')).toContainText('5/200');

    await cleanupTestUser(pageB);
    await ctxB.close();
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });
});
