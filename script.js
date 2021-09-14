const text = document.getElementById('rgb-color');

const colors = document.getElementById('colors');

function getRandomInt(min, max) {
  let Min = min;
  Min = Math.ceil(min);
  let Max = max;
  Max = Math.floor(max);
  return Math.floor(Math.random() * (Max - Min)) + Min;
} // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let colorsArray = [];

function elementRGB() {
  const index = getRandomInt(0, 6);

  text.innerText = `(${colorsArray[index][0]}, ${colorsArray[index][1]}, ${colorsArray[index][2]})`;

  const array = [text.innerText, index];

  return array;
}

const array = [];

function generateColor(array1) {
  const colorArray = array1.slice();
  for (let i = 0; i < 3; i += 1) {
    colorArray.push(getRandomInt(0, 255));
  }
  return colorArray;
}

generateColor(array);

for (let i = 0; i < 6; i += 1) {
  colors.appendChild(document.createElement('div')).classList.add('ball');
}

// generate 6 colors

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

let elementRGBarray = elementRGB();
// add color to circules

const circules = document.querySelectorAll('.ball');

function returnStringColor(color1, color2, color3) {
  return `rgb(${color1}, ${color2}, ${color3})`;
}

function generateNewColors(array1) {
  for (let i = 0; i < 6; i += 1) {
    const color1 = colorsArray[i][0];
    const color2 = colorsArray[i][1];
    const color3 = colorsArray[i][2];

    const ArrayBackground = array1;
    ArrayBackground[i].style.backgroundColor = returnStringColor(color1, color2, color3);
  }
}

const gameStatus = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

function resetEverything(string) {
  colorsArray = [];
  colorsArray = generateSixColors();
  elementRGBarray = elementRGB();
  generateNewColors(circules);
  if (string === '1') {
    gameStatus.innerText = 'Acertou!';
  }
}

generateNewColors(circules);

// play

const score = document.getElementById('score');
let scoreNumber;

function clickCircules(position) {
  if (position === elementRGBarray[1]) {
    gameStatus.innerText = 'Acertou!';
    scoreNumber = parseInt(score.innerText, 10);
    scoreNumber += 3;
    const string = scoreNumber.toString();
    score.innerText = string;
    resetEverything('0');
  } else {
    resetEverything('1');
    gameStatus.innerText = 'Errou! Tente novamente!';
  }
}

for (let i = 0; i < 6; i += 1) {
  circules[i].addEventListener('click', () => {
    clickCircules(i);
  });
}

resetButton.addEventListener('click', resetEverything);
resetButton.addEventListener('click', () => {
  gameStatus.innerText = 'Escolha uma cor';
});
