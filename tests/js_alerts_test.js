Feature('jsAlerts feature');

const assert = require('assert');

Scenario('User can accept JS Alert', async ({ homePage, jsAlertsPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToJSAlertsPage();
    jsAlertsPage.verifyJSAlertPageLoaded();
    let pageHeader = await jsAlertsPage.getPageHeaderText()
    assert(pageHeader, "JavaScript Alerts")
    jsAlertsPage.clickJSAlert();
    jsAlertsPage.acceptPopup();
    const resultText = await jsAlertsPage.getResultText();
    assert(resultText, "You successfully clicked an alert")
});

Scenario('User can accept JS Confirm', async ({ homePage, jsAlertsPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToJSAlertsPage();
    jsAlertsPage.verifyJSAlertPageLoaded();
    jsAlertsPage.clickJSConfirm();
    jsAlertsPage.acceptPopup();
    const resultText = await jsAlertsPage.getResultText();
    assert(resultText, "You clicked: Ok")
});

Scenario('User can accept JS prompt', async ({ homePage, jsAlertsPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToJSAlertsPage();
    jsAlertsPage.verifyJSAlertPageLoaded();
    jsAlertsPage.clickJSPrompt();
    jsAlertsPage.acceptPopup();
    const resultText = await jsAlertsPage.getResultText();
    assert(resultText, "You entered:")
});