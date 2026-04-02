import {test} from '@playwright/test';

test('waitForSelector',async({page})=>{
    await page.waitForSelector('#submit-button',{state:'visible',timeout:5000});
})