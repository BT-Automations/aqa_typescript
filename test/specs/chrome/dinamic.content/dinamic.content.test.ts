import DinamicContentPage from "../../../pageobjects/dinamic.content.page";

describe('', () => {
    it('should ', async () => {
        await DinamicContentPage.open()
        expect(await DinamicContentPage.checkDinamicContent()).toEqual(20)
    });
})