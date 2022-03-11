Feature('dropdown feature');

const assert = require('assert');

Scenario('User can see placeholder value by default', async ({ homePage, dropdownPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToDropdownPage();
    dropdownPage.verifyDropDownPageLoaded();
    let pageHeader = await dropdownPage.getPageHeaderText()
    assert(pageHeader, "Dropdown List")
    dropdownPage.verifySelectedValue("Please select an option");
});

Scenario('User can see select a value', ({ homePage, dropdownPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToDropdownPage();
    dropdownPage.verifyDropDownPageLoaded();
    dropdownPage.selectOption("Option 1");
    dropdownPage.verifySelectedValue("Option 1");
});