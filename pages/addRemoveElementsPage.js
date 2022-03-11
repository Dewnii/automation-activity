const { I, configuration } = inject();

module.exports = {
  // Locators
  pageHeader: { css: '#content > h3' },
  addButton: { css: '#content > div > button' },
  btnLocatorByIndex: index => `//*[@id="elements"]/button[${index}]`,
  deleteButton: { css: '.added-manually' },

  // Methods
  verifyAddElementsPageLoaded(){
    I.waitForVisible(this.pageHeader, configuration.pageLoadWait);
  },

  async getPageHeaderText(){
    return await I.grabTextFrom(this.pageHeader);
  },

  clickAddElements(){
    I.click(this.addButton);
  },

  async getDeleteButtonCount(){
    return await I.grabNumberOfVisibleElements(this.deleteButton);
  },

  clickOnGivenDeleteButtonByIndex(index){
    I.click(this.btnLocatorByIndex(index))
  }

}