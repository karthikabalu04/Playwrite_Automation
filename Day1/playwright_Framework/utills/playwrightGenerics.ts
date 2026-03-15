import { test, expect, Locator, Page, TestInfo } from '@playwright/test';
export class playwrightGenerics 
{

    async enterText(element: Locator, entervalue: string): Promise<void> {
        await element.fill(entervalue);
        console.log('Enter the value', entervalue);
    }
    async clickElement(element: Locator): Promise<void> {
        await element.click();
       

    }
    async verifyText(element: Locator, expectedText: string): Promise<void> {
        const actualText = await element.textContent();
        console.log('Expected Text: ', expectedText);
        console.log('Actual Text: ', actualText);
        expect(actualText).toBe(expectedText);
    }

    async verifyElementIsVisible(element: Locator): Promise<void> {
        const isVisible = await element.isVisible();
        console.log('Element is visible: ', isVisible);
        expect(isVisible).toBe(true);
    }
    async verifyElementIsHidden(element: Locator): Promise<void> {
        const isHidden = await element.isHidden();
        console.log('Element is hidden: ', isHidden);
        expect(isHidden).toBe(true);
    }
    async verifyElementIsEnabled(element: Locator): Promise<void> {
        const isEnabled = await element.isEnabled();
        console.log('Element is enabled: ', isEnabled);
        expect(isEnabled).toBe(true);
    }
    async verifyElementIsDisabled(element: Locator): Promise<void> {
        const isDisabled = await element.isDisabled();
        console.log('Element is disabled: ', isDisabled);
        expect(isDisabled).toBe(true);
    }
    async verifyElementIsChecked(element: Locator): Promise<void> {
        const isChecked = await element.isChecked();
        console.log('Element is checked: ', isChecked);
        expect(isChecked).toBe(true);
    }
    async verifyElementIsNotChecked(element: Locator): Promise<void> {
        const isChecked = await element.isChecked();
        console.log('Element is not checked: ', isChecked);
        expect(isChecked).toBe(false);
    }
    async browserNavigate(page: Page, url: string): Promise<void> {
        await page.goto(url);
        await page.waitForTimeout(3000); 
        console.log('Navigated to the URL: ', url);
    }
    async getCurrentURL(page: Page): Promise<string> {
        const currentURL = page.url();
        console.log('Current URL: ', currentURL);
        return currentURL;
    }
    async getPageTitle(page: Page): Promise<string> {
        const pageTitle = await page.title();
        console.log('Page Title: ', pageTitle);
        return pageTitle;
    }

    async browserBack(page: Page): Promise<void> {
        await page.goBack();
        console.log('Navigated back to the previous page');
    }

    async browserForward(page: Page): Promise<void> {
        await page.goForward();
        console.log('Navigated forward to the next page');
    }

    async browserRefresh(page: Page): Promise<void> {
        await page.reload();
        console.log('Page got refreshed');
    }
    async browserClose(page: Page): Promise<void> {
        await page.close();
        console.log('Browser got closed');
    }

    async selectDropdownByText(element: Locator, visibleText: string): Promise<void> {
        await element.selectOption({ label: visibleText });
        console.log('Selected dropdown option by visible text: ', visibleText);
    }
    async alertAccept(page: Page): Promise<void> {
        page.on('dialog', async (dialog) => {
            await dialog.accept();
            console.log('Alert message: ', dialog.message());
        });
    }
}
