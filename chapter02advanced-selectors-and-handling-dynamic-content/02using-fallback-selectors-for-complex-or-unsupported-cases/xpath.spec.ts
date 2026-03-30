import { test, expect } from '@playwright/test';

test('XPath selectors', async ({ page }) => {
    await page.locator('//button[@type="submit"]').click();
    // Select a div containing specific text
    await page.locator('//div[contains(text(), "Welcome")]').click();

    // Select a button that is a child of a specific form
    await page.locator('//form[@id="login-form"]//button').click();

    await page.locator('xpath=//button[@type="submit"]').click();
    
})