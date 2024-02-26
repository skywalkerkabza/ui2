// pages.js

class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    async goToLoginPage() {
      await this.page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
      await this.page.click('a:has-text("Login")');
    }
  
    async login(username, password) {
      await this.page.fill('input[name="username"]', username);
      await this.page.press('input[name="username"]', 'Tab');
      await this.page.fill('input[name="password"]', password);
      await this.page.click('#frmMain :text("Login")');
    }
  }
  
  class SecureAccessPage {
    constructor(page) {
      this.page = page;
    }
  
    async goToSecureAccessPage() {
      await this.page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
      await this.page.click('a:has-text("Secure Access")');
    }
  
    async openAccessGlacierDigital() {
      const page2Promise = this.page.waitForEvent('popup');
      await this.page.click('img[alt="Access Glacier Digital"]');
      return await page2Promise;
    }
  }
  
  class ProposalCreationPage {
    constructor(page) {
      this.page = page;
    }
  
    async createProposal() {
      // Write your code to interact with the proposal creation page
      // Example: filling out form fields, clicking buttons, etc.
    }
  }
  
  module.exports = {
    LoginPage,
    SecureAccessPage,
    ProposalCreationPage
  };
  