let inputNumbers = document.querySelector('#test');
let warningText = document.querySelector('.warning');

inputNumbers.onkeypress = function(e) {
    if (e.keyCode < 48 || e.keyCode > 57) {
        warningText.innerHTML = "Only number!!!";
        return false;
    } else {
        warningText.innerHTML = "";
    }
}
