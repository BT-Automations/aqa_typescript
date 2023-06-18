import EntryAdPage from "../../../pageobjects/entry.ad.page";
import {addStep} from "@wdio/allure-reporter"

describe('Entry Ad', () => {
    // it('entry ad test', async () => {
    //     await addStep('open entry ad page', async () => {
    //         await EntryAdPage.open()
    //     })
    //
    //     await addStep('wait For Modal Window Visibility', async () => {
    //         await EntryAdPage.waitForModalWindowVisibility()
    //     })
    //
    //     await addStep('close modal window', async () => {
    //         await EntryAdPage.closeModal()
    //     })
    //
    //     await addStep('Reopen modal window', async () => {
    //         await EntryAdPage.reopenModal(1)
    //     })
    //
    //     await EntryAdPage.waitForModalWindowVisibility()
    //     await EntryAdPage.closeModal()
    // });

    it('entry ad test', async () => {

        await addStep('open entry ad page')
        await EntryAdPage.open()

        await EntryAdPage.waitForModalWindowVisibility()

        await addStep('close modal window')
        await EntryAdPage.closeModal()

        await addStep('Reopen modal window')
        await EntryAdPage.reopenModal(1)

        await EntryAdPage.waitForModalWindowVisibility()
        await EntryAdPage.closeModal()
    });

    // it('entry ad test', async () => {
    //     await step('open entry ad page', async () => {
    //         await EntryAdPage.open()
    //     })
    // });
    // it('wait For Modal Window Visibility', async () => {
    //     await step('open entry ad page', async () => {
    //         await EntryAdPage.open()
    //     })
    // });
    // it('wait For Modal Window Visibility', async () => {
    //     await step('wait For Modal Window Visibility', async () => {
    //         await EntryAdPage.waitForModalWindowVisibility()
    //     })
    // });
    // it('close modal window', async () => {
    //     await step('close modal window', async () => {
    //         await EntryAdPage.closeModal()
    //     })
    // });
    // it('Reopen modal window', async () => {
    //     await step('Reopen modal window', async () => {
    //         await EntryAdPage.reopenModal(1)
    //     })
    // });
    // it('entry ad tes', async () => {
    //     await EntryAdPage.waitForModalWindowVisibility()
    //     await EntryAdPage.closeModal()
    // });
})