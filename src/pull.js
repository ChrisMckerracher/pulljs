import { MouseSpaceTimeEvent } from 'mouse';
import { MouseVelocityWatcherSingleton } from 'mouse';
import { registerActiveDiv } from 'div';
import { Store } from 'storejs';

// core code
document.addEventListener('mouseup', e => {
    Store.releaseAll();
});

document.addEventListener('mousemove', e => {
    let newMouseSpaceTimeEvent = new MouseSpaceTimeEvent(e.clientX, e.clientY, e.timeStamp);
    MouseVelocityWatcherSingleton.present = newMouseSpaceTimeEvent;
    //console.log(MouseVelocityWatcherSingleton.velocity);
});

let element = document.getElementById("mySqure");

element.addEventListener('mousedown', e => {
    registerActiveDiv(e);
});
