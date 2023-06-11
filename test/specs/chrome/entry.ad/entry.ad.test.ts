import EntryAdPage from "../../../pageobjects/entry.ad.page";

describe('Entry Ad', () => {
    it('entry ad test', async () => {
        await EntryAdPage.getLogger.step('open entry ad page', async () => {
            await EntryAdPage.open()
        })

        await EntryAdPage.getLogger.step('wait For Modal Window Visibility', async () => {
            await EntryAdPage.waitForModalWindowVisibility()
        })

        await EntryAdPage.getLogger.step('close modal', async () => {
            await EntryAdPage.closeModal()
        })

        await EntryAdPage.reopenModal(1)
        await EntryAdPage.waitForModalWindowVisibility()
        await EntryAdPage.closeModal()

    });
})