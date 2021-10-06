
import { Store } from 'storejs';

function registerActiveDiv(e) {
    console.log("registering " + e.target);
    e.target.style.backgroundColor = 'blue';
    Store.add('active_div', e.target);
}

export default registerActiveDiv;