//div store
class Store {
    #mapping
    constructor() {
        this.#mapping = new Map();
    }

    add(key, element) {
        this.#mapping.set(key, element);
    }

    get(key) {
        return this.#mapping.get(key);
    }

    releaseAll() {
        const keys = this.#mapping.keys();
        for (let key of keys) {
            this.#mapping.delete(key);
        }
    }
}

const store = new Store();

export default store;