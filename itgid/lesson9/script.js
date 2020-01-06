function init() {
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 1; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    } 
}

init();

let tab = document.querySelectorAll('.tab');
tab.forEach(function(element) {
    element.onclick = showTabs;
});

function showTabs() {
    //console.log("hah");
    let data = this.getAttribute('data');
    console.log(data);
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 0; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    } 
    document.querySelector('.tab-body[data="' + data + '"]').style.display = 'block';
}