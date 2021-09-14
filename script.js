const balls = document.querySelectorAll('.ball');
const colorToGuess = document.querySelector('#rgb-color');
const answerText = document.querySelector('#answer');

function returnRandomRGBColor() {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
}

function addCorToBalls() {
  balls.forEach((ball) => {
    ball.style.backgroundColor = returnRandomRGBColor();
  });
}

function pickingRandomColorToGuess() {
  choosenColor = Math.floor(Math.random() * balls.length);
  colorToGuess.innerText = balls[choosenColor].style.backgroundColor;
}

function testBackgroundColor(event) {
  const currentBall = event.target;
  if (colorToGuess.innerText === currentBall.style.backgroundColor) {
    answerText.innerText = 'Acertou!';
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

function addingEventListenerToBalls() {
  balls.forEach((ball) => {
    ball.addEventListener('click', testBackgroundColor)
  });
}

function setupGame() {
  addCorToBalls();
  pickingRandomColorToGuess();
  addingEventListenerToBalls();
}

window.onload = setupGame;