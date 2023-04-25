import Page from "./page";

class CheckboxesPage extends Page {

    checkbox(checkbox: number) {
        return $$(`input`)[checkbox - 1]
    }

    open() {
        return super.open('checkboxes');
    }

    async toggleCheckbox(number: number, isChecked: boolean) {
        const checkbox = this.checkbox(number)

        if (!await checkbox.isSelected() && isChecked) {
            await checkbox.click()
        } else if (await checkbox.isSelected() && !isChecked) {
            await checkbox.click()
        }
    }

    async checkCheckbox(number: number, isChecked: boolean) {
        const checkboxState = this.checkbox(number)
        expect(await checkboxState.isSelected()).toEqual(isChecked)
    }
}

export default new CheckboxesPage()