


//JS Aserts -- JS Pop UPs -- modal dialoges
//Js Methods
//1. alert('messg/eror mesg')
//2. confirm('are you sure???')
//3. prompt('mesg with textbox')


import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test('JS Alert Pop Up Handle test', async ({ page }) => {

    //default listener: dismiss the alert

    //1. - Alert -- just accept it...
    page.on('dialog', async (popup) => {
        if (popup.type() === 'alert') {
            console.log(popup.message());
            await popup.accept();
        }
    });

    //2. - Confirm -- just accept it...
    page.on('dialog', async (popup) => {
        if (popup.type() === 'confirm') {
            console.log(popup.message());
            await popup.accept();//click ok
            //await popup.dismiss();//click cancel
        }
    });

    //2. - Prompt -- just accept it...
    page.on('dialog', async (popup) => {
        if (popup.type() === 'prompt') {
            console.log(popup.message());
            await popup.accept('Naveen Automation Labs....');//click ok and enter text messg
            //await popup.dismiss();//click cancel
        }
    });

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.getByRole('button', { name: 'Click for JS Alert' }).highlight();
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Click for JS Confirm' }).highlight();
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Click for JS Prompt' }).highlight();
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await page.waitForTimeout(3000);

    await page.pause();

});