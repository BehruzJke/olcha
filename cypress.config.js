const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4ue7t1",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://olcha.uz',
    retries : 3,
    pageLoadTimeout : 15000
  },
  viewportWidth: 1440,
  viewportHeight: 900,

});
