import EntryAdPage from "../../../pageobjects/entry.ad.page";
import {step} from "@wdio/allure-reporter"

describe('Entry Ad', () => {
    it('entry ad test', async () => {
        await step('open entry ad page', async () => {
            await EntryAdPage.open()
            await step('open entry ad page', async () => {
                await EntryAdPage.open()
            })
        })

        await step('wait For Modal Window Visibility', async () => {
            await EntryAdPage.waitForModalWindowVisibility()
        })

        await step('close modal window', async () => {
            await EntryAdPage.closeModal()
        })

        await step('Reopen modal window', async () => {
            await EntryAdPage.reopenModal(1)
        })

        await EntryAdPage.waitForModalWindowVisibility()
        await EntryAdPage.closeModal()
    });
})