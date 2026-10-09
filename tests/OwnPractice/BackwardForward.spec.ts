import test from "@playwright/test";

test("backwordForward test", async ({page})=>{

await page.goto("https://naveenautomationlabs.com/opencart/");
console.log(await page.title());

await page.waitForTimeout(3000);

await page.goto("https://www.flipkart.com/");
console.log(await page.title());



await page.goBack();
await page.waitForTimeout(3000);
console.log(await page.title());


await page.goForward();
await page.waitForTimeout(3000);
console.log(await page.title());



await page.goBack();
await page.waitForTimeout(3000);
console.log(await page.title());


await page.goForward();
await page.waitForTimeout(3000);
console.log(await page.title());








})