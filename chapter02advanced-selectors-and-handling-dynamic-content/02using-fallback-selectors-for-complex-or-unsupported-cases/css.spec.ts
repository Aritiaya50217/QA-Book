import { test, expect } from '@playwright/test';

test('fallback with CSS selector', async ({ page }) => {
  await page.goto('https://example.com');

  // ใช้ CSS เมื่อไม่มี accessibility support
  await page.locator('.login-form input[name="email"]').fill('test@test.com');
  await page.locator('.login-form button.submit-btn').click();
});