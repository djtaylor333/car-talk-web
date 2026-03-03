/**
 * E2E — 02: Vehicle Profile
 * Tests: add a vehicle with static make/model dropdowns + color selection,
 *        see it on profile page.
 */
import { test, expect } from '@playwright/test';
import { createTestUser, cleanupTestUser, uniquePlate } from './helpers';

const PASSWORD = 'TestPass123!';

test.describe('Vehicle Profile', () => {
  test.beforeEach(async ({ page }) => {
    // createTestUser leaves us on /add-vehicle (just signed up, no vehicle yet)
    await createTestUser(page, false);
  });

  test.afterEach(async ({ page }) => {
    await cleanupTestUser(page);
  });

  test('make dropdown is populated from static vehicle data', async ({ page }) => {
    await page.goto('./add-vehicle');

    const makeSelect = page.locator('#make');
    // Wait for options to appear (static data populates synchronously on render)
    await page.waitForFunction(
      () => (document.querySelector('#make') as HTMLSelectElement)?.options.length > 1,
      { timeout: 10_000 }
    );
    const options = await makeSelect.locator('option').allTextContents();
    expect(options.some((o) => o === 'Toyota')).toBe(true);
    expect(options.some((o) => o === 'Honda')).toBe(true);
  });

  test('selecting make loads model dropdown', async ({ page }) => {
    await page.goto('./add-vehicle');

    await page.waitForFunction(
      () => (document.querySelector('#make') as HTMLSelectElement)?.options.length > 1,
      { timeout: 10_000 }
    );

    // Model dropdown should be disabled until a make is selected
    await expect(page.locator('#model')).toBeDisabled();

    await page.selectOption('#make', 'Toyota');

    // Model dropdown enables and populates
    await page.waitForFunction(
      () => !(document.querySelector('#model') as HTMLSelectElement)?.disabled
          && (document.querySelector('#model') as HTMLSelectElement)?.options.length > 1,
      { timeout: 10_000 }
    );
    const modelOptions = await page.locator('#model option').allTextContents();
    expect(modelOptions.some((o) => o === 'Camry')).toBe(true);
    expect(modelOptions.some((o) => o === 'Corolla')).toBe(true);
  });

  test('colour dropdown has many options', async ({ page }) => {
    await page.goto('./add-vehicle');

    await expect(page.locator('#color')).toBeVisible({ timeout: 10_000 });
    const colorOptions = await page.locator('#color option').allTextContents();
    // VEHICLE_COLORS has 12 entries
    expect(colorOptions.length).toBeGreaterThanOrEqual(10);
    expect(colorOptions).toContain('White');
    expect(colorOptions).toContain('Black');
    expect(colorOptions).toContain('Blue');
    expect(colorOptions).toContain('Red');
    expect(colorOptions).toContain('Silver');
  });

  test('adding a vehicle shows it on profile page', async ({ page }) => {
    await mockNHTSARoutes(page);
    const plate = uniquePlate();
    await page.goto('./add-vehicle');

    await page.fill('#plate', plate);
    await page.waitForFunction(
      () => (document.querySelector('#make') as HTMLSelectElement)?.options.length > 1,
      { timeout: 10_000 }
    );
    await page.selectOption('#make', 'Honda');
    await page.waitForFunction(
      () => !(document.querySelector('#model') as HTMLSelectElement)?.disabled
          && (document.querySelector('#model') as HTMLSelectElement)?.options.length > 1,
      { timeout: 10_000 }
    );
    await page.selectOption('#model', 'Civic');
    await page.selectOption('#color', 'Red');

    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/profile/, { timeout: 15_000 });

    // Vehicle card should appear on profile
    await expect(page.locator('.vehicle-card')).toContainText(plate);
  });

  test('submit button disabled until all fields filled', async ({ page }) => {
    await page.goto('./add-vehicle');

    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeDisabled();

    await page.fill('#plate', 'ABC123');
    await expect(submitBtn).toBeDisabled(); // still needs make + model + color

    await page.waitForFunction(
      () => (document.querySelector('#make') as HTMLSelectElement)?.options.length > 1,
      { timeout: 10_000 }
    );
    await page.selectOption('#make', 'Ford');
    await expect(submitBtn).toBeDisabled(); // still needs model

    await page.waitForFunction(
      () => !(document.querySelector('#model') as HTMLSelectElement)?.disabled
          && (document.querySelector('#model') as HTMLSelectElement)?.options.length > 1,
      { timeout: 10_000 }
    );
    await page.selectOption('#model', 'Mustang');
    await expect(submitBtn).toBeEnabled();
  });
});
