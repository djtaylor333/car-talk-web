/**
 * E2E — 07: Inbox — filter tabs, unread dots, thread view, reply button.
 */
import { test, expect, Browser } from '@playwright/test';
import { createTestUser, cleanupTestUser, signInViaUI } from './helpers';

const PASSWORD = 'TestPass123!';

test.describe('Inbox', () => {
  test('shows All / Anonymous / Friends filter tabs', async ({ page }) => {
    await createTestUser(page, false);
    await page.goto('./inbox');

    await expect(page.locator('[data-testid="tab-all"]')).toBeVisible();
    await expect(page.locator('[data-testid="tab-anonymous"]')).toBeVisible();
    await expect(page.locator('[data-testid="tab-friends"]')).toBeVisible();

    // "All" tab is active by default
    await expect(page.locator('[data-testid="tab-all"]')).toHaveAttribute('aria-selected', 'true');

    await cleanupTestUser(page);
  });

  test('switching to Anonymous tab shows only anonymous messages', async ({ browser }: { browser: Browser }) => {
    const ctxA = await browser.newContext();
    const pageA = await ctxA.newPage();
    const userA = await createTestUser(pageA, true);

    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    await createTestUser(pageB, true);

    // Send an anonymous message to User A
    await pageB.goto('/search');
    await pageB.fill('input[type="text"]', userA.plate!);
    await pageB.click('button[type="submit"]');
    await pageB.getByRole('button', { name: /send message/i }).waitFor({ timeout: 15_000 });
    await pageB.getByRole('button', { name: /send message/i }).click();
    await pageB.waitForURL(/compose/);
    // Ensure anonymous is checked
    await pageB.locator('[data-testid="anon-checkbox"]').check();
    await pageB.fill('#content', `Anon inbox test ${Date.now()}`);
    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/);

    // User A checks inbox tabs
    await pageA.goto('/inbox');
    await expect(pageA.locator('[data-testid="message-row"]').first()).toBeVisible({ timeout: 15_000 });

    // Click Anonymous tab — message should still be there
    await pageA.locator('[data-testid="tab-anonymous"]').click();
    await expect(pageA.locator('[data-testid="message-row"]').first()).toBeVisible({ timeout: 5_000 });

    // Click Friends tab — should show empty state (no friend messages yet)
    await pageA.locator('[data-testid="tab-friends"]').click();
    await expect(pageA.locator('.empty-state')).toBeVisible({ timeout: 5_000 });

    await cleanupTestUser(pageB);
    await ctxB.close();
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });

  test('clicking a message opens the thread view', async ({ browser }: { browser: Browser }) => {
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
    const threadMsg = `Thread open test ${Date.now()}`;
    await pageB.fill('#content', threadMsg);
    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/);

    // User A opens the message
    await pageA.goto('/inbox');
    await pageA.locator('[data-testid="message-row"]').first().waitFor({ timeout: 15_000 });
    await pageA.locator('[data-testid="message-row"]').first().click();

    await expect(pageA).toHaveURL(/thread\//, { timeout: 10_000 });

    // Message content visible in thread
    await expect(pageA.locator('.bubble-content, [class*="bubble"]')).toContainText(
      threadMsg.slice(0, 30),
      { timeout: 10_000 }
    );

    // Reply button visible
    await expect(pageA.locator('[data-testid="reply-btn"]')).toBeVisible();

    // Back button navigates to inbox
    await pageA.locator('.btn-back').click();
    await expect(pageA).toHaveURL(/inbox/);

    await cleanupTestUser(pageB);
    await ctxB.close();
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });

  test('reply button from thread navigates to compose with correct params', async ({ browser }: { browser: Browser }) => {
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
    await pageB.fill('#content', `Reply test ${Date.now()}`);
    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/);

    await pageA.goto('/inbox');
    await pageA.locator('[data-testid="message-row"]').first().waitFor({ timeout: 15_000 });
    await pageA.locator('[data-testid="message-row"]').first().click();
    await expect(pageA).toHaveURL(/thread\//);

    await pageA.locator('[data-testid="reply-btn"]').click();
    await expect(pageA).toHaveURL(/compose\?/, { timeout: 10_000 });
    // Compose URL should contain recipientId
    expect(pageA.url()).toContain('recipientId=');

    await cleanupTestUser(pageB);
    await ctxB.close();
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });

  test('unread badge count decreases when messages are read', async ({ browser }: { browser: Browser }) => {
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
    await pageB.fill('#content', `Unread test ${Date.now()}`);
    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/);

    // User A's inbox shows unread badge
    await pageA.goto('/inbox');
    await pageA.locator('[data-testid="message-row"]').first().waitFor({ timeout: 15_000 });
    await expect(pageA.locator('.unread-dot').first()).toBeVisible();

    // Open the thread (marks as read)
    await pageA.locator('[data-testid="message-row"]').first().click();
    await expect(pageA).toHaveURL(/thread\//);
    await pageA.waitForTimeout(1_500); // allow markAsRead to complete

    // Back to inbox — unread dot should be gone
    await pageA.goto('/inbox');
    await pageA.waitForTimeout(1_000);
    const unreadDots = await pageA.locator('.unread-dot').count();
    expect(unreadDots).toBe(0);

    await cleanupTestUser(pageB);
    await ctxB.close();
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });
});
