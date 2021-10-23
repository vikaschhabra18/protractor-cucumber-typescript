@FeatureTag
Feature: To search keywords in google

  @OutlineScenario @abc
  Scenario Outline: Google Search.

    Given I am Google Home page
    When I type "<search keyword>"
    When I click on search button
    Then I verify the "<search>" title
    # Then I click on gooogle logo

    Examples:
      | search     | search keyword |
      | typescript | typescript     |
# |  cucumber | cucumbber |
# |  protractor | protractor |
