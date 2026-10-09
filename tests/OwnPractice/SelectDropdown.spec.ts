import test from "@playwright/test";

test("Single Select dropdown", async ({page})=>{

await page.goto("https://orangehrm.com/contact-sales");

console.log(await page.title());
let select = await page.getByRole('combobox', { name: 'Country' }).selectOption("Argentina");

select = await page.getByRole('combobox', { name: 'Country' }).selectOption("India");
await page.waitForTimeout(3000);
select = await page.getByRole('combobox', { name: 'Country' }).selectOption("India");
await page.waitForTimeout(3000);
select = await page.getByRole('combobox', { name: 'Country' }).selectOption("Austria");
//await page.pause();
})


test ("MultiSelect Dropdown", async ({page})=>{


    page.goto("https://selenium08.blogspot.com/2019/11/dropdown.html");

    let multiSelect= await page.locator('[name="Month"]').selectOption(["February","June", "May", "December"]);

    console.log(multiSelect);

    await page.pause();
})