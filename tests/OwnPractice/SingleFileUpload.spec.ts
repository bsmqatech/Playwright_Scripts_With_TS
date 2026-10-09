import test from "@playwright/test";

test("Single File Upload Test", async({page})=>{

await page.goto("https://naveenautomationlabs.com/opencart/ui/file-upload.html");

    await page.locator('#single-file').setInputFiles('C:/Users/mishr/Downloads/testUpload.txt');
    //await page.waitForTimeout(3000);
    await page.pause();


})


test("Multiple File Upload Test", async({page})=>{

await page.goto("https://naveenautomationlabs.com/opencart/ui/file-upload.html");

    await page.locator('#multi-file').setInputFiles([
        'C:/Users/mishr/Downloads/testUpload.txt',
         'C:/Users/mishr/Downloads/testUpload - Copy.txt',
          'C:/Users/mishr/Downloads/testUpload - Copy (2).txt',
           'C:/Users/mishr/Downloads/testUpload - Copy (3).txt',
            'C:/Users/mishr/Downloads/testUpload - Copy (4).txt',
             'C:/Users/mishr/Downloads/testUpload - Copy (5).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (6).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (7).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (8).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (6).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (7).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (8).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (9).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (10).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (11).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (12).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (13).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (14).txt',
              'C:/Users/mishr/Downloads/testUpload - Copy (15).txt',

    
    ]);
    //await page.waitForTimeout(3000);
    //await page.pause();

    await page.waitForTimeout(3000);
    await page.locator('#multi-file').setInputFiles([]);
    await page.pause();
})