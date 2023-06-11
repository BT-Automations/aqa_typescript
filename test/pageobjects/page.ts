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
    public getLogger = logger
    private url: string = 'https://the-internet.herokuapp.com/'

    public open (path: string) {
        return browser.url(this.url + path)
    }
}
