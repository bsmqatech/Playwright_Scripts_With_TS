import test, { expect } from "@playwright/test";
// Steps
// Enter an invalid username.
// Enter an invalid password.
// Click Login.
// Verify error message.
// Verify user remains on login page.
test('login with valid Cred test', async ({page})=>

{
await page.goto("https://www.saucedemo.com/");
await page.getByRole('textbox', {name:'Username', exact:true}).fill('invalid_user');
await page.getByRole('textbox', {name:'Password', exact:true}).fill('secret_sauce_Invalid');
await page.getByRole('button', {name:'Login', exact:true}).click();

//page.locator('[data-test= "error"]').
 await expect(page.locator('[data-test= "error"]')).toBeVisible();
 await page.waitForTimeout(3000);


}
);