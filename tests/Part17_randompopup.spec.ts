


import { test, expect, Locator, webkit } from '@playwright/test';


test('kill random popups test', async ({ page }) => {

    await page.addLocatorHandler(
        page.getByRole('button', { name: 'Allow all' }),
        async (allowAllBtn) => {
            await allowAllBtn.click();
            console.log('Cookie Banner is killed....');
        }
    );


    await page.goto('https://orangehrm.com/contact-sales');

    

    await page.getByRole('textbox', { name: 'Full Name' }).fill('Naveen');

    await page.pause();

});


test('launch spicejet', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');


    await page.pause();

});
