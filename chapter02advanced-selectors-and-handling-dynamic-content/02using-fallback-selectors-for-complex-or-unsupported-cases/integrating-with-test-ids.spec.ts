import {test,expect} from '@playwright/test';

test('integrating', async({page})=>{
    // HTML: <button data-testid="submit-button">Submit</button>
    await page.getByTestId('submit-button').click();
})
