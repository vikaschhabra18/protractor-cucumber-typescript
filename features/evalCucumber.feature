Feature: To search cucumber in google

@CucumberScenario
@Test
Scenario: Cucumber Google Search
Given I am Google Home page
When I type "cucumber"
When I click on search button
Then I verify the "cucumber" title
Then I click on gooogle logo