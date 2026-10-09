
//assertions -- expect() method
//soft and hard assertions
//in-built assertions 
//default timeout: 5 secs

//exp vs actual result: checkpoint, validation point


import { Page, chromium, expect, firefox, selectors, test, webkit } from '@playwright/test';

test('expect assertion test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');



    //expect(page.getByText('First Name must be between 1 and 32 characters!', { exact: true })).toBeVisible();

    expect(100).toBe(100);

    expect(page.url()).toContain('account/register');

    let header = page.getByRole('heading', { name: 'Register Account', level: 1 });
    await expect(header).toBeVisible();

    //Register Account
    await expect.soft(header).toHaveText('Register Account');

    await expect(page.locator('#column-right a.list-group-item')).toHaveCount(13);

    await page.getByRole('textbox', { name: '* First Name' }).fill('Naveen Automation Labs');
    await expect(page.getByRole('textbox', { name: '* First Name' }), 'text box should have NAL value').toHaveValue('Naveen Automation Labs');


    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');

    await expect(page.getByTestId('country-select').locator('option')).toHaveCount(6);


    await page.getByTestId('country-select').selectOption('India');
    await expect(page.getByTestId('country-select')).toHaveValue('in');

    console.log('....END....');

});



test('expect assertion for differnet elements test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled({ timeout: 10000 }); //10 secs

    await expect(page.getByRole('textbox', { name: 'First Name' })).toBeEmpty();//5 secs
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeEmpty();//5 secs

    await expect(page.getByRole('textbox', { name: 'First Name' })).toBeEditable();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeEditable();

    await expect(page.getByRole('textbox', { name: 'Username (read-only, auto-generated)' })).not.toBeEditable();

    await page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).check();
    await expect(page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' })).toBeChecked();

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeEnabled();

    await page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).uncheck();
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled();

    //attributes:
    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('type', 'text');
    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('placeholder', 'Enter first name');

    await expect(page.getByRole('textbox', { name: 'Username (read-only, auto-generated)' })).toHaveAttribute('readonly', '');

    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveId('firstname', { timeout: 10000 });

    console.log('....END....');

});




test('expect time out test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //Register Account
    //default timeout: 5 secs or 5000 ms
    let header = page.getByRole('heading', { name: 'Register Account', level: 1 });
    await expect.soft(header).toHaveText('Register Account123');

    console.log('....END....');

});


//AAA pattern: Arrange Act Assert
//test case -> only 1 hard assertion
//test case --> multiple soft assertions

//register page test: steps ---- asertions:

//1. check the logo -- tc1
//2. check the url -- tc2
//3. check the title --tc3
//4. check the footer --tc4
//5. check the right panel links --tc5
//6. check the fn is visible --tc6

//Register Page Test: hard
//1. check the logo -- pass
//2. check the url -- failed
//3. check the title --
//4. check the footer --
//5. check the right panel links --
//6. check the fn is visible --

//Register Page Test: soft
//1. check the logo -- pass
//2. check the url -- failed
//3. check the title -- pass
//4. check the footer -- failed
//5. check the right panel links -- pass
//6. check the fn is visible -- pass
//Report: Pass: 4, failed: 2

//soft --> with the same functionality checkpoints:
//tc: rgister form elements visibilty check:
//1 to 6 : soft assertions

