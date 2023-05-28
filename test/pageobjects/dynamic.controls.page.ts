import Page from "./page";
import {browser} from "@wdio/globals";

class DynamicControlsPage extends Page {

    get remove() {
        return $('button=Remove')
    }

    get add() {
        return $('button=Add')
    }

    get checkbox() {
        return $('div input[type="checkbox"]')
    }

    get input() {
        return $('input[type="text"]')
    }

    get enable() {
        return $('button=Enable')
    }

    get disable() {
        return $('button=Disable')
    }

    async clickButton(button: WebdriverIO.Browser["$"]) {
        await button.click()
    }

    async open() {
        return super.open('dynamic_controls');
    }

    async checkboxIsDisplayed(isDisplayed: boolean) {
        if (isDisplayed) {
            await this.checkbox.waitUntil(async () => {
                    return (await this.checkbox.isDisplayed()) === true
                },
                {
                    timeout: 30000,
                    timeoutMsg: 'хуйня какая-то'
                })
        } else {
            await this.checkbox.waitUntil(async () => {
                    return (await this.checkbox.isDisplayed()) === false
                },
                {
                    timeout: 30000,
                    timeoutMsg: 'хуйня какая-то'
                })
        }

        await expect(await this.checkbox.isDisplayed()).toEqual(isDisplayed)
    }

    async checkboxIsChecked(isChecked: boolean) {
        expect(await this.checkbox.isSelected()).toEqual(isChecked)
    }

    async sendText(text: string) {
        await this.input.waitUntil(async () => {
            return (await this.input.isDisplayed()) === true && (await this.input.isEnabled()) === true
        },
            {
                timeout: 10000,
                timeoutMsg: 'хуйня какая-то'
            })
        await this.input.setValue(text)
    }
}

export default new DynamicControlsPage()