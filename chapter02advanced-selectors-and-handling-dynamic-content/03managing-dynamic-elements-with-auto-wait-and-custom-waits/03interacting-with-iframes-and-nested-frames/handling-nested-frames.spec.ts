import {expect, test} from '@playwright/test';

test('nested frames',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/nested_frames');

// locate the top frame (which contains the nested frame)
const topFrame = page.frameLocator('frame[name="frame-top"]');

// loacate the frame nested inside the 'topFrame'
const leftFrame = topFrame.frameLocator('frame[name="frame-left"]');
const middleFrame = topFrame.frameLocator('frame[name="frame-middle"]');
const rightFrame = topFrame.frameLocator('frame[name="frame-right"]');

// locate the buttom frame (which is at the same level as 'topFrame')
const bottomFrame = page.frameLocator('frame[name="frame-bottom"]');

// assert the text content of each frame 
await expect(leftFrame.locator('body')).toHaveText('LEFT');
await expect(middleFrame.locator('body')).toHaveText('MIDDLE');
await expect(rightFrame.locator('body')).toHaveText('RIGHT');
await expect(bottomFrame.locator('body')).toHaveText('BOTTOM');
});