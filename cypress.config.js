const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Specify the reporter
  reporter: 'cypress-mochawesome-reporter',
  
  //Project id for Cypress Cloud integration
  projectId: "4ue7t1",
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl : 'https://olcha.uz',
    //Retry test 3 times in case of fail
    // retries : 2,
    //Default timeout for page to load
    pageLoadTimeout : 15000
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  //comment
});
