
import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test('non select based drop down test', async ({ page }) => {
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');

    await page.locator('#justAnInputBox').click();
    await page.waitForTimeout(2000);

    // await page
    //     .locator('span.comboTreeItemTitle')
    //     .filter({ hasText: 'choice 6 2 3' })
    //     .first()
    //     .click();

    //tc01: multi selection
    // await selectChoice(page, ['choice 5', 'choice 4', 'choice 6 2 2', 'choice 7']);

    //tc_02: single selection
    await selectChoice(page, ['choice 5']);

    //tc_03: all selection

    await page.pause();

});



async function selectChoice(page: Page, choices: string[]): Promise<void> {

    for (let ch of choices) {
        await page.locator('span.comboTreeItemTitle')
            .filter({ hasText: `${ch}` })
            .first()
            .click();
    }

}


