
import { Store } from 'storejs';
import { Tension } from 'tension';
import { MouseSpaceTimeEvent } from 'mouse';

function registerActiveDiv(element, tensionAction) {
    Store.add('active_div', element);
    Store.add('active_tension_action', new tensionAction());
    
    let activeEventListener = e => {
        let newMouseSpaceTimeEvent = new MouseSpaceTimeEvent(e.clientX, e.clientY, e.timeStamp);
        let currentTension = Tension.calculate(newMouseSpaceTimeEvent);
        let tensionAction = Store.get("active_tension_action");
        tensionAction.perform(currentTension);
    };

    Store.add("active_event_listener", activeEventListener);


    document.addEventListener('mousemove', activeEventListener);
}

function deregisterActiveDiv() {
    console.log('wtf');
    let activeEventListener = Store.get('active_event_listener');

    document.removeEventListener('mousemove', activeEventListener);
    Store.releaseAll();
}

export { registerActiveDiv , deregisterActiveDiv };