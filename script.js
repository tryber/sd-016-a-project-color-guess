let countScore = 0;

const standardColor = () => {
  const colorRGB = document.querySelector('#standard-color');
  const createParagraph = document.createElement('p');
  createParagraph.innerHTML = '(123, 45, 210)';
  createParagraph.id = 'rgb-color';
  colorRGB.appendChild(createParagraph);
};
standardColor();

const createColorBall = () => {
  const ballContainer = document.querySelector('#color-ball');
  for (let index = 1; index <= 6; index += 1) {
    const createDivBall = document.createElement('div');
    createDivBall.classList.add('ball');
    ballContainer.appendChild(createDivBall);
  }
};
createColorBall();

const backgroundColorBall = () => {
  const ballSelected = document.querySelectorAll('.ball');
  const generateColor = document.querySelector('#rgb-color');
  for (let index = 0; index < ballSelected.length; index += 1) {
    const currentBall = ballSelected[index];
    const colorR = Math.floor(Math.random() * 256);
    const colorG = Math.floor(Math.random() * 256);
    const colorB = Math.floor(Math.random() * 256);
    currentBall.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
  }
  const randomColor = Math.floor(Math.random() * 5);
  generateColor.innerHTML = ballSelected[randomColor].style.backgroundColor;
};
backgroundColorBall();

const createParagraphAnswer = () => {
  const sectionAnswer = document.querySelector('#paragraphAnswer');
  const paragraphAnswer = document.createElement('p');
  paragraphAnswer.id = 'answer';
  paragraphAnswer.innerText = 'Escolha uma cor';
  sectionAnswer.appendChild(paragraphAnswer);
};
createParagraphAnswer();

const itsRigth = () => {
  const score = document.querySelector('#score');
  countScore += 3;
  score.innerText = `Pontuação: ${countScore}`;
};

const ballSelectedClass = () => {
  const balls = document.querySelectorAll('.ball');
  const colorRGB = document.querySelector('#rgb-color').innerText;
  const paragraphAnswer = document.querySelector('#answer');

  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', (event) => {
      if (colorRGB === event.target.style.backgroundColor) {
        paragraphAnswer.innerText = 'Acertou!';
        itsRigth();
      } else {
        paragraphAnswer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
};
ballSelectedClass();

const createButtonReset = () => {
  const sectionButton = document.querySelector('#button');
  const buttonReset = document.createElement('button');
  buttonReset.id = 'reset-game';
  buttonReset.innerText = 'Reiniciar Jogo';
  sectionButton.appendChild(buttonReset);
};
createButtonReset();

const getButton = document.querySelector('#reset-game');
const resetGame = () => {
  const paragraphAnswer = document.querySelector('#answer');
  paragraphAnswer.innerText = 'Escolha uma cor';

  backgroundColorBall();
  ballSelectedClass();
};
getButton.addEventListener('click', resetGame);

const createScoreGame = () => {
  const sectionScore = document.querySelector('#score-game');
  const score = document.createElement('p');
  score.id = 'score';
  score.innerText = `Pontuação: ${countScore}`;
  sectionScore.appendChild(score);
};
createScoreGame();
