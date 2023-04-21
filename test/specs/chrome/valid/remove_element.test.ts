import AddRemoveElementsPage from "../../../pageobjects/remove.element.page.ts";

describe('Add remove element', () => {

    const count: number = 2

    it('delete element', async () => {
        await AddRemoveElementsPage.open()
        await expect(AddRemoveElementsPage.addElementButton)
            .toHaveTextContaining("Add Element")

        await AddRemoveElementsPage.addNewElement()
        await expect(AddRemoveElementsPage.deleteElementButton)
            .toHaveTextContaining("Delete")

        await AddRemoveElementsPage.deleteElement()
        await expect(AddRemoveElementsPage.deleteElementButton).not.toBeDisplayed()

        await AddRemoveElementsPage.addNewElementForCount(count)
        await expect(await AddRemoveElementsPage.deleteElementButton.length)
            .toEqual(count)

        await AddRemoveElementsPage.deleteElementForCount(1)
        await expect(await AddRemoveElementsPage.deleteElementButton.length)
            .toEqual(1)
    })
})

