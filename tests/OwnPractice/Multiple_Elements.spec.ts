import test from "@playwright/test";

test("fetch all links test", async ({page})=>{

await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=common/home");

console.log(await page.title());
let links = await page.locator('a[href]').all();

console.log("Total links present = " + links.length);

for(let link of links){

let linktext= await link.innerText();
let attribute = await link.getAttribute('href');

    console.log(linktext , ":" ,attribute);
}

//await page.pause();
})

