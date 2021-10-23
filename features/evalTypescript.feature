Feature: To search typescript in google

@TypeScriptScenario
Scenario: Typescript Google Search
Given I am Google Home page
When I type "Typescript"
When I click on search button
Then I verify the "Typescript" title
Then I click on gooogle logo