'use strict';


const btn = document.querySelector('.btn');
const block = document.querySelector(".pageMain");
const collapsable = document.querySelector('.js-collapsable');
const colors = document.querySelectorAll('div.color');

const red = document.querySelector('.color1')
const green = document.querySelector('.color2')
const orange = document.querySelector('.color3')
const violet = document.querySelector('.color4')
const blue = document.querySelector('.color5')
let perfect = [];



const paintBlock = () => {
    for (let i = 0; i < 1000; i++) {
        block.innerHTML += `<div class="square" id=${i}></div>`;
    }
    let squares = document.querySelectorAll('div.square');
    for (let square of squares) {
        square.addEventListener('click', function paintSquare(event) {
            let clickedSquare = event.target;
            clickedSquare.classList.toggle('colorBlue');
            collapsable.classList.remove('js-color');
            perfect.push(clickedSquare);

        })
        square.addEventListener('dblclick', function paintSquareYellow(event) {
            let clickedSquare = event.target;
            clickedSquare.classList.toggle('colorYellow');
        });

    }

    for (let colorSelected of colors) {
        colorSelected.addEventListener('click', function selectColor(event) {
            collapsable.classList.add('js-color');
            perfect.reverse();

            let st = perfect[0].style;

            if (colorSelected === red) {
                st.backgroundColor = "red";
            }
            if (colorSelected === green) {
                st.backgroundColor = "green";
            }
            if (colorSelected === orange) {
                st.backgroundColor = "orange";
            }
            if (colorSelected === violet) {
                st.backgroundColor = "rgb(132, 35, 211)";
            }
            if (colorSelected === blue) {
                st.backgroundColor = "blue";
            }
        })
    };

    btn.addEventListener('click', function resetBtn(ev) {
        for (let square of squares) {
            square.style.backgroundColor = "";
            square.classList.remove('colorBlue', 'colorYellow');
            collapsable.classList.add('js-color');
        }
    })
}


paintBlock();






//SEGUNDA VERSION CON DOS COLORES


// // const squares = document.querySelectorAll('div.square');
// const btn = document.querySelector('.btn');
// const block = document.querySelector(".pageMain");

// const paintBlock = () => {
//     for (let i = 0; i < 1000; i++) {
//         block.innerHTML += '<div class="square"></div>';
//     }
//     let squares = document.querySelectorAll('div.square');
//     for (let square of squares) {
//         square.addEventListener('click', function paintSquare(event) {
//             let clickedSquare = event.target;
//             clickedSquare.classList.toggle('colorBlue');
//         });
//         square.addEventListener('dblclick', function paintSquareYellow(event) {
//             let clickedSquare = event.target;
//             clickedSquare.classList.toggle('colorYellow');
//         });
//     }
//     btn.addEventListener('click', function resetBtn(ev) {
//         for (let square of squares) {
//             square.classList.remove('colorBlue', 'colorYellow')
//         }
//     })

// }
// paintBlock();


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