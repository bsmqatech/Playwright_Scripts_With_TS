import test from "@playwright/test";

test('locatottest', async({page}) =>

{

await page.goto('https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26');
//await page.getByText('First Name', {exact: true}).highlight();
await page.getByText('First Name', {exact: true}).fill('Bhabani');
await page.getByPlaceholder ('Enter last name').fill('0987654321');
await page.getByText('Email Address', {exact: true}).fill('bsmtest@gmail.com');
await page.getByText('Password', {exact: true}).nth(0).fill('bsmtest@123');
await page.getByText('Website', {exact: true}).fill('bsmtest.com');
await page.getByRole('spinbutton', {name: 'Age', exact: true}).fill('16');
await page.getByRole('spinbutton', {name: 'Expected Salary (per annum)', exact: true}).fill('300000');
await page.locator('[data-testid="input-dob"]').highlight();
await page.getByText('Preferred Meeting Time', {exact: true}).highlight();
await page.getByText('Schedule Interview', {exact: true}).highlight();
await page.getByRole('checkbox', {name: 'Cypress', exact: true}).click();
await page.getByRole('checkbox', {name: 'Appium', exact: true}).click();
await page.getByRole('radio', {name: 'Java', exact: true}).click();
await page.getByRole('radio', {name: 'Male', exact: true}).click();
await page.getByRole('checkbox', {name: 'I agree to the Terms & Conditions', exact: true}).click();
let pageTitle: String = await page.title();
console.log('********** Page Title = ' + pageTitle)
await page.waitForTimeout(20000);


});