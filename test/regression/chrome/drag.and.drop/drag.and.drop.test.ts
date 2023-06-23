import DragAndDropPage from "../../../pageobjects/drag.and.drop.page";

describe('', () => {
    it('', async () => {
        await DragAndDropPage.open()

        await DragAndDropPage.checkOnDragAndDropPage()

        await DragAndDropPage.dragAndDropBox()

        await driver.pause(3000)
    })
})