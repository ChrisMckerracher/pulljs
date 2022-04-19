import { registerActiveDiv, deregisterActiveDiv, TensionAction } from './pull.js';

class exampleTensionAction extends TensionAction {
    perform(tension) {
        let div = this.getActiveDiv();

        if (tension > 50) {
            div.classList.add("test");
        } else {
            div.classList.remove("test");
        }
    }
}

document.addEventListener('mousedown', e => {
    registerActiveDiv(e.target, exampleTensionAction);
});

document.addEventListener('mouseup', e => {
    deregisterActiveDiv();
});
