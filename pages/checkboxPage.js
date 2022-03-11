const { I, configuration } = inject();

module.exports = {
  // Locators,
  pageHeader: { css: '#content > div > h3'},
  checkBoxLocatorByIndex: index => `//*[@id="checkboxes"]/input[${index}]`,

  // Methods
  verifyCheckboxPageLoaded(){
    I.waitForVisible(this.pageHeader, configuration.pageLoadWait);
  },

  async getPageHeaderText(){
    return await I.grabTextFrom(this.pageHeader);
  },

  checkCheckBox(index){
    I.checkOption(this.checkBoxLocatorByIndex(index));
  },

  uncheckCheckBox(index){
    I.uncheckOption(this.checkBoxLocatorByIndex(index));
  },

  verifyCheckboxIsChecked(index){
    I.seeCheckboxIsChecked(this.checkBoxLocatorByIndex(index));
  },

  verifyCheckboxIsNotChecked(index){
    I.dontSeeCheckboxIsChecked(this.checkBoxLocatorByIndex(index));
  }
}