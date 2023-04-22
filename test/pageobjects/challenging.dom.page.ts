import {blue, green, red} from "../../utils/color.ts";
import Page from "./page";

class ChallengingDomPage extends Page {
    private get buttonElement() {
        return $('.button')
    }

    private get buttonAlertElement() {
        return $('.button.alert')
    }

    private get buttonSuccessElement() {
        return $('.button.success')
    }

    private get tableTitle() {
        return $$('thead tr th')
    }

    table(line: number, row: number) {
        return $(`tr:nth-child(${line}) td:nth-child(${row})`)
    }

    async open() {
        await super.open('challenging_dom');
    }

    async checkElementColor() {
        const btnElement = await this.buttonElement.getCSSProperty('background-color')
        const btnAlertElement = await this.buttonAlertElement.getCSSProperty('background-color')
        const btnSuccessElement = await this.buttonSuccessElement.getCSSProperty('background-color')

        await expect(btnElement.value).toEqual(blue)
        await expect(btnAlertElement.value).toEqual(red)
        await expect(btnSuccessElement.value).toEqual(green)
    }

    getExpectTitle(): string[] {
        return ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Diceret', 'Action']
    }

    getExpectTable(): string[][] {
        return [
            ['Iuvaret0', 'Apeirian0', 'Adipisci0', 'Definiebas0', 'Consequuntur0', 'Phaedrum0'],
            ['Iuvaret1', 'Apeirian1', 'Adipisci1', 'Definiebas1', 'Consequuntur1', 'Phaedrum1'],
            ['Iuvaret2', 'Apeirian2', 'Adipisci2', 'Definiebas2', 'Consequuntur2', 'Phaedrum2'],
            ['Iuvaret3', 'Apeirian3', 'Adipisci3', 'Definiebas3', 'Consequuntur3', 'Phaedrum3'],
            ['Iuvaret4', 'Apeirian4', 'Adipisci4', 'Definiebas4', 'Consequuntur4', 'Phaedrum4'],
            ['Iuvaret5', 'Apeirian5', 'Adipisci5', 'Definiebas5', 'Consequuntur5', 'Phaedrum5'],
            ['Iuvaret6', 'Apeirian6', 'Adipisci6', 'Definiebas6', 'Consequuntur6', 'Phaedrum6'],
            ['Iuvaret7', 'Apeirian7', 'Adipisci7', 'Definiebas7', 'Consequuntur7', 'Phaedrum7'],
            ['Iuvaret8', 'Apeirian8', 'Adipisci8', 'Definiebas8', 'Consequuntur8', 'Phaedrum8'],
            ['Iuvaret9', 'Apeirian9', 'Adipisci9', 'Definiebas9', 'Consequuntur9', 'Phaedrum9'],
        ]
    }

    async getActualArrayTitle(): Promise<string[]> {
        const actualResult: string[] = []

        const array = await this.tableTitle

        for (const item of array) {
            actualResult.push(await item.getText())
        }

        return actualResult
    }

    async getArrayTable() {
        const array: string[][] = []

        for (let i = 1; i <= 10; i++) {
            let arr: string[] = []

            for (let a = 1; a <= 6; a++) {
                arr.push(await this.table(i, a).getText())
            }

            array.push(arr)
            arr = []
        }

        return array
    }
}

export default new ChallengingDomPage()