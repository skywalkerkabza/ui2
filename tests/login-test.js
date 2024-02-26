// login-test.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages');

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.login('X312074', 'Sanport02');

  // Add your assertions for successful login if necessary
});
