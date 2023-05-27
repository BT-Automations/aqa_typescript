import type {Options} from '@wdio/types'
import {config as baseConfig} from "./wdio.conf.chrome.ts"
import {
    LAUNCH_PARAMETERS,
    CAPABILITIES
} from "./common/LaunchParameters.ts";

export const config: Options.Testrunner = {

    ...baseConfig,

    specs: [
        "./test/specs/chrome/**/dinamic.content.test.ts"
    ],

    capabilities: [
        CAPABILITIES(LAUNCH_PARAMETERS.BROWSERS.CHROME, LAUNCH_PARAMETERS.CHROME_VERSION)
    ],

    services: ['chromedriver', 'geckodriver'],
}
