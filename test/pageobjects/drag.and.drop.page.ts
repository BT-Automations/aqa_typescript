import Page from "./page";
// import {browser} from "@wdio/globals";

class DragAndDropPage extends Page {
    private DRAG_AND_DROP_TITLE: string = 'Drag and Drop'

    private get textH3 () {
        return $('h3=Drag and Drop')
    }

    private get boxA () {
        return $('#column-a')
    }

    private get boxB () {
        return $('#column-b')
    }

    open(){
        return super.open('drag_and_drop');
    }

    async checkOnDragAndDropPage () {
        expect(await this.textH3.getText()).toEqual(this.DRAG_AND_DROP_TITLE)
    }

    async dragAndDropBox () {
        await this.boxA.dragAndDrop(await this.boxB)
    }

    async drop() {
        const firstX = await this.boxA.getLocation('x')
        const firstY = await this.boxA.getLocation('y')
        const posX = await this.boxB.getLocation('x')
        const posY = await this.boxB.getLocation('y')

        // @ts-ignore
        await browser.action('pointer', {
            parameters: {
                pointerType: 'mouse'
            }
        }).move(Math.ceil(firstX), Math.ceil(firstY))
            .down('left')
            .move(Math.ceil(posX), Math.ceil(posY))
            .up('left')
            .perform()
    }
}

export default new DragAndDropPage()