
import { Browser, BrowserContext, Locator, Page, chromium, expect, firefox, selectors, test, webkit } from '@playwright/test';

test('get all the links test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    //total links
    //<a href text>
    let allLinks: Locator[] = await page.locator('a[href]').all();
    console.log('total links:', allLinks.length);

    let totalLinks = await page.locator('a[href]').count();
    console.log('total links: ', totalLinks);

    let linksCount = await page.getByRole('link').count();
    console.log('total links with Role:', linksCount);
});

test('fetch all the links text test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    //total links
    //<a href text>
    let allLinks: Locator[] = await page.locator('a[href]').all();
    console.log('total links:', allLinks.length); //73

    for (let ele of allLinks) {
        let text = await ele.textContent();
        let href = await ele.getAttribute('href');
        console.log(text, " : ", href);
    }

});


test('fetch all the images test', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');

    //total links
    //<a href text>
    let allImages: Locator[] = await page.locator('img').all();
    console.log('Total images: ', allImages.length);

    for (let ele of allImages) {
        let altVal = await ele.getAttribute('alt');
        console.log(altVal);
    }
});


test('iterate links and click with break test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allLinks: Locator[] = await page.locator('a.list-group-item').all();
    console.log('total right panel links: ', allLinks.length); //13 --: 0 to 12

    for (let ele of allLinks) {
        await ele.highlight();
        let linkText = await ele.textContent();
        console.log(linkText);
        await page.waitForTimeout(1000);
        if (linkText === 'Recurring payments') {
            await ele.click();
            break;
        }
    }
    await page.pause();

});



test('iterate all the links text test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allPanelLinks: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(allPanelLinks);
    for (let ele of allPanelLinks) {
        console.log(ele);
    }

});


// robert.rodriguez614@test.com/pw123
// page.getByRole('heading', {level: 2})


test('get all headers test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('robert.rodriguez614@test.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('pw123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(2000);

    let allHeaders: string[] = await page.getByRole('heading', { level: 2 }).allInnerTexts();
    console.log('total headers: ', allHeaders.length);
    console.log(allHeaders);
});



//<div login>
//  <a myLogin>

//textContext() -- text of the element + text of the child element as well --> login myLogin
//innerText() -- text
