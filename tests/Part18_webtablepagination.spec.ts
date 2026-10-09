

import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

//01: single selection: username is found on the 1st page, on any page, on the last page, user is not found at all
//02: multiple selection: usernames are found on the 1st page, on any page, on the last page, users are not found at all


test('Webtable with pagination with single selection test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {

        let isUserPresent = await page.locator(`td:has-text("cameron_ray")`).first().isVisible();
        if (isUserPresent) {
            //user is found on the 1st page itself..
            await page.locator('table#dataTable tr').filter({ hasText: 'cameron_ray' }).first().getByRole('checkbox').check();
            break;
        }
        else {
            //username is not present on the 1st page, pagination logic:
            //click on the next icon:
            let nextEle = page.getByRole('button', { name: '›' });
            await nextEle.click();
            await page.waitForTimeout(1500);

            let isNextEleDisabled = await nextEle.isDisabled();
            if (isNextEleDisabled) {
                console.log('pagination is over...username is not found...');
                break;
            }
        }


    }
    //await page.pause();

});



test('Webtable with pagination with multiple selection test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {

        let allUserChecks =
            await page.locator('table#dataTable tr').filter({ hasText: 'john_doe' }).getByRole('checkbox').all();

        if (allUserChecks.length > 0) {
            //select all the checkboxes:
            for (let ele of allUserChecks) {
                await ele.check();
            }
        }
        //go the next page, click on next icon:
        let nextEle = page.getByRole('button', { name: '›' });

        let isNextEleDisabled = await nextEle.isDisabled();
        if (isNextEleDisabled) {
            console.log('pagination is over...');
            break;
        }
        await page.waitForTimeout(2000);
        await nextEle.click();
    }
    await page.pause();

});