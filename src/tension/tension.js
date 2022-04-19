import { Store } from 'storejs';
import { MouseVelocityWatcherSingleton } from 'mouse';

class Tension {
    constructor() {
    }

    calculate(newMouseSpaceTimeEvent) {
        MouseVelocityWatcherSingleton.present = newMouseSpaceTimeEvent;

        let currentVelocity = MouseVelocityWatcherSingleton.velocity
        Store.add("velocity", currentVelocity);

        let acceleration = this.#calculateAcceleration(currentVelocity);
    
        let total_distance = Store.get("total_distance");
        let distance = MouseVelocityWatcherSingleton.distance;
    
        if (total_distance == null) {
            total_distance = distance;
        } else {
            total_distance += distance;
        }
        Store.add("total_distance", total_distance);
    
        return total_distance * acceleration;    
    }

    #calculateAcceleration(currentVelocity) {
        let lastVelocity = Store.get("velocity");
        if (lastVelocity == null) {
            lastVelocity = 0;
        }

        if (currentVelocity < lastVelocity) {
            return;
        }
        return Math.max(1, currentVelocity - lastVelocity);
    }
}

const tension = new Tension();

export default tension;