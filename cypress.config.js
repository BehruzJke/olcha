const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Project id for Cypress Cloud integration
  projectId: "4ue7t1",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://olcha.uz',
    //Retry test 3 times in case of fail
    retries : 2,
    //Default timeout for page to load
    pageLoadTimeout : 15000
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  //comment
});
