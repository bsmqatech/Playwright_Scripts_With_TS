
import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test('single selection select drop down test', async ({ page }) => {
    await page.goto('https://orangehrm.com/contact-sales');

    let selectVal: string[] = await page.getByRole('combobox', { name: 'Country' }).selectOption('India');//direct drop down value
    console.log(selectVal);
    //Role: combobox

    await page.waitForTimeout(2000);

    selectVal = await page.getByRole('combobox', { name: 'Country' }).selectOption({ label: 'Angola' }); //visible text
    console.log(selectVal);

    await page.waitForTimeout(2000);

    selectVal = await page.getByRole('combobox', { name: 'Country' }).selectOption({ value: 'Belgium' }); //value attribute
    console.log(selectVal);

    selectVal = await page.getByRole('combobox', { name: 'Country' }).selectOption({ index: 15 }); //using index
    console.log(selectVal);

    let curentVal = await page.getByRole('combobox', { name: 'Country' }).inputValue();
    console.log(curentVal);


    await page.pause();



});




test('multi selection select drop down test', async ({ page }) => {
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');
    //multiple attribute is present for the select tag.    
    //Role: listBox

    let selectedVal = await page.locator('[name="Month"]').selectOption(["January", "May", "November", "December"]);
    console.log(selectedVal);

    // await page.locator('[name="Month"]').selectOption(["January", "May", "November", "December"]);
    // let addedVal = await page.locator('[name="Month"]').inputValue();
    // console.log(addedVal);

    await page.pause();

});




// css:
//parent child
//footer a