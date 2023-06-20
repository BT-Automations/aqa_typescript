import EntryAdPage from "../../../pageobjects/entry.ad.page";
import TestAgent from "../../../../common/TestAgent";
import AllureReporter from "@wdio/allure-reporter";
import {Status} from "allure-js-commons";

describe('Suite', () => {
    it('Entry ad test', async () => {
        await AllureReporter.startStep('Entry ad test')

        await TestAgent.baseStep('1. Open entry ad page', async () => {
            await EntryAdPage.open()
        })

        await TestAgent.baseStep('2. Wait For Modal Window Visibility', async () => {
            await EntryAdPage.waitForModalWindowVisibility()
            await EntryAdPage.closeModal()
        })

        await TestAgent.baseStep('3. Reopen modal window 5 times', async () => {
            await EntryAdPage.reopenModal(5)
        })

        await TestAgent.baseStep('4. Wait For Modal Window Visibility', async () => {
            await EntryAdPage.waitForModalWindowVisibility()
            await EntryAdPage.closeModal()
        })

        await AllureReporter.endStep(Status.PASSED)
    });
})