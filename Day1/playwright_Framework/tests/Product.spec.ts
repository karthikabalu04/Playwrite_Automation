import { test, Locator, Page } from "@playwright/test";
import { LoginPage } from "../Pages/Loginpage";
import { ProductPage } from "../Pages/Product";

test("create a new product",async({page})=>{
   const loginPageobj=new LoginPage(page);
   const productPageobj=new ProductPage(page);
   await loginPageobj.LoginToApplication(page,"https://playground.bsparksoftwaretechnologies.com/login","jhon1@gmail.com","test@123")   
   await loginPageobj.clickLoginButton()
   await loginPageobj.clickViewProducts(page)
   await productPageobj. clickCreateProduct(page,"PID001","TestProductName","This is a test product",1000,"Red")
   const isChecked = await productPageobj.ischeckboxChecked(productPageobj.activeCheckbox);
})
