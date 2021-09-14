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

for (let i = 0; i < 6; i += 1) {
    randomColor = generateColor(randomColor);
    colorsArray.push(randomColor);
    randomColor = [];
}

let index = getRandomInt(0, 6);

text.innerText = `(${colorsArray[index][0]}, ${colorsArray[index][1]}, ${colorsArray[index][2]})`;

// add color to circules

const circules = document.getElementsByClassName('ball');

for(let i = 0; i < 6; i += 1){
    circules[i].style.backgroundColor = `rgb(${colorsArray[i][0]}, ${colorsArray[i][1]}, ${colorsArray[i][2]})`;
    if(i === index){
        circules[i].id = 'answer';
    }
}

// play 

for(let i = 0; i < 6; i += 1){
    circules[i].addEventListener('click', () => {
        if(i === index){
            console.log('genio!');
        }
    })
}