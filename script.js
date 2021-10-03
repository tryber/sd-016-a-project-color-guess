const txtColor = document.querySelector('#rgb-color');
const ballColors = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const correct = Math.floor(Math.random() * 6);
const btnReset = document.querySelector('#reset-game');

function random() {
  return Math.floor(Math.random() * 255) + 1;
}

function logicGame() {
  answer.innerHTML = 'Escolha uma cor';
  txtColor.innerHTML = `(${random()}, ${random()}, ${random()})`;
  ballColors[correct].style.backgroundColor = `rgb${txtColor.innerText}`;
  for (let i = 0, len = ballColors.length; i < len; i += 1) {
    ballColors[i].addEventListener('click', (event) => {
      if (event.target.style.backgroundColor === `rgb${txtColor.innerText}`) {
        answer.innerHTML = 'Acertou!';
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    });
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
  paintBalls();
  logicGame();
}

game();

btnReset.addEventListener('click', game);
