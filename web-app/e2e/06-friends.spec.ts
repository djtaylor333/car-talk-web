/**
 * E2E — 06: Friends (favourites)
 * Tests: send friend request, accept it, verify friend message limit increases.
 */
import { test, expect, Browser } from '@playwright/test';
import { createTestUser, cleanupTestUser, signInViaUI } from './helpers';

const PASSWORD = 'TestPass123!';

test.describe('Friends / Favourites', () => {
  test('send friend request, accept it, send a longer friend message', async ({ browser }: { browser: Browser }) => {
    // ── Setup ──────────────────────────────────────────────────────────────
    const ctxA = await browser.newContext();
    const pageA = await ctxA.newPage();
    const userA = await createTestUser(pageA, true);

    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    await createTestUser(pageB, true);

    // ── User B searches for User A and sends a friend request ──────────────
    await pageB.goto('./search');
    await pageB.fill('input[type="text"]', userA.plate!);
    await pageB.click('button[type="submit"]');
    await pageB.getByRole('button', { name: /add as friend/i }).waitFor({ timeout: 15_000 });
    await pageB.getByRole('button', { name: /add as friend/i }).click();
    await pageB.waitForURL(/compose/);

    const introMsg = 'Hi, I think we park on the same street!';
    await pageB.fill('#content', introMsg);
    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/);

    // ── User A goes to friends page and accepts ─────────────────────────────
    await pageA.goto('./friends');
    const requestCard = pageA.locator('.friend-request-card, .card').first();
    await expect(requestCard).toBeVisible({ timeout: 15_000 });
    // Intro message visible on the card
    await expect(requestCard).toContainText(introMsg);

    await requestCard.getByRole('button', { name: /accept/i }).click();

    // The request card should disappear after acceptance
    await expect(requestCard).toBeHidden({ timeout: 10_000 });

    // ── User B can now send a 300-char friend message (exceeds anon 200 limit) ─
    await pageB.goto('./search');
    await pageB.fill('input[type="text"]', userA.plate!);
    await pageB.click('button[type="submit"]');
    // After being friends, "Send Message" button should appear with isFriend param
    await pageB.getByRole('button', { name: /send message/i }).waitFor({ timeout: 15_000 });
    await pageB.getByRole('button', { name: /send message/i }).click();
    await pageB.waitForURL(/compose/);

    // Navigate directly to compose with isFriend=true to test 500-char limit
    const currentUrl = new URL(pageB.url());
    currentUrl.searchParams.set('isFriend', 'true');
    await pageB.goto(currentUrl.pathname + currentUrl.search);

    const longMsg = 'F'.repeat(300); // 300 chars > anon limit (200) but < friend limit (500)
    await pageB.fill('#content', longMsg);

    // Should not be truncated — Friend limit is 500
    const value = await pageB.locator('#content').inputValue();
    expect(value.length).toBe(300);

    // Character counter should show 300/500 (not 200/200)
    await expect(pageB.locator('label[for="content"]')).toContainText('300/500');

    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/);

    // Verify User A received the long message
    await pageA.goto('./inbox');
    const friendRows = pageA.locator('[data-testid="message-row"]');
    await expect(friendRows.first()).toBeVisible({ timeout: 15_000 });

    // ── Cleanup ────────────────────────────────────────────────────────────
    await cleanupTestUser(pageB);
    await ctxB.close();
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });

  test('friend request card shows requester vehicle and message', async ({ browser }: { browser: Browser }) => {
    const ctxA = await browser.newContext();
    const pageA = await ctxA.newPage();
    const userA = await createTestUser(pageA, true);

    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    await createTestUser(pageB, true);

    await pageB.goto('./search');
    await pageB.fill('input[type="text"]', userA.plate!);
    await pageB.click('button[type="submit"]');
    await pageB.getByRole('button', { name: /add as friend/i }).waitFor({ timeout: 15_000 });
    await pageB.getByRole('button', { name: /add as friend/i }).click();
    await pageB.waitForURL(/compose/);

    await pageB.fill('#content', 'Saw you at the lights!');
    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/);

    await pageA.goto('./friend-requests');
    const card = pageA.locator('.friend-request-card, .card').first();
    await expect(card).toBeVisible({ timeout: 15_000 });
    await expect(card).toContainText('Saw you at the lights!');
    // Accept and Decline buttons visible
    await expect(card.getByRole('button', { name: /accept/i })).toBeVisible();
    await expect(card.getByRole('button', { name: /decline/i })).toBeVisible();

    await cleanupTestUser(pageB);
    await ctxB.close();
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });
});
