class MouseVelocityWatcher {
    #past;
    #present;
    constructor() {
        this.#past = null;
        this.#present = null;
    }

    set present(present) {
        this.#past = this.#present;
        this.#present = present;
    }

    get velocity() {
        if (this.#past === null || this.#present == null) {
            console.log("???");
            return 0;
        }
        let timePeriod = this.#present.timeInMillis - this.#past.timeInMillis;
        let distance = Math.sqrt((this.#present.x - this.#past.x) ** 2 +
            (this.#present.y - this.#past.y) ** 2);
        
        return distance / timePeriod;
    }
}

const MouseVelocityWatcherSingleton = new MouseVelocityWatcher();

export default MouseVelocityWatcherSingleton;