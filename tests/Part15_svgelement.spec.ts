


//SVG: Scalable Vector Graphics

//xpath
//1. normal xpath will not be used
//2. special xpath using local-name() or name()
//css:
//1. regular css selectors


//normal xpath: //svg[@fill='none'] -- wont work

//special xpath: //*[local-name()='svg' and @fill='none']

//css: svg[fill='none'] -- will work

import { test, expect, Locator } from '@playwright/test';

//Browser ---> Page ---> elements
//--> shadow DOM --> elements --> click, fill 
//Auto piercing


test('SVG element test', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await page.pause();
    await page.getByPlaceholder('Search for Products, Brands and More').first().fill('MacBook Pro');

    //click on search icon using css:
    // await page
    //     .getByRole('button', { name: 'Search for Products, Brands and More' })
    //     .locator('svg[fill="none"]')
    //     .click();

    //click on search icon using special xpath:
    await page
        .getByRole('button', { name: 'Search for Products, Brands and More' }).first()
        .locator('//*[local-name()="svg"]')
        .click();

    await page.pause();


});




test('SVG graph element test', async ({ page }) => {

    await page.goto('https://petdiseasealerts.org/forecast-map');

    await page.waitForTimeout(5000);

    //let frame = page.frameLocator('//iframe[contains(@id,"map-instance")]');

    let frame = page.frameLocator('iframe[id*="map-instance"]');
    let allRegions = await frame.locator('g.region').all();

    console.log('total number of regions in USA: ', allRegions.length);

    for (let ele of allRegions) {
        await ele.hover({ force: true });
        let stateId = await ele.getAttribute('id');
        console.log(stateId);
        await page.waitForTimeout(500);
    }

});

