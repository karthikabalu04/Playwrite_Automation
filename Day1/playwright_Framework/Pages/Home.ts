import { test, expect, Locator, Page } from '@playwright/test';
import { playwrightGenerics } from '../utills/playwrightGenerics';


export class HomePage extends playwrightGenerics
{
    readonly usersElement: Locator
    readonly productElement: Locator
    readonly dashboardElement: Locator
    constructor(page: Page)
    {
        super();
        this.usersElement=page.locator('//h2[text()="Users"]');
        this.dashboardElement=page.locator('//button[text()="⬅ Dashboard"]');
        this.productElement=page.locator('//h2[text()="Products"]');
    
    }
async clickElement(element: Locator): Promise<void> {
    await element.click();
    console.log('You are in users page');
    
}
async clickDashboard(element:Locator): Promise<void>
{
    await element.click();
    console.log('you are in Homepage')

}
async clickProducts(element:Locator):Promise<void>
{
    await element.click();
    console.log("User is in the Product page");

}
}