

import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test.use({ storageState: './opencartstate.json' });

test('launch cart page test without login', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
    //await page.goto('https://www.flipkart.com/');
    await page.pause();
    //page
});


