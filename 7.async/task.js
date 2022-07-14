class AlarmClock {
    static getFormattedTime(data) {
        const date = typeof data !== 'undefined' ? new Date(data) : new Date();
        return date.toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (typeof id === 'undefined') {
            throw new Error('error text');
        }

        if (this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error('Будильник с таким id уже существует');
            return;
        }

        this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        const newCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
        const isSuccess = newCollection.length !== this.alarmCollection.length;
        this.alarmCollection = newCollection;
        return isSuccess;
    }

    getCurrentFormattedTime() {
        return AlarmClock.getFormattedTime();
    }

    checkClock(alarm) {
        return alarm.time === this.getCurrentFormattedTime();
    }

    start() {
        this.stop();

        this.timerId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if (this.checkClock(alarm)) {
                    alarm.callback();
                }
            })
        }, 100)
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection
            .forEach(alarm => console.log(`id - ${alarm.id}, time - ${alarm.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

// Пример
function testCase() {
    const clock = new AlarmClock();

    clock.addClock('16:28', () => console.log('Первая итерация'), '1');
    clock.addClock('16:29', () => {
        console.log('Вторая итерация');
        clock.removeClock('2')
    }, '2');
    clock.addClock('16:30', () => {
        console.log('Третья итерация');
        clock.stop()
        clock.clearAlarms();
    }, '3');
    clock.printAlarms();
    clock.start()
}

testCase();
