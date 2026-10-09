import test, { expect } from "@playwright/test";




// URL:
// https://www.saucedemo.com/

// Steps
// Navigate to SauceDemo.
// Verify the page title.
// Verify the username field is visible.
// Verify the password field is visible.
// Verify the Login button is visible.
// Verify the URL.

test('verify page title test', async({page}) =>


{
   await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
   await expect(page).toHaveTitle('Swag Labs');
//    let title = await page.title();
//    console.log('Page Title :' + title);
   let usernameVisibility = await page.getByRole('textbox', {name: 'Username', exact: true});
   await expect(usernameVisibility).toBeVisible();
   let passwordVisibility = await page.getByRole('textbox', {name: 'Password', exact: true});
   await expect(passwordVisibility).toBeVisible();
   let LogBtnVisibility = await page.getByRole('button', {name: 'Login', exact: true});
   await expect(LogBtnVisibility).toBeVisible();
   //page.url();
   await expect(page).toHaveURL('https://www.saucedemo.com/?utm_source=chatgpt.com');
   //await page.waitForTimeout(6000);
   
   //await page.pause();

})