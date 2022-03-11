Feature('login feature');

const assert = require('assert');

const { getValidUserAccounts, getInvalidUserNameAccounts, getInvaldPasswordAccounts } = require("../helpers/credentialsLoader");

Data(getValidUserAccounts()).Scenario('User can login with valid credentials and logout', async ({ current, homePage, loginPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToLoginPage();
    let pageHeader = await loginPage.getPageHeaderText()
    assert(pageHeader, "Login Page")
    loginPage.login(current.username, current.password);
    const bannerMessage = await loginPage.getBannerMessage();
    assert(bannerMessage, "You logged into a secure area!")
    loginPage.logout();
    pageHeader = await loginPage.getPageHeaderText()
    assert(pageHeader, "Login Page")
}).tag("@smoke")

Data(getInvalidUserNameAccounts()).Scenario('User can see error messsage when invalid username provided', async ({ current, homePage, loginPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToLoginPage();
    loginPage.verifyLoginPageLoaded();
    loginPage.login(current.username,current.password);
    const bannerMessage = await loginPage.getBannerMessage();
    assert(bannerMessage, "Your username is invalid!")
});

Data(getInvaldPasswordAccounts()).Scenario('User can see error messsage when invalid password provided', async ({ current, homePage, loginPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToLoginPage();
    loginPage.verifyLoginPageLoaded();
    loginPage.login(current.username,current.password);
    const bannerMessage = await loginPage.getBannerMessage();
    assert(bannerMessage, "Your password is invalid!")
});