'use strict';


// const squares = document.querySelectorAll('div.square');
const btn = document.querySelector('.btn');
const block = document.querySelector(".pageMain");

const paintBlock = () => {
    for (let i = 0; i < 1000; i++) {
        block.innerHTML += '<div class="square"></div>';
    }
    let squares = document.querySelectorAll('div.square');
    for (let square of squares) {
        square.addEventListener('click', function paintSquare(event) {
            let clickedSquare = event.target;
            clickedSquare.classList.toggle('colorBlue');
        });
        square.addEventListener('dblclick', function paintSquareYellow(event) {
            let clickedSquare = event.target;
            clickedSquare.classList.toggle('colorYellow');
        });
    }
    btn.addEventListener('click', function resetBtn(ev) {
        for (let square of squares) {
            square.classList.remove('colorBlue', 'colorYellow')
        }
    })

}
paintBlock();


// DEJO CÓDIGO COMENTADO DE LA PRIMERA VERSIÓN

// const touchSquare = (event) => {
//     for (let square of squares) {
//         square.addEventListener('click', function paintSquare(event) {
//             let clickedSquare = event.target;
//             console.log(clickedSquare)
//             clickedSquare.classList.toggle('colorBlue');
//         });
//     }
// }

// touchSquare();

// const resetBtn = () => {
//     for (let square of squares) {
//         square.classList.remove('colorBlue')
//     }
// }

// btn.addEventListener('click', resetBtn)