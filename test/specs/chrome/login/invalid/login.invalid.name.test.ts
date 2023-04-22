import LoginPage from '../../../../pageobjects/login.page.ts'
import SecurePage from '../../../../pageobjects/secure.page.ts'
import login from '../../../../../data/login.json' assert {type: "json"}

describe('My Login application', () => {
    it('should login with invalid user name credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(login.invalid.username, login.invalid.password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!'
        )
    })
})