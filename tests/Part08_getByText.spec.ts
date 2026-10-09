





import { test, expect, Locator } from '@playwright/test';

test('locators text test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');


    let header = await page.getByText('Register Account', { exact: true }).textContent();
    console.log(header);

    let headerValue = await page.getByRole('heading', { name: 'New Customer', exact: true }).first().textContent();
    console.log(headerValue);

    //we will use getByText: 
    //for paragraphs, strong, span, div

    await page.waitForTimeout(5000);
    
});
