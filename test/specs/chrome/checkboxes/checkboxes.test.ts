import CheckboxesPage from "../../../pageobjects/checkboxes.page";

describe('Challenging DOM', () => {
    it('check element color', async () => {
        await CheckboxesPage.open()
        await CheckboxesPage.toggleCheckbox(1, true)
        await CheckboxesPage.toggleCheckbox(2, true)

        await CheckboxesPage.checkCheckbox(1, true)
        await CheckboxesPage.checkCheckbox(2, true)

        await CheckboxesPage.toggleCheckbox(1, false)
        await CheckboxesPage.toggleCheckbox(2, false)

        await CheckboxesPage.checkCheckbox(1, false)
        await CheckboxesPage.checkCheckbox(2, false)
    })
})