import { test, expect } from '@playwright/test';

test('text based selectors', async ({ page }) => {
    await expect(page.getByText('Welcome, John')).toBeVisible();

    // การจับคู่แบบตรงตัว (exact matching) หรือการใช้ regular expressions
    await page.getByText('Welcome, John', { exact: true }).click();

    // การใช้ regular expressions
    await page.getByText(/welcome, [A-Za-z]+$/i).click();

    // byRole
    await page.getByRole('button').filter({hasText:'Submit'}).click();
})
