import { Browser, chromium, Page } from "@playwright/test";

(async ()=>{
//
let browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
let page: Page = await browser.newPage();
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=common/home");
let title = await page.title();
console.log(title);
console.log(page.url());
await browser.close();
})();