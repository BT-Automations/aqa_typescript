import Page from "./page";
import Assertions from "../../common/Assertions";
import TestAgent from "../../common/TestAgent";

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
        await TestAgent.baseStep('Wait For Modal Window Visibility', async () => {
            await this.modalWindow.waitUntil(
                async () => {
                    return (
                        await this.modalWindowTitle.getText() === this.THIS_IS_A_MODAL_WINDOWS
                    )
                },
                {
                    timeout: 15000,
                    timeoutMsg: `Modal window should be visible`
                }
            )
        })
    }

    async reopenModal(count: number) {
        await TestAgent.baseStep(`Reopen modal window ${count} times`, async () => {
            for (let i = 0; i < count; i++) {
                await this.doClick(this.clickHereButton)
            }
        })

    }

    async closeModal() {
        await TestAgent.baseStep('Close modal window', async () => {
            await this.doClick(this.modalWindowCloseButton)
            await Assertions.notToBeDisplayed(this.modalWindow)
        })
    }
}

export default new EntryAdPage()