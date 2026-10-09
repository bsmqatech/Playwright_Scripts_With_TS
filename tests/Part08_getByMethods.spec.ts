


import { test, expect, Locator } from '@playwright/test';

test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //it will work only for input fields
    await page.getByLabel('E-Mail Address').fill('naveen@gmail.com');
    await page.getByLabel('Password').fill('naveen@123');

    await page.waitForTimeout(5000);

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //text fields: 
    await page.getByPlaceholder('First Name').fill('Naveen Automation Labs');
    await page.getByPlaceholder('Telephone').fill('878787878778');

    //for images:
    //await page.getByAltText('naveenopencart').highlight();
    await page.getByRole('img', { name: 'naveenopencart' }).click();


    await page.waitForTimeout(5000);
});


