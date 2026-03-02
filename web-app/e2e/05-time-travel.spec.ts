/**
 * E2E — 05: Message Expiry (Time Travel)
 *
 * Strategy: User B sends a real message to User A. User A sees it in their inbox.
 * We then override `Date` in the browser to simulate being 31 days in the future
 * (beyond the 30-day RETENTION_DAYS window). Navigating back to the inbox
 * re-creates the Firestore subscription, and the client-side expiry filter
 * (in subscribeToInbox) should then exclude the message from the rendered list.
 */
import { test, expect, Browser } from '@playwright/test';
import { createTestUser, cleanupTestUser, signInViaUI } from './helpers';

const PASSWORD = 'TestPass123!';

test.describe('Message expiry (time travel)', () => {
  test('messages older than 30 days vanish from inbox', async ({ browser }: { browser: Browser }) => {
    // ── Setup: two users, B sends a message to A ───────────────────────────
    const ctxA = await browser.newContext();
    const pageA = await ctxA.newPage();
    const userA = await createTestUser(pageA, true);

    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    await createTestUser(pageB, true);

    // User B sends a message to User A
    await pageB.goto('/search');
    await pageB.fill('input[type="text"]', userA.plate!);
    await pageB.click('button[type="submit"]');
    await pageB.getByRole('button', { name: /send message/i }).waitFor({ timeout: 15_000 });
    await pageB.getByRole('button', { name: /send message/i }).click();
    await pageB.waitForURL(/compose/);

    const msgText = `Time travel test ${Date.now()}`;
    await pageB.fill('#content', msgText);
    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/);

    // ── User A sees the message in their inbox ─────────────────────────────
    await pageA.goto('/inbox');
    await expect(pageA.locator('[data-testid="message-row"]').first())
      .toContainText(msgText.slice(0, 40), { timeout: 15_000 });

    // ── Time travel: advance browser Date to 31 days in the future ─────────
    await pageA.evaluate(() => {
      const DAYS = 31;
      const futureMs = Date.now() + DAYS * 24 * 60 * 60 * 1000;
      const OrigDate = Date;

      // @ts-ignore – override global Date for this page context
      globalThis.Date = class MockDate extends OrigDate {
        constructor(...args: ConstructorParameters<typeof OrigDate>) {
          if (args.length === 0) {
            super(futureMs);
          } else {
            super(...(args as [number]));
          }
        }
        static now(): number { return futureMs; }
        static parse(s: string) { return OrigDate.parse(s); }
        static UTC(...args: Parameters<typeof OrigDate.UTC>) {
          return OrigDate.UTC(...args);
        }
      } as unknown as typeof Date;
    });

    // ── Re-navigate to inbox (re-creates Firestore subscription with mocked Date)
    await pageA.goto('/search'); // navigate away first
    await pageA.goto('/inbox');  // come back → re-subscribes

    // The message should no longer be visible (expired 1 day ago)
    // Allow up to 8s for Firestore snapshot to arrive and be filtered
    await pageA.waitForTimeout(3_000);
    const msgRows = await pageA.locator('[data-testid="message-row"]').all();
    for (const row of msgRows) {
      const text = await row.textContent();
      expect(text).not.toContain(msgText.slice(0, 30));
    }

    // ── Cleanup ────────────────────────────────────────────────────────────
    await cleanupTestUser(pageB);
    await ctxB.close();

    // Restore real Date before doing Firebase auth operations
    await pageA.evaluate(() => {
      // @ts-ignore
      delete globalThis.Date;
    });
    // Re-sign in as userA with real Date to clean up
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });

  test('messages within 30 days remain visible', async ({ browser }: { browser: Browser }) => {
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

    const msgText = `Fresh message ${Date.now()}`;
    await pageB.fill('#content', msgText);
    await pageB.locator('[data-testid="send-btn"]').click();
    await pageB.waitForURL(/inbox/);

    // Time travel to 29 days (within retention window)
    await pageA.goto('/inbox');
    await pageA.evaluate(() => {
      const futureMs = Date.now() + 29 * 24 * 60 * 60 * 1000;
      const OrigDate = Date;
      // @ts-ignore
      globalThis.Date = class MockDate extends OrigDate {
        constructor(...args: ConstructorParameters<typeof OrigDate>) {
          if (args.length === 0) { super(futureMs); } else { super(...(args as [number])); }
        }
        static now() { return futureMs; }
        static parse(s: string) { return OrigDate.parse(s); }
        static UTC(...args: Parameters<typeof OrigDate.UTC>) { return OrigDate.UTC(...args); }
      } as unknown as typeof Date;
    });

    await pageA.goto('/search');
    await pageA.goto('/inbox');
    await pageA.waitForTimeout(3_000);

    // Message should STILL be visible (not yet expired)
    await expect(pageA.locator('[data-testid="message-row"]').first())
      .toContainText(msgText.slice(0, 30), { timeout: 10_000 });

    await cleanupTestUser(pageB);
    await ctxB.close();
    await signInViaUI(pageA, userA.email, PASSWORD);
    await cleanupTestUser(pageA);
    await ctxA.close();
  });
});
