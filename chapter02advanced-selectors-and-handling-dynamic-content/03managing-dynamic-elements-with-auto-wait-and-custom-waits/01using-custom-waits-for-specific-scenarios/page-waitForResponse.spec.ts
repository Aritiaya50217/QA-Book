import { test } from '@playwright/test';

test('wait for response', async ({ page }) => {
   await page.goto('https://example.com');
    await page.waitForResponse(response => response.url().includes('api/orders') && response.status() === 200);
})