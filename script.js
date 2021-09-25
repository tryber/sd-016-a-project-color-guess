const colorSelected = document.querySelectorAll('.ball');
const paragraph = document.querySelector('#answer');
const colorAnswer = document.querySelector('#rgb-color');
const btnReset = document.querySelector('#reset-game');
const scoreP = document.querySelector('#score');
function generateColor() {
  for (let i = 0; i < colorSelected.length; i += 1) {
    const ballColorIndex = colorSelected[i];
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    ballColorIndex.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  }
  const randomColorSelected = Math.floor(Math.random() * 5);
  colorAnswer.innerHTML = colorSelected[randomColorSelected].style.backgroundColor;
}generateColor();

let points = 0;
function score() {
  points += 3;
  scoreP.innerText = `${points}`;
}

function score2() {
  const currentPoint = scoreP.innerHTML - 1;
  scoreP.innerText = currentPoint;
}

function verifyAnswer() {
  for (let x = 0; x < colorSelected.length; x += 1) {
    colorSelected[x].addEventListener('click', () => {
      if (colorSelected[x].style.backgroundColor === colorAnswer.innerHTML) {
        paragraph.innerHTML = 'Acertou! ;D +3 pontos!';
        score();
      } else {
        paragraph.innerHTML = 'Errou! Tente novamente! -1 ponto :d';
        score2();
      }
    });
  }
} verifyAnswer();

function restartGame() {
  btnReset.addEventListener('click', () => {
    paragraph.innerHTML = 'Escolha uma cor';
    generateColor();
  });
} restartGame();
