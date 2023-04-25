import ContextMenuPage from "../../../pageobjects/context.menu.page";

describe('Context menu', () => {

    const ALERT_TEXT = 'You selected a context menu'

    it('check context menu', async () => {
        await ContextMenuPage.open()
        await ContextMenuPage.rightCLickOnRectangle()

        await ContextMenuPage.alertMustContainTheText(ALERT_TEXT)
        await ContextMenuPage.checkAlertIsClosed()
    })
})