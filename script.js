const colorSelected = document.querySelectorAll('.ball');
const paragraph = document.querySelector('#answer');
const colorAnswer = document.querySelector('#rgb-color');

function generateColor() {
  const color = ['rgb(168, 34, 1)', 'blue', 'orange', 'black', 'purple', 'yellow'];
  for (let i = 0; i < colorSelected.length; i += 1) {
    const ballColor = colorSelected[i];
    const randomColor = [Math.floor(Math.random() * color.length)];
    ballColor.style.backgroundColor = color[randomColor];
    color.splice(randomColor, 1);
  }
} generateColor();

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
