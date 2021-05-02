# Testing with Jest and Playwright

This sample project is setup for testing with Jest and Playwright. Jest is used as

## Dependencies

```bash
# install jest, react-testing-library and playwright
npm i -D @testing-library/react @testing-library/jest-dom jest jest-playwright-preset playwright jest-process-manager
```

### JSX babel transpile

Create .babelrc file and add next/babel presets

```babelrc
{
  "presets":["next/babel"]
}
```

### BaseUrl module imports

For js use jsconfig.json and for typescript tsconfig.json for [next to support module imports using fixed paths](https://nextjs.org/docs/advanced-features/module-path-aliases)

## Usage

```bash
# unit test with jest and react-testing-library
# run unit tests in watch mode
npm run jest
# run test
npm test

# run end-to-end test with playwright
npm run e2e

```
