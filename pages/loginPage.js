// loginPage.js
const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {
  await page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
  await page.click('a:has-text("Login")');
  await page.fill('input[name="username"]', 'X312074');
  await page.press('input[name="username"]', 'Tab');
  await page.fill('input[name="password"]', 'Sanport02');
  await page.click('#frmMain :text("Login")');

  
});
