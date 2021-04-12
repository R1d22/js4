/*const form = document.forms.form;

form.addEventListener('sumbit', (ev) => {

    ev.preventDefault();

    const data = new FormData(ev.target);
    const val = form.get('test');
    console.log('test');
})*/


/*const containerEl = document.querySelector('.container');

containerEl.addEventListener('mousemove', (ev) => {
    console.log(
        'X:', ev.movementX,
        'Y:',ev.movementY
    );
})*/


const btnSignal = document.querySelector('.onOff');
let isOnAlarm = false;
const btnDoor = document.querySelector('.openClose');
let doorStatus = false;
let isAlarm = false;
const result = document.querySelector('.result');


const detect = () => {
    if((isOnAlarm && doorStatus) === true) {
        result.innerHTML = 'все ок';
    } else if (isOnAlarm === true && doorStatus === false) {
        result.innerHTML = 'тревога';
    } else {
        result.innerHTML = 'сигн выкл';
    }
}


btnSignal.addEventListener('click', (ev) => {
    /*if(btnSignal.className === 'onOff') {
        btnSignal.classList.add('offOn')
        btnSignal.classList.remove('onOff')
    } else {
        btnSignal.classList.add('onOff')
        btnSignal.classList.remove('offOn')
    }*/
    isOnAlarm = !isOnAlarm
    if(isOnAlarm) {
        btnSignal.classList.add('offOn')
        btnSignal.classList.remove('onOff')
        btnSignal.innerHTML = 'on'
    } else {
        btnSignal.classList.add('onOff')
        btnSignal.classList.remove('offOn')
        btnSignal.innerHTML = 'off'
    }
    detect()
})




btnDoor.addEventListener('click', (ev) => {
    doorStatus = !doorStatus
    if(doorStatus) {
        btnDoor.classList.add('offOn')
        btnDoor.classList.remove('onOff')
        btnDoor.innerHTML = 'closed'
    } else {
        btnDoor.classList.add('onOff')
        btnDoor.classList.remove('offOn')
        btnDoor.innerHTML = 'opened'
    }
    detect()

})