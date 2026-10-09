
//parent --> child --> child

import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test('chain locator test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // locator('form').getByRole('textbox', { name: 'First Name' })
    // locator('#column-right').getByRole('link', { name: 'Forgotten Password' })
    // locator('form').getByRole('link', { name: 'Forgotten Password' })

    await page
        .locator('form')
        .getByRole('textbox', { name: 'First Name' })
        .fill('Naveen Automation Labs');

    await page.waitForTimeout(2000);

    await page
        .locator('#column-right')
        .getByRole('link', { name: 'Forgotten Password' })
        .click();

    await page.pause();

});



//td[text()='GUI']/preceding-sibling::td/input[@type='checkbox'] --xpath with xpath axes
//td[text()='GUI']/following-sibling::td/input[@value='Delete']


test('webtable handing test', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/');
    await page
        .locator('#table01')
        .locator('tr')
        .filter({ hasText: 'GUI' })
        .getByRole('checkbox')
        .click();

    await page
        .locator('#table01')
        .locator('tr')
        .filter({ hasText: 'GUI' })
        .getByRole('button', { name: 'Delete' })
        .click();


    let officeName = await page.locator('#table02').locator('tr').filter({ hasText: 'Ashton Cox' }).locator('td').nth(2).innerText();
    console.log(officeName);

    let colCount = await page.locator('#table02 tr th').count();
    console.log(colCount);

    let rowCount = await page.locator('#table02 tr').count() - 1;
    console.log(rowCount);

    await page.pause();

});

//locator('table.ci-scorecard-table').locator('tr').filter({hasText: 'Brandon King'}).first().locator('td').nth(1).locator('span').last()
//locator('table.ci-scorecard-table').locator('tr').filter({hasText: 'Kavem Hodge'}).first().locator('td').nth(1).locator('span').last()


test('fetch data from webtable test', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_tables.asp');

    let fullData: string[] = await page.locator('table').first().locator('tr').allInnerTexts();
    for (let e of fullData) {
        console.log(e);
        console.log("==================");
    }

    await page.pause();

});

//innertText -- 
//textContext -- parent + child+ extra white space ---> text


test('select all checkboxes in webtable test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    let checkboxes = await page.locator('table#resultTable tbody tr td').getByRole('checkbox').all();

    for (let ele of checkboxes) {
        await ele.click();
        await page.waitForTimeout(2000);
    }

    // for (let i = 1; i < checkboxes.length; i++) {
    //     await checkboxes[i].click();
    //     await page.waitForTimeout(1000);
    // }

    await page.pause();

});




test('get tables data from cricinfo webtable test', async ({ page }) => {
    await page.goto('https://www.cricinfo.com/series/the-hundred-men-s-competition-2026-1521176/trent-rockets-men-vs-birmingham-phoenix-men-22nd-match-1521252/full-scorecard');

    let playerName = 'Rehan Ahmed';

    let wicketTakerName = await page.locator('table.ci-scorecard-table')
        .first().locator('tr')
        .filter({ hasText: `${playerName}` })
        .first()
        .locator('td')
        .nth(1)
        .locator('span span').innerText();

    console.log(wicketTakerName);

    console.log("=================");

    let playerScoreData = await page.locator('table.ci-scorecard-table')
        .first().locator('tr')
        .filter({ hasText: 'Will Smeed' })
        .first()
        .locator('td').all();

    for (let ele of playerScoreData) {
        let info = await ele.textContent();
        console.log(info);
    }


    await page.pause();

});