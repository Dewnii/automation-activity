Feature('addRemoveElements feature');

const assert = require('assert');

Scenario('User can add elements', async ({ homePage, addRemoveElementsPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToAddRemoveElementsPage();
    addRemoveElementsPage.verifyAddElementsPageLoaded();
    const pageHeader = await addRemoveElementsPage.getPageHeaderText();
    assert(pageHeader, "Add/Remove ElementsLogin Page")
    addRemoveElementsPage.clickAddElements();
    let deleteBtnCount = await addRemoveElementsPage.getDeleteButtonCount()
    assert(deleteBtnCount, 1)
    addRemoveElementsPage.clickAddElements();
    deleteBtnCount = await addRemoveElementsPage.getDeleteButtonCount()
    assert(deleteBtnCount, 2)
});

Scenario('User can delete added elements', async ({ homePage, addRemoveElementsPage }) => {
    homePage.verifyHomePageLoaded();
    homePage.navigateToAddRemoveElementsPage();
    addRemoveElementsPage.verifyAddElementsPageLoaded();
    addRemoveElementsPage.clickAddElements();
    addRemoveElementsPage.clickAddElements();
    let deleteBtnCount = await addRemoveElementsPage.getDeleteButtonCount()
    assert(deleteBtnCount, 2)
    addRemoveElementsPage.clickOnGivenDeleteButtonByIndex(2);
    deleteBtnCount = await addRemoveElementsPage.getDeleteButtonCount()
    assert(deleteBtnCount, 1)
});