const { I, configuration } = inject();

module.exports = {

    // Locators
  pageHeader: { css: '#content > h1'},
  lnkNavigation: lnkText => `//*[@id="content"]/ul/li/a[contains(text(),'${lnkText}')]`,
  lnkLoginPage: 'Form Authentication',
  lnkAddRemoveElements: 'Add/Remove Elements',
  lnkJSAlerts: 'JavaScript Alerts',
  lnkDropDown: 'Dropdown',
  lnkCheckBox: 'Checkboxes',


  verifyHomePageLoaded(){
    I.amOnPage('/')
    I.waitForVisible(this.pageHeader, configuration.pageLoadWait)
  },

  async getPageHeaderText(){
    return await I.grabTextFrom(this.pageHeader);
  },

  navigateByLinkText(text){
    I.click(this.lnkNavigation(text))
  },

  navigateToLoginPage(){
    this.navigateByLinkText(this.lnkLoginPage)
  },

  navigateToAddRemoveElementsPage(){
    this.navigateByLinkText(this.lnkAddRemoveElements)
  },

  navigateToJSAlertsPage(){
    this.navigateByLinkText(this.lnkJSAlerts)
  },

  navigateToDropdownPage(){
    this.navigateByLinkText(this.lnkDropDown)
  },

  navigateToCheckboxPage(){
    this.navigateByLinkText(this.lnkCheckBox)
  }
}