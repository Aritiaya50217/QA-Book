import { test, expect } from '@playwright/test';

test('homepage has Playwright in title',async({page})=>{
    // navigate to the playwright homepage 
    await page.goto('https://playwright.dev');

    // fetch the title of the page
    const title = await page.title();

    // assert that the title contains 'Playwright'
    expect(title).toContain('Playwright');
})