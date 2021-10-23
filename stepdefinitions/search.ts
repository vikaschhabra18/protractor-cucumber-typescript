import { browser, protractor, element, by } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

When(/^I type "(.*?)"$/, async (text) => {
    await search.searchTextBox.sendKeys(text);
    console.log("The search Keyword is: "+text);
});

When(/^I click on search button$/, async () => {
    //await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    await search.searchTextBox.sendKeys(protractor.Key.ENTER);
    await browser.driver.sleep(2000);
});

Then(/^I verify the "(.*?)" title$/, async (text) => {
    if (text === "cucumber") {
        await expect(browser.getTitle()).to.eventually.equal(text+" - Google Search");
    }
});

Then(/^I click on gooogle logo$/, async () => {
    //await search.logo.click();
    await element(by.xpath("//div//a[@title = 'Go to Google Home']")).click();
    console.log("Clicked on google logo");
    await browser.driver.sleep(2000);
});
