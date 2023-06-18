import EntryAdPage from "../../../pageobjects/entry.ad.page";
import allure, {addStep, step} from "@wdio/allure-reporter"
import {baseStep} from "../../../../common/TestAgent";

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

        await baseStep('', async () => {

        })

        allure.addAttachment('addAttachment', {}, '')
        allure.startStep('startStep')
        allure.addLabel('addLabel', 'addLabel')
        allure.addAllureId('addAllureId')
        allure.addArgument('addArgument', 'addArgument')
        allure.addEnvironment('addEnvironment', 'addEnvironment')
        allure.addEpic('addEpic')
        allure.addFeature('addFeature')
        allure.addLink('http://localhost:8080', 'addLink')
        await step('open', async () => {
            await EntryAdPage.open()
        })

        await step('Wait modal', async () => {
            await EntryAdPage.waitForModalWindowVisibility()
        })

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