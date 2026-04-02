import {test} from '@playwright/test';

test('waitForURL',async({page})=>{
    await page.waitForURL('**/newpage.html');
})