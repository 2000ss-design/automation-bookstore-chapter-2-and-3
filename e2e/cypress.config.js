const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: '**/*.spec.{js,jsx,ts,tsx}', // Update this pattern if your spec files have a different naming convention
  },
});

require('@applitools/eyes-cypress')(module);
