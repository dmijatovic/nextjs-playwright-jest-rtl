# Testing with Jest, Playwright and React testing library

This sample project is basic setup for testing with Jest and Playwright for end-to-end tests and Jest and React testing library for unit/integration tests.

## Dependencies

```bash
# install jest, react-testing-library, playwright and jest-playwright plugins
npm i -D @testing-library/react @testing-library/jest-dom jest jest-playwright-preset playwright jest-process-manager
```

## JSX babel transpile

Create .babelrc file and add next/babel presets

```babelrc
{
  "presets":["next/babel"]
}
```

## Module imports NextJS setup

For js we use jsconfig.json and for typescript tsconfig.json for [next to support module imports using fixed paths](https://nextjs.org/docs/advanced-features/module-path-aliases)

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

## Jest setup for unit tests

For unit test we use Jest and React testing library. We use the default setup file `jest.config.js` and `setupTests.js` for unit testing setup where we set specific nextjs and react testing library settings. If you are using Create React App this will be already setup properly.

Import to note is that in ignore patters we include e2e folder.

```Javascript
// jest.config.js
module.exports={
  testPathIgnorePatterns:["<rootDir>/.next","<rootDir>/node_modules","<rootDir>/e2e"],
  setupFilesAfterEnv:["<rootDir>/setupTests.js"],
  modulePaths:[
    "<rootDir>/node_modules",
    "<rootDir>/"
  ]
}
```

In setupTests we import react testing library specific assertions for Jest.

## Jest setup for end to end tests

For end to end test we use Jest and Playwright. Jest configuration is stored in `jest.e2e.config.js` and configuration of jest-playwright plugin is in default configuration file `jest-playwright.config.js`.

```Javascript
// jest.e2e.config.js
module.exports = {
  preset: 'jest-playwright-preset',
  testMatch:["**/e2e/**/*.js"],
}
```

```Javascript
// jest-playwright.config.js
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

```

## Usage

First install all dependcies

```bash
# unit test with jest and react-testing-library
# run unit tests in watch mode
npm run jest
# run test
npm test
# run end-to-end test with playwright
npm run e2e
```
