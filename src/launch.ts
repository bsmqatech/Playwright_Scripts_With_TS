import { Browser, chromium, firefox, Page, webkit } from "playwright/test";

//browser ---> page ---> url ---> locator --- close
// (async () => {

//     //open browser:
//     let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
//     let page: Page = await browser.newPage();
//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
//     let title = await page.title();
//     console.log('page title: ', title);
//     console.log(page.url());
//     browser.close();

// })();



type BrowserName = 'chrome' | 'edge' | 'firefox' | 'webkit';

async function launchBrowser(browserName: BrowserName) {
    console.log('browser name: ', browserName);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            return await chromium.launch({ headless: false, channel: 'chrome' });
        case 'edge':
            return await chromium.launch({ headless: false, channel: 'msedge' });
        case 'firefox':
            return await firefox.launch({ headless: false });
        case 'webkit':
            return await webkit.launch({ headless: false });
        default:
            console.log('invalid browser....', browserName);
            throw new Error(`invalid browser:, ${browserName}`);
    }
}

//calling this :
let browser: Browser = await launchBrowser('chrome');
let page: Page = await browser.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
let title = await page.title();
console.log('page title: ', title);
console.log(page.url());
browser.close();