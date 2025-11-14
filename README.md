# Everyset Integration Tests

This repository hosts browser integration tests and GitHub Actions workflows that execute these tests.
The purpose of these tests is to continuously verify that key elements of our platforms are operating properly—in real time, on production and other environments.

Tests run on a regular schedule or manually, and can be executed against different deployments (staging, QA, production, etc.).

## 🚀 Getting Started
### Clone the repository
```
$ git clone <repo-url>
$ cd integration-test-automation
```
### Install dependencies
```
$ npm install
```
### Install Playwright browsers
```
$ npx playwright install
```

## 📁 Project Structure
```
.github/
  └── workflows/
        └── playwright.yml            # GitHub Action workflow file

tests/                                # Test files
  ├── <platform>_<feature>.spec.js
  └── payroll_homepage.spec.js

playwright.config.js                   # Global Playwright configuration
```

## 🧪 Test Files
All test scripts are written in JavaScript using the Playwright framework.
Tests are located in the **./tests** directory.
Learn more about Playwright [here](https://playwright.dev/docs/writing-tests)

## Running Tests Locally
```
$ npx playwright test                            # Run all tests (headless)
$ npx playwright test --headed                   # Run all tests with visible browser
$ npx playwright test example.spec.js            # Run a single test file
$ npx playwright test -g "homepage has title"    # Run a single test by its test name
$ npx playwright test -p chromium                # Run using a specific browser project
```
### Optional: VS Code Support
You can install the Playwright VS Code extension to debug and run tests directly from the [VS Code UI](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

## 🕒 Schedule & Manual Test Execution

GitHub Actions trigger test runs automatically based on a cron schedule defined in:
```
.github/workflows/playwright.yml
```
### Running Tests Manually
1. Go to the Actions tab in GitHub
2. Select the “Playwright Tests” workflow
3. Click “Run workflow”
4. Select the environment (staging / QA / production)

<img width="1146" height="464" alt="image" src="https://github.com/user-attachments/assets/a2c264ae-a4bc-4b0e-8639-5f180a9be707" />

### Test Results

Test results are stored as Artifacts and can be downloaded from the workflow run page.

<img width="1404" height="774" alt="image" src="https://github.com/user-attachments/assets/ee99f0ac-fb55-494c-bfe1-bb8cfe6a4eb8" />


