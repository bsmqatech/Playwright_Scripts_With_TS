

//1. Auto waiting process:
//Actions: click, fill, check, hover, etc... --> automatically wait for the element: 
//Actionalibility check:
//1. Attached to the DOM
//2. Visible on the page
//3. Stable (not animating)
//4. Enabled
//5. All the events are also completed
//https://playwright.dev/docs/actionability


import { Page, chromium, expect, firefox, selectors, test, webkit } from '@playwright/test';

test('wait test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // await page.getByRole('button', { name: 'continue' }).click();

    //explicit wait : dynamic wait: 
    //1. expect wait(web assertions wait): default time: 5000 ms
    //expect(page.getByText('First Name must be between 1 and 32 characters!', { exact: true })).toBeVisible();

    //2. wait for URL:
    await page.waitForURL(/route=account\/register/, { timeout: 5000 }); //5 secs

    //3. wait for event: dialog, filechoose, download, page

    //4. static wait: pause for 5 secs: 
    //await page.waitForTimeout(10000); //not a good practice -- debugging purpoose

    //5. wait for the element:explicitly waiting for the element:
    //5.1: waitForSelector() ---> legacy wait -- Discouraged by PW -- v1.9
    //this wont work for the getBy* methods
    //this will work only with css/xpath/text
    //state: 2 : attached , visible
    //await (await page.waitForSelector('#input-firstname123', { state: 'visible', timeout: 5000 })).fill('naveen');

    //5.2: waitFor(): v1.16:
    //state: 4 : attached , visible, hidden, detached
    //await page.locator('#input-firstname').waitFor({ state: 'visible', timeout: 5000 });
    // await page.locator('#input-firstname123').fill('Naveen');
    //await page.getByRole('textbox', { name: '* Last Name' }).waitFor({ state: 'visible', timeout: 5000 });

    //timeout=30 --> navigationtimeout=10 --> timeout=5 secs
    await page.locator('#input-firstname123').fill('Naveen', { timeout: 5000 });

    console.log('....END....');

});