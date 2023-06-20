import Page from "./page";
import {addStep, step} from "@wdio/allure-reporter";

const path: string = 'add_remove_elements/'

class AddRemoveElementsPage extends Page {
    get addElementButton() {
        // return $$('button:nth-child(1)')
        return $('button=Add Element')
    }

    get deleteElementButton() {
        return $$('#elements button.added-manually')
    }

    async open() {
        await super.open(path)
        await browser.takeScreenshot();
    }

    async addNewElement() {
        await this.addNewElementForCount(1)
        await browser.takeScreenshot();
    }

    async addNewElementForCount(count: number) {
        addStep(`Add new element of ${count} count`)
        for (let i = 0; i < count; i++) {
            await this.addElementButton.click()
        }
        await browser.takeScreenshot();
    }

    async deleteElement(item: number = 0) {
        const setCount = item === 0 ? 0 : -1
        await this.deleteElementButton[item - setCount].waitForExist()
        await this.deleteElementButton[item - setCount].click()
        await browser.takeScreenshot();
    }

    async deleteElementForCount(count: number) {
        addStep(`Delete element of ${count} count`)
        await step('', async () => {

        })
        for (let i = 0; i < count; i++) {
            await this.deleteElement(0)
        }
        await browser.takeScreenshot();
    }
}

export default new AddRemoveElementsPage()