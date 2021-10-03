const txtColor = document.querySelector('#rgb-color');
const ballColors = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const btnReset = document.querySelector('#reset-game');
const score = document.querySelector('#score');
const restart = document.querySelector('#restart');
let countScore = 0;

score.innerHTML = countScore;

function random() {
  return Math.floor(Math.random() * 255) + 1;
}

function sumScore() {
  if (answer.innerHTML === 'Acertou!') {
    countScore += 3;
    score.innerHTML = countScore;
  }
}

function resetClick(func) {
  for (let i = 0, len = ballColors.length; i < len; i += 1) {
    ballColors[i].removeEventListener('click', func);
  }
}

function hitAnswer(event) {
  if (event.target.style.backgroundColor === `rgb${txtColor.innerText}`) {
    answer.innerHTML = 'Acertou!';
    restart.innerHTML = 'Aperte o botao para reiniciar';
    sumScore();
    resetClick(hitAnswer);
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    restart.innerHTML = 'Aperte o botao para reiniciar';
    resetClick(hitAnswer);
  }
}

function resetColors() {
  restart.innerHTML = '';
  for (let i = 0, len = ballColors.length; i < len; i += 1) {
    ballColors[i].style.backgroundColor = '';
  }
}

function logicGame() {
  const correct = Math.floor(Math.random() * ballColors.length);
  answer.innerHTML = 'Escolha uma cor';
  txtColor.innerHTML = `(${random()}, ${random()}, ${random()})`;
  ballColors[correct].style.backgroundColor = `rgb${txtColor.innerText}`;
  for (let i = 0, len = ballColors.length; i < len; i += 1) {
    ballColors[i].addEventListener('click', hitAnswer);
  }
}

function paintBalls() {
  for (let i = 0, len = ballColors.length; i < len; i += 1) {
    if (ballColors[i].style.backgroundColor === '') {
      const rgb1 = random();
      const rgb2 = random();
      const rgb3 = random();
      ballColors[i].style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    }
  }
}

function game() {
  resetColors();
  logicGame();
  paintBalls();
}

game();

btnReset.addEventListener('click', game);
