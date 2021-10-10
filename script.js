const balls = document.querySelectorAll('.ball');
const color = document.getElementById('rgb-color');
const btn = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const scoreBoard = document.getElementById('score');

const coloringBalls = () => {
  for (let index = 0; index < balls.length; index += 1) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    balls[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
};

const rightColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  color.innerText = `(${red}, ${green}, ${blue})`;
};

const matchColorWithBall = () => {
  balls[Math.floor(Math.random() * 6)].style.backgroundColor = `rgb${color.innerText}`;
};

const rightOrWrong = (click) => {
  answer.innerText = 'Escolha uma cor';
  if (click.target.style.backgroundColor === `rgb${color.innerText}`) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente.';
  }
};

const score = (click) => {
  let scoreToNumber = parseInt(scoreBoard.innerText, 10);
  if (click.target.style.backgroundColor === `rgb${color.innerText}`) {
    console.log(scoreToNumber);
    scoreToNumber += 3;
    console.log(scoreToNumber);
  }
  scoreBoard.innerText = scoreToNumber;
  return scoreBoard;
};

for (let index = 0; index < balls.length; index += 1) {
  balls[index].addEventListener('click', rightOrWrong);
  balls[index].addEventListener('click', score);
}

const resetGame = () => {
  answer.innerText = 'Escolha uma cor';
};

btn.addEventListener('click', rightColor);
btn.addEventListener('click', coloringBalls);
btn.addEventListener('click', matchColorWithBall);
btn.addEventListener('click', resetGame);

rightColor();
coloringBalls();
matchColorWithBall();
