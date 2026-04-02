import {test} from '@playwright/test';

test('waitForTimeout',async({page})=>{
    // หยุด test 3 วินาที
    await page.waitForTimeout(3000);
})