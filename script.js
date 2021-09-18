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

function guessColor() {
  const codeColor = getElementCodeColor();
  const colorsBall = document.querySelectorAll('.ball');
  const answer = document.querySelector('#answer');

  for (let index = 0; index < colorsBall.length; index += 1) {
    colorsBall[index].addEventListener('click', (event) => {
      const color = event.target.style.backgroundColor;

      if (codeColor.innerHTML === color.split('rgb')[1]) {
        answer.innerHTML = 'Acertou!';
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
}
guessColor();

const btnResetGameColor = document.querySelector('#reset-game');
btnResetGameColor.addEventListener('click', () => {
  const rgbGenerate = arrayColorRGB();
  const answer = document.querySelector('#answer');
  answer.innerHTML = 'Escolha uma cor';
  setRGBCode(rgbGenerate);
  setColorPaletteBall(rgbGenerate);
  guessColor();
});
