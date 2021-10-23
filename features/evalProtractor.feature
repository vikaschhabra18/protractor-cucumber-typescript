Feature: To search protractor in google

@ProtractorScenario
Scenario: Protractor Google Search
Given I am Google Home page
When I type "Protractor"
When I click on search button
Then I verify the "cucumber" title
Then I click on gooogle logo