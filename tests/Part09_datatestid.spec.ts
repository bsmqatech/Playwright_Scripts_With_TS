
import { Browser, BrowserContext, Page, chromium, expect, firefox, selectors, test, webkit } from '@playwright/test';

test('data test id locator test', async ({ page }) => {
    // await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');

    // //data-testid="username-input"
    // await page.getByTestId('username-input').fill('naveen automation labs');
    // await page.getByTestId('email-input').fill('test@gmail.com');


    //data-test-id="EMAIL"

    selectors.setTestIdAttribute('id');
    await page.goto('https://app.hubspot.com/signup-hubspot/crm?step=landing_page');
    await page.getByTestId('FormControl1').fill('naven@hub.com');

    await page.pause();


});