import Page from "./page";

class DynamicLoading extends Page {

    get example1() {
        return $('a[href="/dynamic_loading/1"]')
    }

    get example2() {
        return $('a[href="/dynamic_loading/2"]')
    }

    get startButton() {
        return $('#start button')
    }

    get titleExample() {
        return $('h4:nth-child(2)')
    }

    get loadingLine() {
        return $('div#loading')
    }

    get helloWorld() {
        return $('h4:nth-child(1)')
    }

    get finishLoading() {
        return $('div#finish')
    }

    open() {
        return super.open('dynamic_loading');
    }

    async waitForLoadingLineInvisible() {
        await this.loadingLine.waitUntil(
            async () => {
                return (
                    await this.loadingLine.getCSSProperty('display')).value === 'none'
            },
            {
                timeout: 15000,
                timeoutMsg: 'loading element should be not visible !'
            }
        )
    }
}

export default new DynamicLoading()