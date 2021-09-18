function generateRGBCode() {
  const firstRbgCode = Math.floor(Math.random() * 254);
  const secondRbgCode = Math.floor(Math.random() * 254);
  const thirdRbgCode = Math.floor(Math.random() * 254);

  return `(${firstRbgCode}, ${secondRbgCode}, ${thirdRbgCode})`;
}

function arrayColorRGB() {
  const arrayColors = [];
  for (let index = 0; index < 6; index += 1) {
    arrayColors.push(generateRGBCode());
  }

  return arrayColors;
}

const generateRGBColor = arrayColorRGB();

function getElementCodeColor() {
  const setCodeColor = document.querySelector('#rgb-color');
  return setCodeColor;
}

function setRGBCode(array) {
  const setCodeColor = document.querySelector('#rgb-color');
  const colorArray = array;
  const randomColor = Math.floor(Math.random() * colorArray.length);
  setCodeColor.innerHTML = colorArray[randomColor];
}

setRGBCode(generateRGBColor);

function setColorPaletteBall(array) {
  const paletteBall = document.querySelectorAll('.ball');

  for (let index = 0; index < paletteBall.length; index += 1) {
    const colorBG = array[index];
    paletteBall[index].style.backgroundColor = `rgb${colorBG}`;
  }
}
setColorPaletteBall(generateRGBColor);

// let count = 0;

// function checkCorrectness(param) {
//   const codeColor = getElementCodeColor();
//   const score = document.querySelector('#score');
//   const answer = document.querySelector('#answer');

//   if (codeColor.innerHTML === param.split('rgb')[1]) {
//     count += 3;
//     answer.innerHTML = 'Acertou!';
//     score.innerHTML = count;
//   }
//   if (codeColor.innerHTML !== param.split('rgb')[1]) {
//     answer.innerHTML = 'Errou! Tente novamente!';
//   }
// }

let count = 0;
function guessColor(event) {
  const codeColor = getElementCodeColor();
  const score = document.querySelector('#score');
  const answer = document.querySelector('#answer');
  const color = event.target.style.backgroundColor;
  if (codeColor.innerHTML === color.split('rgb')[1]) {
    count += 3;
    answer.innerHTML = 'Acertou!';
    score.innerHTML = count;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

const containerBalls = document.querySelector('#colors-ball');
containerBalls.addEventListener('click', guessColor);

const btnResetGameColor = document.querySelector('#reset-game');
btnResetGameColor.addEventListener('click', () => {
  const rgbGenerate = arrayColorRGB();
  const answer = document.querySelector('#answer');
  answer.innerHTML = 'Escolha uma cor';
  setRGBCode(rgbGenerate);
  setColorPaletteBall(rgbGenerate);
});
