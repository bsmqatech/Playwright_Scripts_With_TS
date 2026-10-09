
import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test('page loading wait until test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', { waitUntil: 'load' })

    //e1 -- click   
});

//networkidle : in the last 500 ms all the api network calls are settled or completed.
//domcontentloaded: elements are loaded in the DOM of the page but there is no gurantee that elements are
// visible on the page
//commit: element in there in the DOM, and css/js/images are still pending to be visible on the page
//load: DOM is loaded, css/js/apis/images/resources are loaded and visible on the page and page is ready now



//url/launching page with url ----> DOM loaded ---> page loaded (elements, JS, css, html)