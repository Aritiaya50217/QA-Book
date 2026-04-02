import{test} from '@playwright/test';

test('waitForEvent',async({page})=>{
    await page.waitForEvent('popup');
})