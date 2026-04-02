import {selectors, test} from '@playwright/test';

test('waitForFunction',async({page})=>{
    await page.waitForFunction('document.querySelector(".my-element") !==null');
})

// รอจนกว่า element มีข้อความเฉพาะ
test('querySelector',async({page})=>{
    await page.waitForFunction(()=>document.querySelector('#status')?.textContent ==='Completed');
})

// รอจนกว่าจำนวน element จะมากกว่า 5
test('length > 5' , async({page})=>{
    await page.waitForFunction((selector)=>document.querySelectorAll(selector).length > 5 ,'#items');
})


// ตั้ง timeout หรือ polling interval
test('timeout', async({page})=>{
    await page.waitForFunction(()=>(window as any).somValue === true,undefined,{timeout:10000,polling:200}) // รอสูงสุด 10 วินาที, poll ทุก 200ms
})