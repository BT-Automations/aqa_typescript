import logger, {addStep} from "@wdio/allure-reporter"
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
        await addStep(`Open url: '${this.url + path}'`)
        await browser.url(this.url + path);
        await browser.takeScreenshot()
    }

    async doClick(element: WebdriverIO['$']) {
        await addStep(`Click ${await (element.selector)} element`)
        await element.click()
        await browser.takeScreenshot()
    }
}