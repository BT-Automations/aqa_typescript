import DigestAuthPage from "../../../pageobjects/digest.auth.page";

describe('Digest auth', () => {
    it('digest auth', async () => {
        await DigestAuthPage.open()
        await DigestAuthPage.setAlertValue('user', 12345)
    })
})