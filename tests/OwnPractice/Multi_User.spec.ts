import  { test, BrowserContext, Page } from "@playwright/test";

test("multi User Test" , async ({browser})=>{

   let ctx1: BrowserContext = await browser.newContext();
   let ctx2: BrowserContext= await browser.newContext();


   let page1: Page = await ctx1.newPage();
   let page2: Page = await ctx1.newPage();

  await page1.goto("https://www.saucedemo.com/");
  await page1.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page1.getByPlaceholder('Password').fill('secret_sauce');
  await page1.getByRole('button', { name: 'Login' }).click();
 
  //await page1.waitForTimeout(10000);

  await page2.goto("https://www.saucedemo.com/");
  await page2.getByRole('textbox', { name: 'Username' }).fill('visual_user');
  await page2.getByPlaceholder('Password').fill('secret_sauce');
  await page2.getByRole('button', { name: 'Login' }).click();
   
  
   await page1.pause();
   await page2.pause();
   

   

    

})