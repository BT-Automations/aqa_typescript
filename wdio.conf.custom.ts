import type {Options} from '@wdio/types'
import {config as baseConfig} from "./wdio.conf.chrome.ts"
import {
    LAUNCH_PARAMETERS,
    CAPABILITIES,
    RUN_ENV,
    BROWSER_PARAM,
    TEST_CASE, VERSION
} from "./common/LaunchParameters.ts";

export const config: Options.Testrunner = {

    ...baseConfig,

    specs: [
        // "./test/specs/chrome/**/dynamic.control.test.ts"
        `./test/specs/${TEST_CASE}`
    ],

    capabilities: [
        // CAPABILITIES(LAUNCH_PARAMETERS.BROWSERS.CHROME, LAUNCH_PARAMETERS.CHROME_VERSION)
        CAPABILITIES(BROWSER_PARAM, VERSION)
    ],

    // services: ['chromedriver', 'geckodriver'],
    services: RUN_ENV,
}
