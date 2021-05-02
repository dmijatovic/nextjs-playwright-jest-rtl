module.exports = {
  preset: 'jest-playwright-preset',
  testMatch:["**/e2e/**/*.js"],
  command:'npm run dev',
  testEnvironmentOptions: {
    'jest-playwright': {
      // Options...
      browsers:["chromium"],
      launchOptions:{
        headless:false,
        slowMo:100
      }
    },
  },
}