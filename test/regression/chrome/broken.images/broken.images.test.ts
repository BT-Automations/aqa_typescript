import BrokenImagesPage from "../../../pageobjects/broken.images.page";
import TestAgent from "../../../../common/TestAgent";

describe('Broken images', () => {

    const counts: number = 2

    it('broken images', async () => {
        await TestAgent.baseStep('Open broken images page', async () => {
            await BrokenImagesPage.open()
        })

        await TestAgent.baseStep(`Check broken images ${counts}`, async () => {
            await BrokenImagesPage.checkBrokenImageCounts(counts)
        })
    })
})