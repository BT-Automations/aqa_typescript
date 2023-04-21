import Duration from "./Duration";

export const BROWSER_DEFAULT_TIMEOUTS: number = Duration.ofMinute(2)
export const SELENOID_SESSION_TIMEOUTS: string = selenoidTimoutOfMinute(15)
export const WAIT_FOR_TIMEOUT: number = Duration.ofSecond(15)
export const CONNECTION_RETRY_TIMEOUT: number = Duration.ofMinute(2)
export const TIMEOUT_VISIBILITY: number = Duration.ofSecond(30)



function selenoidTimoutOfMinute(minute: number): string {
    return minute + "m"
}