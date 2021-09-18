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

function setRGBCode() {
  const setCodeColor = document.querySelector('#rgb-color');
  const colorArray = generateRGBColor;
  const randomColor = Math.floor(Math.random() * colorArray.length);
  console.log(randomColor);
  setCodeColor.innerHTML = colorArray[randomColor];
}

setRGBCode();

function setColorPaletteBall() {
  const paletteBall = document.querySelectorAll('.ball');
  for (let index = 0; index < paletteBall.length; index += 1) {
    const colorBG = generateRGBColor[index];
    paletteBall[index].style.backgroundColor = `rgb${colorBG}`;
  }
}

function guessColor() {
  const codeColor = getElementCodeColor();
  const colorsBall = document.querySelectorAll('.ball');
  const answer = document.querySelector('#answer');

  for (let index = 0; index < colorsBall.length; index += 1) {
    colorsBall[index].addEventListener('click', (event) => {
      const color = event.target.style.backgroundColor;
      console.log(color);
      if (codeColor.innerHTML === color.split('rgb')[1]) {
        answer.innerHTML = 'Acertou!';
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
}
guessColor();
setColorPaletteBall();
