Feature('checkbox feature');

const assert = require('assert');

Scenario('User can see second checkbox checked by default', async ({ homePage, checkboxPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToCheckboxPage();
    checkboxPage.verifyCheckboxPageLoaded();
    let pageHeader = await checkboxPage.getPageHeaderText()
    assert(pageHeader, "Checkboxes")
    checkboxPage.verifyCheckboxPageLoaded();
    checkboxPage.verifyCheckboxIsChecked('2');
});

Scenario('User can check a unchecked checkbox', ({ homePage, checkboxPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToCheckboxPage();
    checkboxPage.verifyCheckboxPageLoaded();
    checkboxPage.checkCheckBox(1);
    checkboxPage.verifyCheckboxIsChecked(1);
    checkboxPage.verifyCheckboxIsChecked(2);
});

Scenario('User can uncheck a checked checkbox', ({ homePage, checkboxPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToCheckboxPage();
    checkboxPage.verifyCheckboxPageLoaded();
    checkboxPage.verifyCheckboxIsChecked(2);
    checkboxPage.uncheckCheckBox(2);
    checkboxPage.verifyCheckboxIsNotChecked(2);
});