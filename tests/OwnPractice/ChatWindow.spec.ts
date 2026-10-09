import { test, BrowserContext, Page } from "@playwright/test";

test('chat window test', async ({ browser }) => {


   let ctx1: BrowserContext = await browser.newContext();
   
   let ctx2: BrowserContext= await browser.newContext();


   let page1: Page = await ctx1.newPage();
   let page2: Page = await ctx2.newPage();



   await page1.goto("http://localhost:3000/");
   await page2.goto("http://localhost:3000/");

   await page1.locator('#usernameInput').fill('Jyoti');
   await page1.getByRole('button', { name: 'Join Chat' }).click();
   await page1.getByRole('textbox', { name: 'Type a message...' }).fill('Hi Masa, How are you ')
   await page1.getByRole('button', { name: 'Send' }).click();


  
   await page2.locator('#usernameInput').fill('Masa');
   await page2.getByRole('button', { name: 'Join Chat' }).click();
   await page2.getByRole('textbox', { name: 'Type a message...' }).fill('Hi Jyoti, I am good what about you? ')
   await page2.getByRole('button', { name: 'Send' }).click();
   
   await page1.pause();
   await page2.pause();

});