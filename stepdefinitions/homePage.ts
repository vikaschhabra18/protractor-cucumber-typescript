import { SearchPageObject } from "../pages/searchPage";
import { Console } from "console";
const { Given } = require("cucumber");
import { browser, protractor, element, by } from "protractor";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^I am Google Home page$/, async () => {
    let Titletext = "";
    await browser.getTitle().then(function(text){
        Titletext = text;
    });
    if (Titletext === "Google") {
        console.log("I am on Home Page.");
    } else {
        await element(by.xpath("//div//a[@title = 'Go to Google Home']")).click();
        await browser.driver.sleep(2000);
    } 
});
