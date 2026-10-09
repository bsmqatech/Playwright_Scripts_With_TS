


import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test('title test', async ({ page }) => {
    await page.goto('https://www.google.com');
    let title = await page.title();
    console.log('title is:', title);
    let appUrl = page.url();
    console.log('app url:', appUrl);
    //await page.pause();
});

test('multiple browser test', async () => {

    let browser: Browser = await chromium.launch({ headless: false });//CFT
     //let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
     //let browser: Browser = await chromium.launch({ headless: false, channel: 'msedge' });

    //let browser: Browser = await chromium.launch({ headless: false, executablePath: '/Applications/Opera.app/Contents/MacOS/Opera' });
    // let browser: Browser = await chromium.launch({ headless: false, executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' });


    //let browser: Browser = await firefox.launch({ headless: false });

    // let browser: Browser = await webkit.launch({ headless: false });
    let page: Page = await browser.newPage();
    await page.goto('https://www.google.com');
    let title = await page.title();
    console.log('title is:', title);
    let appUrl = page.url();
    console.log('app url:', appUrl);

});
