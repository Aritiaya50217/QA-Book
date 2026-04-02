import { expect, test } from '@playwright/test';

test('Interact with iframe', async ({ page }) => {
    await page.goto('https://testpages.eviltester.com/styled/iframes-test.html');

    // interact with elements inside the iframe
    await expect(page.locator('#thedynamichtml').contentFrame().getByRole('heading', { name: 'iFrame' })).toBeVisible();
});