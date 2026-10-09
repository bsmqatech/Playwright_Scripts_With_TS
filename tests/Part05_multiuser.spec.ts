
import { test, expect, BrowserContext, Page } from '@playwright/test';

test('multi user test', async ({ browser }) => {
    let ctx1: BrowserContext = await browser.newContext();//window1
    let ctx2: BrowserContext = await browser.newContext();//window2
    let ctx3: BrowserContext = await browser.newContext();//window3

    let page1: Page = await ctx1.newPage();
    let page2: Page = await ctx2.newPage();
    let page3: Page = await ctx3.newPage();

    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page1.locator('#input-email').fill('manish.wilson561@test.com');
    await page1.locator('#input-password').fill('pw123');
    await page1.locator('//input[@value="Login"]').click();


    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page2.locator('#input-email').fill('sasmita.brown419@test.com');
    await page2.locator('#input-password').fill('pw123');
    await page2.locator('//input[@value="Login"]').click();

    await page3.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page3.locator('#input-email').fill('bsm123@test.com');
    await page3.locator('#input-password').fill('bsm1234');
    await page3.locator('//input[@value="Login"]').click();


    //  await page1.pause();
    //  await page2.pause();
    //  await page3.pause();

    // await page1.close();
    // await page2.close();

    //await browser.close();
});