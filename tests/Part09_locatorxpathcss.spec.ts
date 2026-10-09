
import { Browser, BrowserContext, Locator, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test('xpath and css test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // //create the element + action
    // await page.locator("//input[@id='input-firstname']").fill('naveen');

    // let header = await page.locator("//h1[text()='Register Account']").textContent();
    // console.log(header);

    // await page.getByRole('heading', { name: 'Register Account', level: 1 }).textContent();

    // await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
    // await page.locator("//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']").click();

    let firstName: Locator = page.locator('input#input-firstname123'); //no promise
    await firstName.fill('Naveen');
    

    //driver.findElement('input#input-firstname123');//http request - POST API <-- json(css) <---> server <--> browser
    //NoSuchElementException

    //await page.pause();

});