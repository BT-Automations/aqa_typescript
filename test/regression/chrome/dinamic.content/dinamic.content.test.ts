import DynamicContentPage from "../../../pageobjects/dinamic.content.page";

describe('', () => {
    it('should ', async () => {
        await DynamicContentPage.open()
        expect(await DynamicContentPage.checkDynamicContent()).toEqual(20)
    });
})