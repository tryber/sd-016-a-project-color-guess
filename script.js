const setColorText = document.getElementById('rgb-color');
const colorsBalls = document.getElementsByClassName('ball');
const initialText = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const gameScore = document.getElementById('score');

initialText.textContent = 'Escolha uma cor';

function setRandom(min, max) {
  return Math.round(Math.random() * (max - (min - 1))) + min;
}

function generateRandomColor() {
  return `rgb(${setRandom(1, 255)}, ${setRandom(1, 255)}, ${setRandom(1, 255)})`;
}

const colorArray = [];
for (let i = 0; i < 6; i += 1) {
  colorArray.push(generateRandomColor());
}

function createColors() {
  for (let index = 0; index < colorsBalls.length; index += 1) {
    colorsBalls[index].style.backgroundColor = generateRandomColor();
  }
}

function setTextRGB() {
  const divValue = colorsBalls[Math.round(Math.random() * 5)];
  setColorText.innerHTML = divValue.style.backgroundColor;
}

let counter = 0;

function scored() {
  const currentRGB = document.getElementById('rgb-color').textContent;
  console.log(currentRGB);
  for (let index = 0; index < colorsBalls.length; index += 1) {
    colorsBalls[index].addEventListener('click', function(evt) {
      if (evt.target.style.backgroundColor == currentRGB) {
        initialText.innerText = 'Acertou!';
        counter += 3;
        gameScore.innerHTML = counter;
      } else {
        initialText.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}

function resetGame() {
  createColors();
  setTextRGB();
  scored();
  initialText.innerHTML = 'Escolha uma cor';
}

resetButton.addEventListener('click', resetGame);

window.onload = resetGame;
