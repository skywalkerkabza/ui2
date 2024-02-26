// secure-access.test.js
const { test, expect } = require('@playwright/test');
const { SecureAccessPage } = require('./pages');

test('Secure Access Test', async ({ page }) => {
  const secureAccessPage = new SecureAccessPage(page);
  await secureAccessPage.goToSecureAccessPage();
  const page2 = await secureAccessPage.openAccessGlacierDigital();

  // Add your assertions or further interactions with the popup page as necessary
});
