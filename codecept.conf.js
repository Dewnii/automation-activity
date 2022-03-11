require('dotenv').config({ path: '.env' });

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.APP_URL,
      show: process.env.SHOW_BROWSER,
      browser: process.env.BROWSER,
      timeout: Number(process.env.COMMAND_TIMEOUT),
      windowSize: process.env.WINDOW_SIZE
    }
  },
  include: {
    I: './steps_file.js',

    // Pages
    homePage: './pages/homePage.js',
    loginPage: './pages/loginPage.js',
    addRemoveElementsPage: './pages/addRemoveElementsPage.js',
    jsAlertsPage: './pages/jsAlertsPage.js',
    dropdownPage: './pages/dropdownPage.js',
    checkboxPage: './pages/checkboxPage.js',

    // Configurations
    configuration: {
      pageLoadWait: process.env.PAGE_LOAD_WAIT_SECONDS,
      testDataLocation: process.env.TEST_DATA_FILE_LOCATION
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'automation-exercise'
}