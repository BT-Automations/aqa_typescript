import AllureReporter, {endStep, startStep, step} from "@wdio/allure-reporter"
import {browser} from "@wdio/globals";
import {Status} from "allure-js-commons";

class TestAgent {
    async baseStep(title: string, fn: Function) {
        await startStep(title);
        try {
            await fn()
            await browser.takeScreenshot()
            await endStep(Status.PASSED);
        } catch (e) {
            await AllureReporter.addAttachment('Error', e + '', 'text/plain')
            await endStep(Status.FAILED);
            return new Error()
        }

    }
}

export async function step(title: string, fn) {
    try {
        await step(title, fn);
        await browser.takeScreenshot()
        await endStep(Status.PASSED);
    } catch (e) {
        await AllureReporter.addAttachment('Error', e + '', 'text/plain')
        await endStep(Status.FAILED);
        return new Error()
    }
}

export default new TestAgent()