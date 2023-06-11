import Page from "./page";

class EntryAdPage extends Page {

    private THIS_IS_A_MODAL_WINDOWS = 'THIS IS A MODAL WINDOW'

    private get clickHereButton() {
        return $('a#restart-ad')
    }

    private get modalWindow() {
        return $('div.modal')
    }

    private get modalWindowTitle() {
        return this.modalWindow.$('div.modal-title > h3')
    }

    private get modalWindowCloseButton() {
        return this.modalWindow.$('div.modal-footer > p')
    }

    open() {
        return super.open('entry_ad');
    }

    async waitForModalWindowVisibility() {
        await this.modalWindow.waitUntil(
            async () => {
                return (
                    await this.modalWindowTitle.getText() === this.THIS_IS_A_MODAL_WINDOWS
                )
            },
            {
                timeout: 15000,
                timeoutMsg: `Modal window title should be '${this.THIS_IS_A_MODAL_WINDOWS}'`
            }
        )
    }

    async reopenModal(count: number) {
        for (let i = 0; i < count; i++) {
            // await this.clickHereButton.click()
            await this.doClick(this.clickHereButton)
        }
    }

    async closeModal() {
        // await this.modalWindowCloseButton.click()
        await this.doClick(this.modalWindowCloseButton)
        expect(await this.modalWindow.isDisplayed()).not.toBeDisplayed()
    }
}

export default new EntryAdPage()