const balls = document.querySelectorAll('.ball');
const colorToGuess = document.querySelector('#rgb-color');
const answerText = document.querySelector('#answer');
const buttonResetGame = document.querySelector('#reset-game');
const currentScore = document.querySelector('#score');
let playerScore = 0;

function returnRandomRGBColor() {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
}

function addingColorToBalls() {
  balls.forEach((ball) => {
    ball.style.backgroundColor = returnRandomRGBColor();
  });
}

function pickingRandomColorToGuess() {
  choosenColor = Math.floor(Math.random() * balls.length);
  colorToGuess.innerText = balls[choosenColor].style.backgroundColor;
}

function removeListenerOfBalls() {
  balls.forEach((ball) => {
    ball.removeEventListener('click', testBackgroundColor);
  });
}

function winGame() {
  playerScore += 3;
  currentScore.innerText = playerScore;
  answerText.innerText = 'Acertou!';
  removeListenerOfBalls();
}

function loseGame() {
  answerText.innerText = 'Errou! Tente novamente!';
  removeListenerOfBalls();
}

function testBackgroundColor(event) {
  const currentBall = event.target;
  if (colorToGuess.innerText === currentBall.style.backgroundColor) {
    winGame();
  } else {
    loseGame();
  }
}

function addingEventListenerToBalls() {
  balls.forEach((ball) => {
    ball.addEventListener('click', testBackgroundColor);
  });
}

function addingAsnwerText() {
  answerText.innerText = 'Escolha uma cor';
}

function setupGame() {
  addingColorToBalls();
  pickingRandomColorToGuess();
  addingEventListenerToBalls();
  addingAsnwerText();
}

window.onload = setupGame;
buttonResetGame.addEventListener('click', setupGame);