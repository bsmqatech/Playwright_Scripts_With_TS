import test, { expect } from "@playwright/test";
// Steps
// Open SauceDemo.
// Enter username.
// Enter password.
// Click Login.
// Verify Products page is displayed.
// Verify URL contains /inventory.html.
test('login with valid Cred test', async ({page})=>

{
await page.goto("https://www.saucedemo.com/");
await page.getByRole('textbox', {name:'Username', exact:true}).fill('standard_user');
await page.getByRole('textbox', {name:'Password', exact:true}).fill('secret_sauce');
await page.getByRole('button', {name:'Login', exact:true}).click();

let pageTitle : boolean = await page.locator('.title').isVisible()
console.log(pageTitle);
//await page.waitForTimeout(2000);
await expect(page).toHaveURL(/inventory.html/);
//await page.waitForTimeout(6000);


}
);