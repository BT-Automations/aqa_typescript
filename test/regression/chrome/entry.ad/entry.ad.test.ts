import EntryAdPage from "../../../pageobjects/entry.ad.page";
import TestAgent from "../../../../common/TestAgent";

describe('Suite', () => {
    it('Entry ad test', async () => {
        await TestAgent.baseStep('1. Open entry ad page', async () => {
            await EntryAdPage.open()
        })

        await TestAgent.baseStep('2. Wait For Modal Window Visibility', async () => {
            await EntryAdPage.waitForModalWindowVisibility()
            await EntryAdPage.closeModal()
        })

        await TestAgent.baseStep('3. Reopen modal window 5 times', async () => {
            await EntryAdPage.reopenModal(1)
        })

        await TestAgent.baseStep('4. Wait For Modal Window Visibility', async () => {
            await EntryAdPage.waitForModalWindowVisibility()
            await EntryAdPage.closeModal()
        })
    });
})