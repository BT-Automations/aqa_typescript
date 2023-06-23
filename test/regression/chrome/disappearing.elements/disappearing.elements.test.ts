import DisappearingElementsPage from "../../../pageobjects/disappearing.elements.page";

describe('disappearing elements', () => {
    it('disappearing elements', async () => {
        await DisappearingElementsPage.open()

        await DisappearingElementsPage.openHomePage()

        await DisappearingElementsPage.clickAndCheckAboutButton()

        await DisappearingElementsPage.clickAndCheckContactUsButton()

        await DisappearingElementsPage.clickAndCheckPortfolioButton()
    })
})