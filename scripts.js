console.log('Hello there');


// event #2
$(document).ready(onReady);

function onReady(number) {
    console.log('Hello from JQuery', number)
}
// event #1
onReady(1);

function helloThere() {
    console.log('Hello There!')
}

function callBack() {
    console.log('General Kenobi!');
}

helloThere();
callBack();

