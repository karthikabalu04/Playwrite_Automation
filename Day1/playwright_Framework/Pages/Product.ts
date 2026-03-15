import { test, expect, Locator, Page } from '@playwright/test';
import { playwrightGenerics } from '../utills/playwrightGenerics';

export class ProductPage extends playwrightGenerics {
    readonly createProduct: Locator
    readonly productId: Locator
    readonly productName: Locator
    readonly productDescription: Locator
    readonly productprice: Locator
    readonly selectDropdowncolor:Locator
    readonly activeCheckbox:Locator
    readonly Instockradiobtn:Locator
    readonly Outofstockradiobtn:Locator
    readonly saveButton:Locator
    readonly cancelButton:Locator


    constructor(page: Page) {
        super();
        this.createProduct = page.getByRole("button", { name: "+ Create Product" })
        this.productId = page.getByPlaceholder("Product ID")
        this.productName = page.getByPlaceholder("Product Name")
        this.productDescription = page.getByPlaceholder("Product Description")
        this.productprice = page.getByPlaceholder("Product Price")
        this.selectDropdowncolor = page.locator("//select[@name='color']")
        this.activeCheckbox = page.locator("//input[@name='active']")
        this.Instockradiobtn = page.locator("//input[@name='stock'][@value='instock']")
        this.Outofstockradiobtn = page.locator("//input[@name='stock'][@value='outofstock']")   
        this.saveButton = page.getByText("Save")
        this.cancelButton = page.getByText("Cancel")


    }
    async clickCreateProduct(page: Page,productIdval:string,productNameval:string,productDescriptionval:string,productPriceval:number,selectDropdownValue1:string): Promise<void> {
        await page.waitForTimeout(2000);
        await this.clickElement(this.createProduct)
        await page.waitForTimeout(2000);
        await this.enterText(this.productId, productIdval)
        await page.waitForTimeout(2000);
        await this.enterText(this.productName, productNameval)   
        await this.enterText(this.productDescription, productDescriptionval)
        await page.waitForTimeout(2000);
        await this.enterText(this.productprice, productPriceval.toString())
        await this.selectDropdownByText(this.selectDropdowncolor,selectDropdownValue1)
        await this.clickElement(this.activeCheckbox)
        //await this.clickElement(this.Instockradiobtn)
        await this.clickElement(this.saveButton)
    }
    async ischeckboxChecked(activeCheckbox: Locator): Promise<boolean> {
        const checked = await activeCheckbox.isChecked();
        console.log("Radio button is checked: " + checked);
        return checked;
    }

}
