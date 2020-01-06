let blocks = document.querySelectorAll('.block');

// for (let i = 0; i < blocks.length; i++) {
//     blocks[i].onclick = function() {
//         console.log('block in work');
//     };
// };

blocks.forEach(function(element) {
    element.onclick = function() {
        console.log('work');
    }
})