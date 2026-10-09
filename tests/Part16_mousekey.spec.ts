import { test, expect, Locator, webkit } from '@playwright/test';


test('Right Click test', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    //right click or content click on context menu:

    await page.getByText('right click me', { exact: true }).click({ button: 'right' });

    await page.waitForTimeout(3000);

    await page.getByText('Copy', { exact: true }).highlight();
    await page.waitForTimeout(3000);
    await page.getByText('Copy', { exact: true }).click();

    await page.pause();


});


test('Drag and Drop test', async ({ page }) => {

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    let source = page.locator('#draggable');
    let target = page.locator('#droppable');

    await source.dragTo(target);

    await page.pause();

});


test('level 2 menu & sub mneu handling test', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');

    await page.getByText('Travel Policies', { exact: true }).hover();//L1

    //wait for the sub menu element:
    await page.getByText('Passenger Rights', { exact: true }).waitFor({ state: 'visible' });

    await page.getByText('Passenger Rights', { exact: true }).click();//L2

    await page.pause();

});



test('level 4 menu & sub menu handling test', async ({ page }) => {

    await page.goto('https://www.bigbasket.com/');

    await page.getByText('Shop by', { exact: true }).last().click(); //L1
    await page.waitForTimeout(2000);

    await page.locator('[id*="headlessui-menu-items"]').getByRole('link', { name: 'Beverages' }).last().hover(); //L2

    await page.getByRole('link', { name: 'Tea', exact: true }).hover(); //L3

    await page.getByRole('link', { name: 'Green Tea' }).click(); //L4

    await page.pause();

});



test('Best Buy level 4 menu & sub menu handling test', async ({ page }) => {
    await page.goto('https://www.bestbuy.com/?intl=nosplash');

    await page.getByText('Shop', { exact: true }).nth(0).click(); //L1
    await page.locator('[data-testid="menu-level1-container"]').getByRole('button', { name: 'Video Games' }).click();
    await page.locator('[data-testid="menu-level2-container"]').getByRole('button', { name: 'XBOX' }).click();
    await page.getByRole('link', { name: 'Explore XBOX' }).click();

    await page.pause();

});


// test('sample test', async ({ page }) => {

//     await page.goto('https://www.sreenidhirajakrishnan.com');
//     await page.waitForTimeout(3000);

//     await page.getByRole('button', { name: 'Interview Prep' }).hover();
//     await page.waitForTimeout(2000);

//     let allLinks: Locator[] = await page.locator('div.absolute a').all();

//     console.log(allLinks.length);


//     for (let ele of allLinks) {
//         await ele.click();
//         console.log(await page.title());
//         await page.waitForTimeout(1000);
//         await page.getByRole('button', { name: 'Interview Prep' }).hover();
//         allLinks = await page.locator('div.absolute a').all();
//     }


// });




test('keyboard enter test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let searchBox = page.getByRole('textbox', { name: 'Search' });
    await searchBox.fill('Macbook');

    //Press Enter from the keyboard:
    await searchBox.press('Enter');

    await page.pause();

});


test('Keyboard Tab Sequence with Accessibility Form Submission test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', { name: '* First Name' });
    await firstName.fill('Zain');

    await page.keyboard.press('Tab');
    await page.keyboard.type('Automation');//LN

    await page.keyboard.press('Tab');
    await page.keyboard.type('zainautomation123@gmail.com');//email

    await page.keyboard.press('Tab');
    await page.keyboard.type('9890987876');//tel

    await page.keyboard.press('Tab');
    await page.keyboard.type('zain@123');//pwd

    await page.keyboard.press('Tab');
    await page.keyboard.type('zain@123');//confirm pwd

    await page.keyboard.press('Tab');//sub -- no
    await page.keyboard.press('ArrowRight');//sub -- yes

    await page.keyboard.press('Tab'); //privacy policy

    await page.keyboard.press('Tab'); //checkbox
    await page.keyboard.press('Space');//click on checkbox

    await page.keyboard.press('Enter');//press enter -- submit the form

    await page.pause();

});



test('keyboard copy paste test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', { name: '* First Name' });
    await firstName.fill('ZainAutomation');

    //Control + A
    //Control + C
    //Control + V

    await firstName.press('ControlOrMeta+A');
    await firstName.press('ControlOrMeta+C');

    let lastName = page.getByRole('textbox', { name: '* Last Name' });
    lastName.press('ControlOrMeta+V');

    await page.waitForTimeout(3000);

    await firstName.press('ControlOrMeta+A');
    await firstName.press('Backspace');

    //Hard Refresh the page: control+shift+R
    //await page.keyboard.press('ControlOrMeta+Shift+R');

    //open a new tab in new window:
    await page.getByRole('link', { name: 'Forgotten Password' }).click({ modifiers: ['ControlOrMeta'] });

    await page.pause();

});
