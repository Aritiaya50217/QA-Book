import { test, expect } from '@playwright/test';

test('Change article language to Deutsch', async ({ page }) => {
    // go to wikipedia page 
    await page.goto('https://en.wikipedia.org/wiki/Playwright_(software)');

    // click the change language
    await page.getByRole('button', { name: 'Go to an article in another' }).click();

    // click the Deutsch language link
    await page.getByRole('link', { name: 'Deutsch' }).click();

    // wait for the Deutsch wikipedia url
    await page.waitForURL('https://de.wikipedia.org/wiki/Playwright_(Software)', { timeout: 5000 });

    // assert that the URL is as expected
    expect(page.url()).toContain('de.wikipedia.org');

    console.log('Successfully navigated to German Wikipedia.')

    await page.pause();
})

