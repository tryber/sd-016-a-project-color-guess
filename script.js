function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let array = [];

function generateColor(array) {
    let colorArray = array.slice();
    for (let i = 0; i < 3; i += 1) {
        colorArray.push(getRandomInt(0, 255));
    }
    return colorArray;
}

generateColor(array);

const text = document.getElementById('rgb-color');

const colors = document.getElementById('colors');
for (let i = 0; i < 6; i += 1) {
    colors.appendChild(document.createElement('div')).classList.add('ball');
}

// generate 6 colors

let colorsArray = [];
let randomColor = [];

function generateSixColors() {

    for (let i = 0; i < 6; i += 1) {
        randomColor = generateColor(randomColor);
        colorsArray.push(randomColor);
        randomColor = [];
    }

    return colorsArray;

}

colorsArray = generateSixColors();

function elementRGB() {

    let index = getRandomInt(0, 6);

    text.innerText = `(${colorsArray[index][0]}, ${colorsArray[index][1]}, ${colorsArray[index][2]})`;

    let array = [text.innerText, index];

    return array;
}

let elementRGBarray = elementRGB();
// add color to circules

const circules = document.querySelectorAll('.ball');

function generateNewColors(array) {
    for (let i = 0; i < 6; i += 1) {
        array[i].style.backgroundColor = `rgb(${colorsArray[i][0]}, ${colorsArray[i][1]}, ${colorsArray[i][2]})`;
    }
}

generateNewColors(circules);

// play 

const gameStatus = document.getElementById('answer');

for (let i = 0; i < 6; i += 1) {
    circules[i].addEventListener('click', () => {
        if (i === elementRGBarray[1]) {
            gameStatus.innerText = 'Acertou!';
        } else {
            gameStatus.innerText = 'Errou! Tente novamente!';
        }
    })
}

const resetButton = document.getElementById('reset-game');

function resetEverything() {
    elementRGBarray = elementRGB();
    colorsArray = [];
    colorsArray = generateSixColors();
    generateNewColors(circules);
    gameStatus.innerText = 'Escolha uma cor';
}

resetButton.addEventListener('click', resetEverything);
