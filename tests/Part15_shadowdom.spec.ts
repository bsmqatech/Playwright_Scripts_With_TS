import { test, expect, Locator } from '@playwright/test';


//Browser ---> Page ---> elements
//--> shadow DOM --> elements --> click, fill 
//Auto piercing


test('shadow dom element test', async ({ page }) => {

    //await page.setViewportSize({ width: 1800, height: 1080 });

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    //button in shadow DOM:
    //await page.getByRole('button', { name: 'Click Me' }).click();
    await page.getByRole('button', { name: 'Click Me' }).click();

    //input textbox in shadow DOM:
    await page.getByRole('textbox', { name: 'Username' }).fill('Naveen Automation Labs');
    await page.getByRole('button', { name: 'Submit' }).click();

    //level 1 ---> level 2 ---> element
    page.getByRole('textbox', { name: 'Type inside nested shadow...' }).fill('I love PW');

    //l1 --> l2 -- l3 -- element
    page.getByRole('button', { name: 'Deep Click' }).click();

    page.getByRole('button', { name: 'Slotted Button' }).click();

    //closed shadow dom element:
    // page.locator('#closed-input').fill('hey its closed....');

    await page.pause();


});