const colorDisplay = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
const score = document.querySelector('#score');

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
  return `(${randomRange(0, 255)}, ${randomRange(0, 255)}, ${randomRange(0, 255)})`;
}

balls.forEach((elem) => {
  elem.addEventListener('click', () => {
    if (elem.classList.contains('color')) {
      answer.innerText = 'Acertou!';
      score.innerText = parseInt(score.innerText, 10) + 3;
    } else {
      answer.innerText = 'Errou! Tente novamente';
    }
  });
});

function loadGame() {
  answer.innerText = 'Escolha uma cor';
  balls.forEach((elem) => {
    const ball = elem;
    ball.style.backgroundColor = `rgb${randomColor()}`;
    ball.classList.remove('color');
  });
  const colorGuess = randomColor();
  colorDisplay.innerText = colorGuess;
  const randomBall = balls[Math.floor(Math.random() * balls.length)];
  randomBall.style.backgroundColor = `rgb${colorGuess}`;
  randomBall.classList.toggle('color');
}

resetButton.addEventListener('click', loadGame);

loadGame();
