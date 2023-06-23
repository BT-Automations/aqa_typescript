import type {Options} from '@wdio/types'
import {config as baseConfig} from "./wdio.conf.ts"
import {BROWSER_PARAM, CAPABILITIES, RUN_ENV, TEST_CASE, VERSION} from "./common/LaunchParameters.ts";

export const config: Options.Testrunner = {

    ...baseConfig,

    specs: TEST_CASE,

    // suites: {
    //     regression:[`./test/specs/${TEST_CASE}`]
    // },

    capabilities: [
        CAPABILITIES(BROWSER_PARAM, VERSION)
    ],

    services: RUN_ENV,
}
