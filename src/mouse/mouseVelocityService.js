import { Store } from "storejs";


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
        let timePeriod = (this.#present.timeInMillis - this.#past.timeInMillis);
        
        return 20 * this.distance / timePeriod;
    }

    get distance() {
        let active_div = Store.get("active_div");
        if (active_div == null) {
            return 0;
        }
        
        let distance1 = this.distance_equation(active_div.getBoundingClientRect(), this.#past);
        let distance2 = this.distance_equation(active_div.getBoundingClientRect(), this.#present);

        return distance2 - distance1;
    }

    distance_equation(p1, p2) {
        return Math.sqrt((p1.x - p2.x) ** 2 +
        (p1.y - p2.y) ** 2);
    }
}

const MouseVelocityWatcherSingleton = new MouseVelocityWatcher();

export default MouseVelocityWatcherSingleton;