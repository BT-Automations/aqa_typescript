import DynamicControlsPage from "../../../pageobjects/dynamic.controls.page";

describe('', () => {
    it('should ', async () => {
        const INPUT_TEXT = 'SEX'

        await DynamicControlsPage.open()

        await DynamicControlsPage.checkboxIsDisplayed(true)
        await DynamicControlsPage.checkboxIsChecked(false)
        await DynamicControlsPage.clickButton(DynamicControlsPage.remove)
        await DynamicControlsPage.checkboxIsDisplayed(false)
        await DynamicControlsPage.clickButton(DynamicControlsPage.add)
        await DynamicControlsPage.checkbox.click()
        await DynamicControlsPage.checkboxIsChecked(true)

        expect(await DynamicControlsPage.input.isEnabled()).toEqual(false)
        await DynamicControlsPage.clickButton(DynamicControlsPage.enable)
        await DynamicControlsPage.sendText(INPUT_TEXT)
        expect(await DynamicControlsPage.input.isEnabled()).toEqual(true)
        expect(await DynamicControlsPage.input.getValue()).toEqual(INPUT_TEXT)
    });
})