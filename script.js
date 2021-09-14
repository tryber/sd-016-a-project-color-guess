const colorToGuess = document.getElementById('rbg-color');
const colorsDiv = document.getElementById('colors');

function randomColor() {
  const firstNum = Math.floor(Math.random() * 255);
  const secondNum = Math.floor(Math.random() * 255);
  const thirdNum = Math.floor(Math.random() * 255);

  return `(${firstNum}, ${secondNum}, ${thirdNum})`;
}

function createColorToGuess() {
  colorToGuess.innerHTML = randomColor();
}

function createColors() {
  for (let index = 0; index < 6; index += 1) {
    const color = document.createElement('div');
    color.classList.add('ball');
    color.style.backgroundColor = `rgb${randomColor()}`;
    colorsDiv.appendChild(color);
  }
}

createColorToGuess();
createColors();
