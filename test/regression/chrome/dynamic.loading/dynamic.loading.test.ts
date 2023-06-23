import DynamicLoadingPage from "../../../pageobjects/dynamic.loading.page";

describe('', () => {
    it('should', async () => {
        const array = [
            [await DynamicLoadingPage.example1, 'Example 1: Element on page that is hidden'],
            [await DynamicLoadingPage.example2, 'Example 2: Element rendered after the fact']
        ]

        for (const example of array) {
            await DynamicLoadingPage.open()

            await example.at(0).click()

            expect(await DynamicLoadingPage.titleExample.getText()).toEqual(example.at(1))

            await DynamicLoadingPage.startButton.click()
            await DynamicLoadingPage.waitForLoadingLineInvisible()

            expect(await DynamicLoadingPage.helloWorld.isDisplayed()).toBeTruthy()
        }
    });
})