import EntryAdPage from "../../../pageobjects/entry.ad.page";
import {addStep, step} from "@wdio/allure-reporter"
import {baseStep} from "../../../../common/TestAgent";

import logger from '@wdio/logger';

const log = logger('@wdio/cli');

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

    it('Entry ad test', async () => {

        await baseStep('', async () => {
            await EntryAdPage.open()
        })

        // await allure.addAttachment('addAttachment', {}, '')
        // await allure.startStep('startStep')
        // await allure.addLabel('addLabel', 'addLabel')
        // await allure.addAllureId('addAllureId')
        // await allure.addArgument('addArgument', 'addArgument')
        // await allure.addEnvironment('addEnvironment', 'addEnvironment')
        // await allure.addEpic('addEpic')
        // await allure.addFeature('addFeature')
        // await allure.addLink('http://localhost:8080', 'addLink')

        await step('open', async () => {
            await EntryAdPage.open()
        })

        log.log('Wait modal')

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