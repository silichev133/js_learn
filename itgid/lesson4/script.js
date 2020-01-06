let p = document.querySelector('p');
p.innerHTML += ' bye!';

document.querySelector('h1').outerHTML = '<h2>jjjj</h2>';

let firstDiv = document.querySelector('div');
firstDiv.insertAdjacentHTML('beforebegin', 111);
firstDiv.insertAdjacentHTML('afterbegin', 222);
firstDiv.insertAdjacentHTML('beforeend', 333);
firstDiv.insertAdjacentHTML('afterend', 444);

document.querySelector('.one span').innerHTML = 999999999;

function changeStyle() {
    document.querySelector('link').href = "style2.css";
}

document.querySelector('button').onclick = changeStyle;