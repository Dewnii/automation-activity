const { I, configuration } = inject();

module.exports = {
  // Locators
  pageHeader: { css: '#content > div > h3'},
  btnLocator: text => `//*[@id="content"]/div/ul/li/button[contains(text(),"${text}")]`,
  jsAlertText: 'Click for JS Alert',
  jsConfirmText: 'Click for JS Confirm',
  jsPromptText: 'Click for JS Prompt',
  resultText: { css: '#result'},

  // Methods
  verifyJSAlertPageLoaded(){
    I.waitForVisible(this.pageHeader, configuration.pageLoadWait)
  },

  async getPageHeaderText(){
    return await I.grabTextFrom(this.pageHeader);
  },

  clickButtonByVisibleText(text){
    I.click(this.btnLocator(text))
  },

  clickJSAlert(){
    this.clickButtonByVisibleText(this.jsAlertText);
  },

  clickJSConfirm(){
    this.clickButtonByVisibleText(this.jsConfirmText);
  },

  clickJSPrompt(){
    this.clickButtonByVisibleText(this.jsPromptText);
  },

  async getResultText(){
    return await I.grabTextFrom(this.resultText);
  },

  acceptPopup(){
    I.acceptPopup();
  },

  cancelPopup(){
    I.cancelPopup();
  },
}