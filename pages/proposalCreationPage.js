// proposalCreationPage.js
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
  
  // Click on the Secure Access link
  await page.click('a:has-text("Secure Access")');

  // Wait for the popup to appear after clicking "Access Glacier Digital"
  const page2Promise = page.waitForEvent('popup');
  await page.click('img[alt="Access Glacier Digital"]');
  const page2 = await page2Promise;

  // Interact with the proposal creation form
  await page2.click('div:has-text("New business") icon-button');
  await page2.click('button:has-text("Create new proposal")');
  await page2.fill('input[name="react-aria1014098124-:r8:"]', 'Nomthandazo');
  await page2.fill('input[name="react-aria1014098124-:ra:"]', 'Khathi');
  // Continue filling out the form as per your requirements

  // Close browser
  await context.close();
  await browser.close();
})();
