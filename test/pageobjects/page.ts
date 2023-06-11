import logger from "@wdio/allure-reporter"
import {browser} from "@wdio/globals"

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    public Logger = logger
    private url: string = 'https://the-internet.herokuapp.com/'

    public async open(path: string) {
        await this.Logger.step(`Open '${this.url + path}' element`, async () => {
            return browser.url(this.url + path)
        })
    }

    async doClick(element: WebdriverIO['$']) {
        await this.Logger.step(`Click ${await (element.selector)} element`, async () => {
            return element.click()
        })
    }
}
