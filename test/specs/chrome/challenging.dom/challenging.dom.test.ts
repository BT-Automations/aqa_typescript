import ChallengingDomPage from "../../../pageobjects/challenging.dom.page";

describe('Challenging DOM', () => {
    it('check element color', async () => {
        await ChallengingDomPage.open()
        await ChallengingDomPage.checkElementColor()
    })

    it('check array title', async () => {
        const actualTitle = await ChallengingDomPage.getActualArrayTitle()
        expect(actualTitle).toEqual(ChallengingDomPage.getExpectTitle())
    });

    it('check array table', async () => {
        const actualTable = await ChallengingDomPage.getArrayTable()
        expect(actualTable).toEqual(ChallengingDomPage.getExpectTable())
    });
})