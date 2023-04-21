import {SELENOID_SESSION_TIMEOUTS} from "./Timeouts";

export const LAUNCH_PARAMETERS = {
    BROWSERS: {
        CHROME: 'chrome',
        FIREFOX: 'firefox'
    },

    // Versions [ '112.0', '111.0' ]
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
    name: 'garnik',
    sessionTimeout: SELENOID_SESSION_TIMEOUTS
    // labels
}

export const REMOTE_CONNECTION_OPTIONS = {
    HOST_NAME: 'localhost',
    PORT: 4444,
    PATH: '/wd/hub'
}

export const TEST_RUN_PATH = {
    CHROME_TEST: './test/specs/chrome/**/*.test.ts',
    FIREFOX_TEST: './test/specs/firefox/**/*.test.ts',
    ALL_TEST: './test/specs/**/*.test.ts'
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