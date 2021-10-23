const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import { Before } from "cucumber";
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";

BeforeAll({ timeout: 100 * 1000 }, async () => {
    await browser.get(config.baseUrl);
});
Before(async function (scenarioOutline) {
    console.log(scenarioOutline);
});
After(async function (scenario) {
    // console.log(scenario);
    // console.log(scenario.pickle.name);
    // console.log(scenario.pickle.steps);
    // console.log(scenario.pickle.tags[1]);
    console.log("---------------------------------------------------")
    var tagsCount = scenario.pickle.tags
    var i = 0;
    while (i <= 5) {
        try {
            if (tagsCount[i].name)
                console.log(tagsCount[i].name)
            i++;
        } catch {
            console.log("No more tags")
            break;
        }
    }
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

AfterAll({ timeout: 100 * 1000 }, async () => {
    await browser.quit();
});
