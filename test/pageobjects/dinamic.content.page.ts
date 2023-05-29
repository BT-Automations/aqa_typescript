import Page from "./page";

class DynamicContentPage extends Page {

    get clickHere () {
        return $('p a')
    }

    get content () {
        return $$('.large-10.columns:nth-child(2)')[2]
    }

    open() {
        return super.open('dynamic_content?with_content=static');
    }

    async checkDynamicContent (): Promise<number> {
        const text = await this.content.getText()
        await this.clickHere.click()

        let iter = await this.content.getText()
        let iteration = 0

        while (iter != text && iteration < 20) {
            iter = await this.content.getText()
            await this.clickHere.click()
            iteration++
        }

        return iteration
    }
}

export default new DynamicContentPage()