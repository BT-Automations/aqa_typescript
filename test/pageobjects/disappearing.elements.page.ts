import Page from "./page";

class DisappearingElementsPage extends Page {
    HOME_PAGE_TITLE: string = 'The Internet'
    DISAPPEARING_ELEMENTS: string = 'disappearing_elements'

    get homeButton() {
        return $('a[href="/"]')
    }

    get aboutButton() {
        return $('a[href="/about/"]')
    }

    get contactUsButton() {
        return $('a[href="/contact-us/"]')
    }

    get portfolioButton() {
        return $('a[href="/portfolio/"]')
    }

    get homeTitle() {
        return $('h1.heading')
    }

    get notFoundPage() {
        return $('h1=Not Found')
    }

    async open() {
        return super.open(this.DISAPPEARING_ELEMENTS)
    }

    async checkHomeTitle() {
        expect(await this.homeTitle.getTitle()).toEqual(this.HOME_PAGE_TITLE)
    }

    async checkNotFoundPage() {
        expect(await this.notFoundPage.getText()).toEqual('Not Found')
    }

    async openHomePage() {
        await this.homeButton.click()
        await this.checkHomeTitle()
        await this.open()
    }

    async clickAndCheckAboutButton() {
        await this.aboutButton.click()
        await this.checkNotFoundPage()
        await this.open()
    }

    async clickAndCheckContactUsButton() {
        await this.contactUsButton.click()
        await this.checkNotFoundPage()
        await this.open()
    }

    async clickAndCheckPortfolioButton() {
        await this.portfolioButton.click()
        await this.checkNotFoundPage()
        await this.open()
    }
}

export default new DisappearingElementsPage()