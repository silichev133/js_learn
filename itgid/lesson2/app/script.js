function hello() {
    console.log("Hello in function");
    hello2();
}

function hello2() {
    console.log("hello 2-2-2-2-2-2");
}

var btn = document.querySelector('#btn'); //button with "btn" id
var showModal = document.querySelector("#modal-show"); //button with "show-modal" id
var hideModal = document.querySelector("#modal-hide");
0
var modal = document.querySelector('.modal');

function show() {
    modal.hidden = false;
}

function hide() {
    modal.hidden = true;
}

showModal.onclick = show;
hideModal.onclick = hide;


