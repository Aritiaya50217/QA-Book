import {test} from '@playwright/test';

test('alerts and confirmation dialogs', async ({ page }) => {
    page.on('dialog', async dialog => {
        console.log(`Dialog type: ${dialog.type()},message:${dialog.message()}`);
        if (dialog.type() === 'alert') {
            await dialog.accept(); // กด OK
        } else if (dialog.type() === 'confirm') {
            await dialog.dismiss(); // กด Cancel
        } else if (dialog.type() === 'prompt') {
            await dialog.accept('My input'); // กรอกข้อความแล้วกด OK
        }
    });

    await page.goto(' https://testpages.eviltester.com/styled/alerts/alerttest.html');
    await page.getByRole('button', { name: 'Show alert box' }).click();
    await page.getByRole('button', { name: 'Show confirm box' }).click();
});