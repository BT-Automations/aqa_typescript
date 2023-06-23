import Page from "./page";
import TestAgent from "../../common/TestAgent";

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
    }

    async addNewElement() {
        await TestAgent.baseStep('add new element', async () => {
            await this.addNewElementForCount(1)
        })
    }

    async addNewElementForCount(count: number) {
        await TestAgent.baseStep(`Add new element of ${count} count`, async () => {
            for (let i = 0; i < count; i++) {
                await this.doClick(this.addElementButton)
            }
        })
    }

    async deleteElement(item: number = 0) {
        const setCount = item === 0 ? 0 : -1
        await TestAgent.baseStep('delete element', async () => {
            await this.waitForExist(this.deleteElementButton[item - setCount])
            await this.doClick(this.deleteElementButton[item - setCount])
        })
    }

    async deleteElementForCount(count: number) {
        await TestAgent.baseStep(`Delete element of ${count} count`, async () => {
            for (let i = 0; i < count; i++) {
                await this.deleteElement(0)
            }
        })
    }
}

export default new AddRemoveElementsPage()