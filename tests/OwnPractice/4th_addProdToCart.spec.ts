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
await page.getByRole('textbox', {name:'Username', exact:true}).fill('standard_user');
await page.getByRole('textbox', {name:'Password', exact:true}).fill('secret_sauce');
await page.getByRole('button', {name:'Login', exact:true}).click();

 let product = page.locator(".inventory_item").filter({hasText:'Sauce Labs Backpack'});
 await page.waitForTimeout(4000);
 await product.getByRole('button', {name: 'Add to cart'}).click();

 await page.waitForTimeout(3000);
 await expect(page.locator('.shopping_cart_link')).toHaveText('1');

}
);