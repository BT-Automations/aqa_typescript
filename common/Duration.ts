class Duration {
    ofMillis(millis: number) {
        return millis
    }

    ofSecond(second: number) {
        return second * 1000
    }

    ofMinute(minute: number) {
        return (minute * 1000) * 60
    }
}

export default new Duration()