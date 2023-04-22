import Page from "./page";

class AbTestPage extends Page {
    get parTextElement() {
        return $('.example p')
    }

    async open() {
        await super.open('abtest');
    }

    async checkParTextElementContainText(text: string) {
        const actualText = await this.parTextElement.getText()
        await expect(actualText).toEqual(text)
    }
}

export default new AbTestPage()