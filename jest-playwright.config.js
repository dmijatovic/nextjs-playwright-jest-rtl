module.exports={
  // jest-playwright settings
  browsers:["chromium"],
  launchOptions:{
    headless:false,
    slowMo:100
  },
  // jest-process-manager settings
  // to start app in dev mode
  serverOptions: {
    command: "npm run dev",
    port: 3000,
    launchTimeout: 10000,
    debug: false,
    options: {
      env: {
        E2E_TESTS: "true"
      }
    }
  },
  collectCoverage: true
}