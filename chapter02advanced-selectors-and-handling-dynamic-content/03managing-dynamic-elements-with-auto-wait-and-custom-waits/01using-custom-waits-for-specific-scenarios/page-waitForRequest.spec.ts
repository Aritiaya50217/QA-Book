import {test , expect} from '@playwright/test';

test('Using custom waits for specific scenarios',async({page})=>{
    await page.waitForRequest('https://example.com/api/data');
})