import AbTestPage from "../../../pageobjects/ab.test.page";

describe('A/B Test Variation 1', () => {

    const text: string = 'Also known as split testing. ' +
        'This is a way in which businesses are able to ' +
        'simultaneously test and learn different versions ' +
        'of a page to see which text and/or functionality ' +
        'works best towards a desired outcome ' +
        '(e.g. a user action such as a click-through).'

    it('Page contain text...', async () => {
        await AbTestPage.open()
        await AbTestPage.checkParTextElementContainText(text)
    })
})