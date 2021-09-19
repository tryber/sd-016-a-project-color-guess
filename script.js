const rgbColor = document.querySelector('#rgb-color');
const ballsContainer = document.querySelector('.balls-container');
const answer = document.querySelector('#answer');
const resetGame = document.querySelector('#reset-game');

function addsBalls() {
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ballsContainer.appendChild(ball);
  }
}

addsBalls();

function genColor() {
  const color = Math.floor((Math.random() * 256)) + 1;
  return color;
}

function addsBallsColor() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = `rgb(${genColor()}, ${genColor()}, ${genColor()})`;
  }
}

addsBallsColor();

function choosesRgb() {
  const balls = document.querySelectorAll('.ball');
  const color = Math.floor((Math.random() * (balls.length)));
  rgbColor.innerText = balls[color].style.backgroundColor;
}

choosesRgb();

function checksAnswer(element) {
  if (element.style.backgroundColor === rgbColor.innerText) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente.';
  }
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('ball')) {
    checksAnswer(event.target);
  }
});

function removesBalls() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].remove();
  }
}

function reset() {
  removesBalls();
  addsBalls();
  addsBallsColor();
  choosesRgb();
  answer.innerText = 'Escolha uma cor';
}

resetGame.addEventListener('click', reset);