import { test, Locator, Page } from "@playwright/test";
import { LoginPage } from "../Pages/Loginpage";


test("Login to the application with valid inputs", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.browserNavigate(page,"https://playground.bsparksoftwaretechnologies.com/login")
    await loginPage.LoginToApplication(page,"https://playground.bsparksoftwaretechnologies.com/login","jhon1@gmail.com","test@123")
    //await loginPage.enterEmailid("jhon1@gmail.com")
    //await loginPage.enterPassword("test@123")
    await loginPage.clickLoginButton()
    await loginPage.verifyLoginSuccess(page)


});
