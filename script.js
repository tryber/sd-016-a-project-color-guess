const colorSelected = document.querySelectorAll('.ball');
const paragraph = document.querySelector('#answer');
const colorAnswer = document.querySelector('#rgb-color');
const btnReset = document.querySelector('#reset-game');

function generateColor() {
  const color = ['rgb(168, 34, 1)', 'rgb(0, 0, 0)', 'rgb(72, 61, 139)',
    'rgb(0, 255, 255)', 'rgb(46, 139, 87)', 'rgb(139, 69, 19)'];
  for (let i = 0; i < colorSelected.length; i += 1) {
    const ballColor = colorSelected[i];
    const randomColor = [Math.floor(Math.random() * color.length)];
    colorAnswer.innerText = color[randomColor];
    ballColor.style.backgroundColor = color[randomColor];
    color.splice(randomColor, 1);
  }
}generateColor();

function verifyAnswer() {
  for (let x = 0; x < colorSelected.length; x += 1) {
    colorSelected[x].addEventListener('click', () => {
      if (colorSelected[x].style.backgroundColor === colorAnswer.innerHTML) {
        paragraph.innerHTML = 'Acertou!';
      } else {
        paragraph.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
} verifyAnswer();

function restartGame() {
  btnReset.addEventListener('click', () => {
    paragraph.innerHTML = 'Escolha uma cor';
    generateColor();
    verifyAnswer();
  });
} restartGame();
