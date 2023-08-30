

const { defineConfig } = require('cypress')

module.exports = defineConfig({
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/dowloads/',
    screenshotsFolder: 'cypress/dowloads/',
    viewportWidth: 1440,
    viewportHeight: 900,
    experimentalWebKitSupport: true,
    modifyObstructiveCode: false,
    responseTimeout: 45000,
    requestTimeout: 20000,
    defaultCommandTimeout: 45000,
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
    experimentalStudio: true,

  e2e: {
    baseUrl: 'https://staging.clickup.com/',
    specPattern: 'cypress/features/**/*.cy.js',
    
  },
})