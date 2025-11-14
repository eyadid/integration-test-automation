// @ts-check
import { test, expect } from '@playwright/test';

test('everyset has title', async ({ page }) => {
  await page.goto('https://https://www.everyset.com//');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The source of truth for background on every set/);
});
