import {browser} from "@wdio/globals"
import $ from "webdriverio"
import TestAgent from "../../common/TestAgent";
import {TIMEOUT_VISIBILITY} from "../../common/Timeouts";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    private url: string = 'https://the-internet.herokuapp.com/'

    public async open(path: string) {
        await TestAgent.baseStep(`Open url: '${this.url + path}'`, async () => {
            await browser.url(this.url + path);
        })
    }

    async doClick(element: WebdriverIO.Element | WebdriverIO.Element[$]) {
        await TestAgent.baseStep(`Click ${await element.selector} element`, async () => {
            await element.click()
        })
    }

    async doubleClick(element: WebdriverIO.Element | WebdriverIO.Element[$]) {
        await TestAgent.baseStep(`Double click ${await element.selector} element`, async () => {
            await element.doubleClick()
        })
    }

    async waitForExist(element: WebdriverIO.Element | WebdriverIO.Element[$]) {
        await TestAgent.baseStep(`Wait for ${await element.selector} exist`, async () => {
            await element.waitForExist({
                timeout: TIMEOUT_VISIBILITY,
                interval:200,
                timeoutMsg: `${element.selector} should be visible !`})
        })
    }

    async waitForElementVisible(element: WebdriverIO.Element | WebdriverIO.Element[$]) {
        await TestAgent.baseStep(`Wait for ${await element.selector} visibility`, async () => {
            await element.waitUntil(
                async () => {
                    return (
                        await element.isDisplayed() === true
                    )
                },
                {
                    timeout: 15000,
                    timeoutMsg: `${element.selector} should be visible !`
                }
            )
        })
    }
}