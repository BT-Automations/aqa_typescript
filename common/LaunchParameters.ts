import {SELENOID_SESSION_TIMEOUTS} from "./Timeouts";

export const RUN_ENV = /^true$/i.test(parseParameters('D_env', 'false')) ? [] : ['chromedriver','geckodriver']
export const BROWSER_PARAM = parseParameters('D_browser', 'chrome')
export const VERSION = parseParameters('D_version', '114.0')
export const TEST_CASE = readTestCase(parseParameters('D_test', '-abtest'))

export const LAUNCH_PARAMETERS = {
    BROWSERS: {
        CHROME: 'chrome',
        FIREFOX: 'firefox'
    },

    CHROME_VERSION: '112.0',
    FIREFOX_VERSION: '111.0',

    SETTINGS: {
        IS_SECURE_CERTS: true,
        MAX_INSTANCES: 10
    },
}

export const BROWSER_OPTIONS = {
    args: [
        '--disable-infobars',
        '--start-maximized',
        '--disable-extensions',
        '--disable-notifications',
        '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    ]
}

export const SELENOID_OPTIONS = {
    enableVNC: true,
    enableVideo: true,
    name: 'garnik',
    sessionTimeout: SELENOID_SESSION_TIMEOUTS
    // labels
}

export const REMOTE_CONNECTION_OPTIONS = {
    HOST_NAME: 'localhost',
    PORT: 4444,
    PATH: '/wd/hub'
}

export function CAPABILITIES(browser: string, version: string) {
    if (browser === LAUNCH_PARAMETERS.BROWSERS.CHROME) return {
        maxInstances: LAUNCH_PARAMETERS.SETTINGS.MAX_INSTANCES,
        browserName: browser,
        browserVersion: version,
        acceptInsecureCerts: LAUNCH_PARAMETERS.SETTINGS.IS_SECURE_CERTS,
        "goog:chromeOptions": BROWSER_OPTIONS,
        "selenoid:options": SELENOID_OPTIONS
    }
    if (browser === LAUNCH_PARAMETERS.BROWSERS.FIREFOX) return {
        maxInstances: LAUNCH_PARAMETERS.SETTINGS.MAX_INSTANCES,
        browserName: browser,
        browserVersion: version,
        acceptInsecureCerts: LAUNCH_PARAMETERS.SETTINGS.IS_SECURE_CERTS,
        "moz:firefoxOptions": BROWSER_OPTIONS,
        "selenoid:options": SELENOID_OPTIONS
    }
}

function parseParameters(key: string, defaultValue: string): any {
    const regex = /(?<key>.*)=(?<value>.*)/gm
    let param = new Map()

    process.argv.forEach(item => {
        let group = item.match(regex)

        if (group !== null) {
            const {key, value} = regex.exec(item).groups
            param.set(key, value)
        }
    })

    const getKey = param.get(key)

    return getKey !== null && getKey !== undefined ? getKey : defaultValue
}

function readTestCase(cases: string) {
    const regex = /-[a-z.0-9*_]*/gm
    let tests: string[] = []

    cases.match(regex).forEach(item => {
        tests.push(`./test/regression/${BROWSER_PARAM}/**/${item.replace('-', '')}.test.ts`)
    })

    return tests
}