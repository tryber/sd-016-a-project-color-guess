const colorGuess = document.querySelector('#rgb-color');
const colorSelected = document.querySelectorAll('.ball');
const colorAnswer = document.querySelector('#rgb-color');
const sectionGame = document.querySelector('#section-game');

function generateColor() {
  const color = ['rgb(168, 34, 1)', 'blue', 'orange', 'black', 'purple', 'yellow'];
  for (let i = 0; i < colorSelected.length; i += 1) {
    const ballColor = colorSelected[i];
    const randomColor = [Math.floor(Math.random() * color.length)];
    ballColor.style.backgroundColor = color[randomColor];
    color.splice(randomColor, 1);
  }
} generateColor();

function answerColor() {
  const rbgColorGuess = colorGuess.innerHTML;
  for (let i = 0; i < colorSelected.length; i += 1) {
    if (colorSelected[i].style.backgroundColor === rbgColorGuess) {
      colorSelected[i].id = 'answer';
    }
  }
} answerColor();
