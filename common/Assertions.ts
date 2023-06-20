class Assertions {
    async toEqual(actualResult: any, expectedResult: any) {
        await expect(actualResult).toEqual(expectedResult)
    }

    async notToBeDisplayed(element: any) {
        await expect(await element).not.toBeDisplayed()
    }
}

export default new Assertions()