



import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test('google search test', async ({ page }) => {
    await page.goto('https://www.google.com/');

    await page.getByRole('combobox', { name: 'Search' }).fill('Naveen Automation Labs');

    await page.getByText('naveen automation labs course').click();

    //locator('div.wM6W7d span').filter({hasText: 'training'})

    await page.pause();

});


test('amazon search test', async ({ page }) => {
    await page.goto('https://www.amazon.in/');

    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('MacBook Pro');
    await page.locator('div.left-pane-results-container').getByText('macbook pro cover', { exact: true }).click();

    await page.pause();

});