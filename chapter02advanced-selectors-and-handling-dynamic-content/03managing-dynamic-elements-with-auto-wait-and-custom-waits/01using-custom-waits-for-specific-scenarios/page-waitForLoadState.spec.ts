import { test } from '@playwright/test';

test('waitForLoadState', async ({ page }) => {
    // รอจนไม่มี request ค้าง
    await page.waitForLoadState('networkidle');
})