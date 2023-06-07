import DropdownPage from "../../../pageobjects/dropdown.page";

describe('Dropdown', () => {
    it('Select dropdown element', async () => {
        await DropdownPage.open()

        await DropdownPage.selectOption(DropdownPage.selectAnOption,
            DropdownPage.PLEASE_SELECT_AN_OPTION)

        await DropdownPage.selectOption(DropdownPage.option1, DropdownPage.OPTION_1)
        await DropdownPage.selectOption(DropdownPage.option2, DropdownPage.OPTION_2)
    })
})