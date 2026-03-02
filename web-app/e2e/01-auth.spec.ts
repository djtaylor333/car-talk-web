/**
 * E2E — 01: Authentication
 * Tests: sign up with display name, log in, log out.
 */
import { test, expect } from '@playwright/test';
import { signUpViaUI, signInViaUI, signOutViaUI, cleanupTestUser, uniqueEmail } from './helpers';

const PASSWORD = 'TestPass123!';

test.describe('Authentication', () => {
  test('signup creates an account and redirects to add-vehicle', async ({ page }) => {
    const email = uniqueEmail();

    await page.goto('./signup');

    // All three fields visible
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('a[href*="login"]')).toContainText(/sign in/i);

    await page.fill('#name', 'Road Warrior');
    await page.fill('#email', email);
    await page.fill('#password', PASSWORD);

    // Button is enabled once fields are filled
    const btn = page.locator('button[type="submit"]');
    await expect(btn).toBeEnabled();

    await btn.click();
    // After signup → add-vehicle page
    await expect(page).toHaveURL(/add-vehicle/, { timeout: 15_000 });
    await expect(page.locator('h1')).toContainText(/add vehicle/i);

    await cleanupTestUser(page);
  });

  test('login page has link to signup', async ({ page }) => {
    await page.goto('./login');
    await expect(page.locator('a[href*="signup"]')).toContainText(/sign up/i);
  });

  test('sign in with valid credentials navigates to inbox or search', async ({ page }) => {
    const email = uniqueEmail();
    // First create the account
    await signUpViaUI(page, email, PASSWORD);
    // Sign out via helper (avoids bare import() in eval)
    await signOutViaUI(page);

    await signInViaUI(page, email, PASSWORD);
    await expect(page).toHaveURL(/inbox|search|add-vehicle/);

    await cleanupTestUser(page);
  });

  test('wrong password shows error', async ({ page }) => {
    await page.goto('./login');
    await page.fill('#email', 'notreal@example.com');
    await page.fill('#password', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('[role="alert"]')).toBeVisible({ timeout: 10_000 });
  });

  test('sign out returns to login page', async ({ page }) => {
    const email = uniqueEmail();
    await signUpViaUI(page, email, PASSWORD);
    // Use helper — avoids full page.goto reload that hangs Firestore reconnect
    await signOutViaUI(page);
    await expect(page).toHaveURL(/login/, { timeout: 10_000 });

    // Re-sign in to delete the test user
    await signInViaUI(page, email, PASSWORD);
    await cleanupTestUser(page);
  });
});
