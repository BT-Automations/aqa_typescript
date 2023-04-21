import logger, {addStep, step} from "@wdio/allure-reporter"

class TestAgent {
    async step(title: string, fn: Function) {
        await logger.addStep(title, fn)
    }

    async baseStep(title: string, fn: Function) {
        await logger.step(title, fn)
    }
}

export async function myStep(title: string, fn: Function) {
    await addStep(title, fn)
}

export async function baseStep(title: string, fn: Function) {
    await step(title, fn)
}

export default new TestAgent()