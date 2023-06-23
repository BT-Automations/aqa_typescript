import AllureReport from "@wdio/allure-reporter"
import {browser} from "@wdio/globals"
import {Status} from "allure-js-commons"
import Logger from "./Logger";

class TestAgent {
    async baseStep(title: string, fn: Function) {
        await AllureReport.startStep(title);
        Logger.addLog('INFO', 'pending', title, 'performing...')

        try {
            await fn()
            await browser.takeScreenshot()
            await AllureReport.endStep(Status.PASSED);
            Logger.addLog('INFO', 'pending', title, 'performed successful!')
        } catch (error) {
            await browser.takeScreenshot()
            await AllureReport.addAttachment('ERROR', error + '', 'text/plain')
            await AllureReport.endStep(Status.FAILED);
            Logger.addLog('ERROR', 'bright fail', title, 'performed unsuccessful!')
            throw new Error(error + '')
        }
    }
}

export async function step(title: string, fn: Function) {
    try {
        await AllureReport.step(title, fn);
        await browser.takeScreenshot();
        await AllureReport.endStep(Status.PASSED);
    } catch (e) {
        await browser.takeScreenshot();
        await AllureReport.addAttachment('Error', e + '', 'text/plain');
        await AllureReport.endStep(Status.FAILED);
        return new Error();
    }
}

export default new TestAgent()