const { I, configuration } = inject();

module.exports = {
  // Locators
  pageHeader: { css: '#content > div > h3'},
  dropdown: {css: '#dropdown'},

  // Methods
  verifyDropDownPageLoaded(){
    I.waitForVisible(this.pageHeader, configuration.pageLoadWait);
  },

  async getPageHeaderText(){
    return await I.grabTextFrom(this.pageHeader);
  },

  selectOption(value){
    I.selectOption(this.dropdown, value);
  },

  verifySelectedValue(value){
    I.see(value, this.dropdown);
  }
}