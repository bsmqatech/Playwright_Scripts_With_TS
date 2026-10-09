


import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test('single file upload test', async ({ page }) => {

    //it should have type="file" attribute
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
    await page.locator('#single-file').setInputFiles('C:/Users/mishr/Downloads/testUpload.txt');

    await page.waitForTimeout(2000);

    await page.locator('#single-file').setInputFiles([]); //remove the file

    await page.pause();

});

test('multiple files upload test', async ({ page }) => {

    //it should have type="file" and multiple attribute
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    await page.locator('#multi-file').setInputFiles([
        '/Users/naveenautomationlabs/Downloads/normalfiles/v8-architecture.html',
        '/Users/naveenautomationlabs/Downloads/normalfiles/WhatisJavaScript.pdf',
        '/Users/naveenautomationlabs/Downloads/normalfiles/locators.md'
    ]);

    await page.waitForTimeout(5000);

    await page.locator('#multi-file').setInputFiles([]);

    await page.pause();

});

test('file upload when type file is not present test', async ({ page }) => {

    //file upload
    //single/multiple files
    //type = file is not there.....its a button with no type=file attribute

    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    let [fileUpload] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#custom-upload-btn').click(),
    ]);

    await fileUpload.setFiles([
        '/Users/naveenautomationlabs/Downloads/normalfiles/v8-architecture.html',
        '/Users/naveenautomationlabs/Downloads/normalfiles/WhatisJavaScript.pdf',
        '/Users/naveenautomationlabs/Downloads/normalfiles/locators.md'
    ]);

    await page.pause();

    await fileUpload.setFiles([
        '/Users/naveenautomationlabs/Downloads/normalfiles/v8-architecture.html',
        '/Users/naveenautomationlabs/Downloads/normalfiles/WhatisJavaScript.pdf',
    ]);

    await page.pause();

    await fileUpload.setFiles([]);

    await page.pause();

});


test('TC_PrintBallerDetails', async ({ page }) => {
    await page.goto("https://www.cricinfo.com/series/afghanistan-in-ireland-2026-1528534/ireland-vs-afghanistan-3rd-odi-1528552/full-scorecard")
    await page.waitForTimeout(3000);
    await BowlerDet(page);

})

async function BowlerDet(page: Page) {
    const bowlerRows = page.locator('table')
        .filter({ hasText: 'BOWLING' })
        .locator('tbody tr')
        .filter({ has: page.locator('a[href*="cricketers"]') });

    const rows = await bowlerRows.all();

    for (const row of rows) {
        const data = await row.innerText();
        console.log(data.trim());
        console.log('=========');
    }
}