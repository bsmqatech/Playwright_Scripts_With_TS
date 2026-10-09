


import { Page, chromium, expect, firefox, selectors, test, webkit } from '@playwright/test';

// test.use({
//     viewport: { width: 440, height: 956 }
// });

test('expect assertion test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.pause();

});


test('my assertion test', async ({ page }) => {

    page.setViewportSize({ width: 400, height: 800 });

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.pause();

});