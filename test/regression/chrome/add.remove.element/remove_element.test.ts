import AddRemoveElementsPage from "../../../pageobjects/remove.element.page.ts";
import TestAgent from "../../../../common/TestAgent";

describe('Add remove element', () => {

    const count: number = 2

    it('delete element', async () => {
        await TestAgent.baseStep('1. Open add remove element', async () => {
            await AddRemoveElementsPage.open()
        })

        await TestAgent.baseStep('Add element button should be displayed', async () => {
            await expect(AddRemoveElementsPage.addElementButton)
                .toHaveTextContaining("Add Element")
        })

        await TestAgent.baseStep('2. Add new element', async () => {
            await AddRemoveElementsPage.addNewElement()
        })

        await TestAgent.baseStep('See delete button', async () => {
            await expect(AddRemoveElementsPage.deleteElementButton)
                .toHaveTextContaining("Delete")
        })

        await TestAgent.baseStep('3. delete element', async () => {
            await AddRemoveElementsPage.deleteElement()
        })

        await TestAgent.baseStep('Delete button should be not displayed', async () => {
            await expect(AddRemoveElementsPage.deleteElementButton).not.toBeDisplayed()
        })

        await TestAgent.baseStep(`4. Create ${count} element`, async () => {
            await AddRemoveElementsPage.addNewElementForCount(count)
        })

        await TestAgent.baseStep(`Element count should be ${count}` , async () => {
            await expect(await AddRemoveElementsPage.deleteElementButton.length)
                .toEqual(count)
        })

        await TestAgent.baseStep(`5. Delete 1 element` , async () => {
            await AddRemoveElementsPage.deleteElementForCount(1)
        })

        await TestAgent.baseStep(`Element count should be 1` , async () => {
            await expect(await AddRemoveElementsPage.deleteElementButton.length)
                .toEqual(1)
        })
    })
})

