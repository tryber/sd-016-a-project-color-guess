const rgbValue = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const resetGameBtn = document.querySelector('#reset-game');
const score = document.querySelector('#score');
const ballContainer = document.querySelector('#ball-container');

function random(num) {
  const randomNumber = Math.floor(Math.random() * num + 1);
  return randomNumber;
}

function randomRgbValue() {
  const randomRgb = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
  return randomRgb;
}

function clearColors() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].remove();
  }
}

function addColors() {
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ballContainer.appendChild(ball);
  }
}

function rightAnswer() {
  answer.innerHTML = 'Acertou!';
  const newScore = parseInt(score.innerHTML) + 3;
  score.innerHTML = newScore;
}

function wrongAnswer() {
  answer.innerHTML = 'Errou! Tente novamente';
}

function startGame() {
  clearColors();
  addColors();
  answer.innerHTML = 'Escolha uma cor';
  const balls = document.querySelectorAll('.ball');
  rgbValue.innerHTML = randomRgbValue();
  balls[random(balls.length) - 1].id = 'answer';
  for (let i = 0; i < balls.length; i += 1) {
    if (balls[i].id !== 'answer') {
      balls[i].style.backgroundColor = randomRgbValue();
      balls[i].addEventListener('click', wrongAnswer);
    } else {
      balls[i].style.backgroundColor = rgbValue.innerHTML;
      balls[i].addEventListener('click', rightAnswer);
    }
  }
}

resetGameBtn.addEventListener('click', startGame);
startGame();
