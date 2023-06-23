import color from 'mocha'

const colors = color.reporters.Base.color

class Logger {
    addLog (status: string, color: string = 'pending', message: string, perform: string) {
        let date = new Date()

        console.log(`${colors(color, status)} [${date.getDate()}.${date.getUTCDay()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] STEP -> [ ${message} ] -> ${colors(color === 'pending' ? 'green' : 'bright fail', perform)}`)
    }
}

export default new Logger()
