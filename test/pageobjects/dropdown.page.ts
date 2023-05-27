import Page from "./page";

class DropdownPage extends Page {

    PLEASE_SELECT_AN_OPTION: string = 'Please select an option'
    OPTION_1: string = 'Option 1'
    OPTION_2: string = 'Option 2'

    get dropdown() {
        return $('select#dropdown')
    }

    get selectAnOption() {
        return $('option:nth-child(1)')
    }

    get option1() {
        return $('option:nth-child(2)')
    }

    get option2() {
        return $('option:nth-child(3)')
    }

    async open() {
        return super.open('dropdown')
    }

    //@ts-ignore
    async selectOption(option: $ElementCommands["$"], textContains: string) {
        await this.dropdown.click()
        await option.click()
        await this.dropdown.click()

        //@ts-ignore
        expect(await option.isSelected()).toEqual(true)
        //@ts-ignore
        expect(await option.getText()).toEqual(textContains)

        await driver.pause(2000)
    }
}

export default new DropdownPage()