const { I, configuration } = inject();

module.exports = {
  // Locators
  fields: {
    username: { css: '#username'},
    password: { css: '#password'},
  },
  pageHeader: { css: '#content > div > h2'},
  loginBtn: { css: '#login > button'},
  logoutBtn: {css: '#content > div > a.button'},
  banner: {css: '#flash'},

  // Methods
  verifyLoginPageLoaded(){
    I.waitForVisible(this.pageHeader, configuration.pageLoadWait);
  },

  async getPageHeaderText(){
    return await I.grabTextFrom(this.pageHeader);
  },

  login(username, password){
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.loginBtn);
  },

  logout(){
    I.click(this.logoutBtn);
  },

  async getBannerMessage(){
    I.waitForElement(this.banner, 10);
    return await I.grabTextFrom(this.banner);
  },

}