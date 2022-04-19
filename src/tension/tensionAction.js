import { Store } from 'storejs';

class TensionAction {

    perform(tension) {
        throw new Error("action must be implemented");
    }

    getActiveDiv() {
        return Store.get("active_div");
    }

}

export default TensionAction;