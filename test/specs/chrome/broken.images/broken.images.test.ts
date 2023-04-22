import BrokenImagesPage from "../../../pageobjects/broken.images.page";

describe('Broken images', () => {
    it('broken images', async () => {
        await BrokenImagesPage.open()
        await BrokenImagesPage.checkBrokenImageCounts(2)
    })
})