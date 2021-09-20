function createRandomTextRGB() {
  const mainContainer = document.createElement('main');
  mainContainer.id = 'main-container';
  mainContainer.style.textAlign = 'center';

  const randomTextRGB = document.createElement('p');
  randomTextRGB.id = 'rgb-color';

  document.body.appendChild(mainContainer);
  mainContainer.appendChild(randomTextRGB);
}
createRandomTextRGB();

const mainContainer = document.getElementById('main-container');
function createColorsOptions() {
  for (let i = 0; i <= 5; i += 1) {
    const colorOptions = document.createElement('div');
    colorOptions.className = 'ball';
    colorOptions.style.backgroundColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`;
    mainContainer.appendChild(colorOptions);
  }
}
createColorsOptions();

function createScore() {
  const score = document.createElement('p');
  score.id = 'score';
  score.innerText = 0;

  mainContainer.appendChild(score);
}
createScore();

function generateRandomTextRGB() {
  const randomTextRGB = document.getElementById('rgb-color');
  const colorOptions = document.querySelectorAll('.ball');
  const randomIndex = Math.floor(Math.random() * 6);

  const randomColor = colorOptions[randomIndex].style.backgroundColor;
  randomTextRGB.innerText = randomColor;
}
generateRandomTextRGB();

function createAnswerText() {
  const answerText = document.createElement('p');
  answerText.id = 'answer';
  answerText.innerText = 'Escolha uma cor';

  mainContainer.appendChild(answerText);
}
createAnswerText();

function createRestartButton() {
  const restartButton = document.createElement('button');
  restartButton.id = 'reset-game';
  restartButton.innerText = 'Resetar';

  mainContainer.appendChild(restartButton);
}
createRestartButton();

const answerText = document.getElementById('answer');
function restartGame() {
  const colorOptions = document.querySelectorAll('.ball');

  for (let i = 0; i < colorOptions.length; i += 1) {
    colorOptions[i].style.backgroundColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`;
    // https://stackoverflow.com/questions/5882768/how-to-append-a-childnode-to-a-specific-position
    // Referencia do "insertBefore" para colocar as novas opcoes de cores exatamente depois do primeiro filho (p) do mainContainer
    mainContainer.insertBefore(colorOptions[i], mainContainer.children[1]);
  }

  generateRandomTextRGB();
  answerText.innerText = 'Escolha uma cor';
}

function handleColorButtons() {
  const colorButtons = document.querySelectorAll('.ball');
  const score = document.getElementById('score');

  for (let i = 0; i < colorButtons.length; i += 1) {
    colorButtons[i].addEventListener('click', () => {
      const randomTextRGB = document.getElementById('rgb-color').innerText;
      if (colorButtons[i].style.backgroundColor === randomTextRGB) {
        answerText.innerText = 'Acertou!';
        // Arrumando erro do lint "radix"
        // https://eslint.org/docs/rules/radix
        // https://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter
        let scoreInt = parseInt((score.innerText), 10);
        scoreInt += 3;
        score.innerText = scoreInt;
      } else {
        console.log(colorButtons[i].style.backgroundColor);
        console.log(randomTextRGB);
        answerText.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}
handleColorButtons();

const restartButton = document.getElementById('reset-game');
restartButton.addEventListener('click', restartGame);
