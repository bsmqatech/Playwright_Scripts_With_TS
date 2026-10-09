import test from "@playwright/test";

test("Alert handling Test", async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    await page.pause();



})

test("JS Alert handling Test", async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

   await page.getByRole('button', { name: 'Click for JS Alert' }).highlight();
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Click for JS Confirm' }).highlight();
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Click for JS Prompt' }).highlight();
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await page.waitForTimeout(3000);

    await page.pause();



})