import Page from "./page";
import {browser} from "@wdio/globals";

class DigestAuthPage extends Page {


    open() {
        return super.open('digest_auth');
    }

    async setAlertValue(login: string, password: string | number) {
        const alert = await browser.getWindowHandles()
        await browser.switchToWindow(alert[0])
        // const alertText = await browser.sendAlertText('sdfgsgg')
        const alertTex = await browser.send({text: 'sdfgsgg'})
        const alertTe = await browser.sendAlertText('sdfgsgg')
        await browser
        // const log = alertText
        // await console.log(alertText)
        // await browser.sendAlertText(`${login}\n${password}`)
        const a = 0
    }
}

export default new DigestAuthPage()