import EntryAdPage from "../../../pageobjects/entry.ad.page";
import allure, {step} from "@wdio/allure-reporter"

describe('Entry Ad', () => {
    allure.addLabel('Entry Ad', 'BT-1')
    step('', () => {

    })
    it('entry ad test', async () => {
        await step('open entry ad page', async () => {
            await EntryAdPage.open()
        })

        await allure.step('wait For Modal Window Visibility', async () => {
            await EntryAdPage.waitForModalWindowVisibility()
        })

        await EntryAdPage.Logger.step('close modal window', async () => {
            await EntryAdPage.closeModal()
        })

        await EntryAdPage.Logger.step('Reopen modal window', async () => {
            await EntryAdPage.reopenModal(1)
        })

        await EntryAdPage.waitForModalWindowVisibility()
        await EntryAdPage.closeModal()
    });
})