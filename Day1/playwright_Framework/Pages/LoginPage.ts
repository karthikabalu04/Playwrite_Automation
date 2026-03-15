import { test, expect, Locator, Page } from '@playwright/test';
import { playwrightGenerics } from '../utills/playwrightGenerics';


export class LoginPage extends playwrightGenerics 
{

   readonly emailElement: Locator
   readonly passwordElement : Locator
   readonly loginButton : Locator
  readonly viewProduct:Locator

   constructor(page: Page)
   {
     super();
     this.emailElement = page.locator("#username")
     this.passwordElement = page.locator("#pwd")
     this.loginButton = page.getByText("Login").last()
     this.viewProduct=page.locator("//p[text()='View products']");
   }

   async LoginToApplication(page: Page, url: string, username: string, password: string): Promise<void> {
    {
      await page.goto(url);
      await this.enterText(this.emailElement,username)
       await this.enterText(this.passwordElement,password)
      

    }
    }
    async clickLoginButton()
    {
      await this.clickElement(this.loginButton)
    }
async verifyLoginSuccess(page: Page): Promise<void> {
    await page.waitForTimeout(2000);
    const currentURL = await this.getCurrentURL(page);
    expect(currentURL).toContain('dashboard');
    console.log('Login successful, you are on the dashboard page');
}
async clickViewProducts(page: Page)
{
  await this.clickElement(this.viewProduct)
     await page.waitForTimeout(2000);
}
}