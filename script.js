const balls = document.querySelectorAll('.ball');
const color = document.getElementById('rgb-color');
const btn = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const scoreBoard = document.getElementById('score');

// Função que colore os circulos;
const coloringBalls = () => {
  for (let index = 0; index < balls.length; index += 1) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    balls[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
};

// Função que cria o código da cor a ser adivinhada;
const rightColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  color.innerText = `(${red}, ${green}, ${blue})`;
};

// Função que subscreve um dos 6 circulos, pelo do código;
const matchColorWithBall = () => {
  balls[Math.floor(Math.random() * 6)].style.backgroundColor = `rgb${color.innerText}`;
};

// Função que checa se a pessoa acertou e imprime uma mensagem;
const rightOrWrong = (click) => {
  answer.innerText = 'Escolha uma cor';
  if (click.target.style.backgroundColor === `rgb${color.innerText}`) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente.';
  }
};

// Função que incrementa o placar a cada acerto;
const score = (click) => {
  let scoreToNumber = parseInt(scoreBoard.innerText, 10);
  if (click.target.style.backgroundColor === `rgb${color.innerText}`) {
    scoreToNumber += 3;
  }
  scoreBoard.innerText = scoreToNumber;
  return scoreBoard;
};
// Função que reseta o jogo
const resetGame = () => {
  answer.innerText = 'Escolha uma cor';
};
// Coloca escutadores nas bolas
for (let index = 0; index < balls.length; index += 1) {
  balls[index].addEventListener('click', rightOrWrong);
  balls[index].addEventListener('click', score);
}
// Coloca escutadores no botão
btn.addEventListener('click', rightColor);
btn.addEventListener('click', coloringBalls);
btn.addEventListener('click', matchColorWithBall);
btn.addEventListener('click', resetGame);
// Executa as funções iniciais
rightColor();
coloringBalls();
matchColorWithBall();
