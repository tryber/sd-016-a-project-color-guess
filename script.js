const colorToGuess = document.getElementById('rgb-color');
const colorsDiv = document.getElementById('colors');
const gameText = document.getElementById('answer');
const score = document.getElementById('score');

function isRightColor(event) {
  const color = event.target;
  const result = color.style.backgroundColor === `rgb${colorToGuess.innerHTML}`;
  if (result) {
    gameText.innerHTML = 'Acertou!';
    score.innerHTML = parseInt(score.innerHTML, 10) + 3;
  } else gameText.innerHTML = 'Errou! Tente novamente!';
}

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
    color.innerHTML = color.style.backgroundColor;
    color.addEventListener('click', isRightColor);
    colorsDiv.appendChild(color);
  }
}

function applyColorToGuess() {
  const color = colorToGuess.innerHTML;
  const colors = document.getElementsByClassName('ball');
  const randomNum = Math.floor(Math.random() * colors.length);
  colors[randomNum].style.backgroundColor = `rgb${color}`;
  colors[randomNum].innerHTML = colors[randomNum].style.backgroundColor;
}

function clearColors() {
  while (colorsDiv.firstChild) {
    colorsDiv.removeChild(colorsDiv.firstChild);
  }
}

function resetState() {
  clearColors();
  createColorToGuess();
  createColors();
  applyColorToGuess();
  gameText.innerHTML = 'Escolha uma cor';
}

function resetBtn() {
  const btn = document.getElementById('reset-game');
  btn.addEventListener('click', resetState);
}

createColorToGuess();
createColors();
applyColorToGuess();
resetBtn();
