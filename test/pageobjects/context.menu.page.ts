import Page from "./page";

import {browser, expect} from "@wdio/globals";

class ContextMenuPage extends Page {
    private get rectangleElement() {
        return $$('#hot-spot')[0]
    }

    open() {
        return super.open('context_menu');
    }

    async rightCLickOnRectangle() {
        const rect = await this.rectangleElement
        const posX= await rect.getLocation('x')
        const posY= await rect.getLocation('y')

        // @ts-ignore
        await browser.action('pointer', {
            parameters: {
                pointerType: 'mouse'
            }
        }).move({duration: 0, rect, x: Math.ceil(posX), y: Math.ceil(posY)})
            .down('right')
            .perform()
    }

    async alertMustContainTheText(text: string) {
        const alertText = await browser.getAlertText()
        expect(alertText).toEqual(text)
        await browser.acceptAlert()
    }

    async checkAlertIsClosed() {
        const isAlertOpen = await browser.isAlertOpen()
        expect(isAlertOpen).not.toBeTruthy()
    }
}

export default new ContextMenuPage()