document.querySelector('title').text = "I'm back!!!";

document.querySelector('.push').onclick = function() {
    let radio = document.querySelectorAll('.radio-input');
    console.log(radio);

    for (let i = 0; i < radio.length; i++) {
        console.log(radio[i].value);
    }
}