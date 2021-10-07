const balls = document.querySelectorAll('.ball');
const rgbInitial = document.querySelector('#rgb-color');

function rgbGenerator() {
  const arrayRgb = [];
  for (let index = 0; index < 3; index += 1) {
    arrayRgb.push(Math.round(Math.random() * 256))
  }
  return `rgb(${arrayRgb[0]}, ${arrayRgb[1]}, ${arrayRgb[2]})`
}

const changeColors = () => {
  balls.forEach((ball) => ball.style.backgroundColor = rgbGenerator());
}
changeColors();

function changeRbg() {
  rgbInitial.innerText = `${balls[Math.floor(Math.random() * 6)].style.backgroundColor}`
}
changeRbg();

const instructionText = document.getElementById('answer');

const clickBalls = () => {
  balls.forEach((ball) => {
    ball.addEventListener('click', () => {
      if (ball.style.backgroundColor === rgbInitial.innerText) {
        instructionText.innerHTML = 'Acertou!';
        sum()
      } else {
        instructionText.innerHTML = 'Errou! Tente novamente!';
      }
    })
  })
}
clickBalls();

const btnReset = document.querySelector('#reset-game');

btnReset.addEventListener('click', (event) => {
  instructionText.innerText = 'Escolha uma cor';
  changeColors();
  changeRbg();
  // clickBalls();
})

const score = document.querySelector('#score');
const restart = document.querySelector('#restart');
let counter = 0;

score.innerHTML = counter;

const sum = () => {
  if (instructionText.innerHTML === 'Acertou!') {
    counter += 3;
    score.innerHTML = counter;
  }
}
