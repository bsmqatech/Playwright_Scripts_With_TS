

import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test('fill value with delay test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', { name: '* First Name' }).pressSequentially('Naveen Automation Labs', { delay: 500 });

    await page.pause();

});

//secrets --- vault, jenkins, github actions