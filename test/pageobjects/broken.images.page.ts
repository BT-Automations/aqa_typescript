import Page from "./page";
import TestAgent from "../../common/TestAgent";

class BrokenImagesPage extends Page {
    get imageElement() {
        // @ts-ignore
        return $$('.example img')
    }

    async open() {
        await super.open('broken_images');
    }

    async checkBrokenImageCounts(count: number) {
        let brokenCount: number = 0

        await TestAgent.baseStep(`broken images counts should be ${count}`, async () => {
            for (let i = 0; i < await this.imageElement.length; i++) {
                const elem = await this.imageElement[i].getAttribute('src')

                if (await elem.match(/img\/avatar.*\.jpg/g) === null) {
                    brokenCount++
                }
            }

            await expect(brokenCount).toEqual(count)
        })
    }
}

export default new BrokenImagesPage()