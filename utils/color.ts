class Color {
    private readonly red: number
    private readonly green: number
    private readonly blue: number

    constructor(...rgb) {

        const map = []

        for (const element of rgb) {
            map.push(element)
        }

        if (map.length === 1) {
            const regexpRGB: RegExp = /.*\((?<red>\d{0,3}), (?<green>\d{0,3}), (?<blue>\d{0,3}).*\)/g
            const rgb = map[0].match(regexpRGB)

            const {red, green, blue} = rgb.match(regexpRGB.exec(rgb)).groups

            this.red = Number.parseInt(red)
            this.green = Number.parseInt(green)
            this.blue = Number.parseInt(blue)
        }

        if (map.length === 3) {
            this.red = Number.parseInt(map[0])
            this.green = Number.parseInt(map[1])
            this.blue = Number.parseInt(map[2])
        }
    }

    get getColor(): string {
        return `rgba(${this.red},${this.green},${this.blue},1)`
    }

    get getRed() {
        return this.red
    }

    get getGreen(): number {
        return this.green
    }

    get getBlue() {
        return this.blue
    }
}

export const red = new Color(198, 15, 19).getColor
export const green = new Color(93, 164, 35).getColor
export const blue = new Color(43, 166, 203).getColor