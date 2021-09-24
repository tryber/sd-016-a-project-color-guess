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
    const currentBall = ball;
    currentBall.style.backgroundColor = returnRandomRGBColor();
  });
}

function pickingRandomColorToGuess() {
  const choosenColor = Math.floor(Math.random() * balls.length);
  colorToGuess.innerText = balls[choosenColor].style.backgroundColor;
}

function removeListenerOfBalls() {
  balls.forEach((ball) => {
    ball.removeEventListener('click', testBackgroundColor);
  });
}

function winGame(target) {
  playerScore += 3;
  currentScore.innerText = playerScore;
  answerText.innerText = 'Acertou!';
  target.classList.add('correct');
  removeListenerOfBalls();
}

function paintCorrectBall() {
  balls.forEach((ball) => {
    if (colorToGuess.innerText.toLowerCase() === ball.style.backgroundColor) {
      ball.classList.add('correct');
    }
  });
}

function loseGame(target) {
  answerText.innerText = 'Errou! Tente novamente!';
  target.classList.add('incorrect');
  paintCorrectBall();
  removeListenerOfBalls();
}

function testBackgroundColor(event) {
  const currentBall = event.target;
  if (colorToGuess.innerText.toLowerCase() === currentBall.style.backgroundColor) {
    winGame(currentBall);
  } else {
    loseGame(currentBall);
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

function takingOffClassOfBalls() {
  balls.forEach((ball) => {
    const currentBall = ball;
    currentBall.classList = 'ball';
  });
}

function changeTitleColor() {
  const title = document.querySelector('#title');
  title.style.color = returnRandomRGBColor();
}

function setupGame() {
  addingColorToBalls();
  takingOffClassOfBalls();
  pickingRandomColorToGuess();
  addingEventListenerToBalls();
  addingAsnwerText();
  changeTitleColor();
  setInterval(changeTitleColor, 2000);
}

window.onload = setupGame;
buttonResetGame.addEventListener('click', setupGame);
