const container = document.querySelector('.container');

function randomColors() {
  const colorRandon1 = Math.floor(Math.random() * 255);
  const colorRandon2 = Math.floor(Math.random() * 255);
  const colorRandon3 = Math.floor(Math.random() * 255);
  const colorSelected = `(${colorRandon1}, ${colorRandon2}, ${colorRandon3})`;
  return colorSelected;
}

function arrayColor() {
  const arrayColors = [];
  for (let index = 0; index < 6; index += 1) {
    arrayColors.push(randomColors());
  }
  return arrayColors;
}

function generatorColor() {
  return arrayColor();
}

const generatorColors = generatorColor();

function createGamecolor(color) {
  const randon = Math.floor(Math.random() * color.length);
  const createColor = document.createElement('p');
  createColor.id = 'rgb-color';
  createColor.innerHTML = color[randon];
  container.appendChild(createColor);
  return color;
}

function createOptionColors() {
  for (let index = 0; index < 6; index += 1) {
    // let sort = Math.floor(Math.random() * 6)
    const createDivColors = document.createElement('div');
    createDivColors.classList.add('ball');
    container.appendChild(createDivColors);
  }
}

function inputColor(color) {
  const divColors = document.querySelectorAll('.ball');
  for (let index = 0; index < 6; index += 1) {
    const rgb = `rgb${color[index]}`;
    divColors[index].style.backgroundColor = rgb;
  }
}

function createAnswer() {
  const creatText = document.createElement('p');
  creatText.id = 'answer';
  creatText.innerHTML = 'Escolha uma cor';
  container.appendChild(creatText);
}

function validationColor() {
  const selectAnswer = document.querySelector('#answer');
  const selectColor = document.querySelector('#rgb-color').innerHTML;
  const selectBalls = document.querySelectorAll('.ball');
  for (let index = 0; index < selectBalls.length; index += 1) {
    selectBalls[index].addEventListener('click', (event) => {
      console.log(event.target.style.backgroundColor);
      if (event.target.style.backgroundColor === `rgb${selectColor}`) {
        selectAnswer.innerHTML = 'Acertou!';
      } else {
        selectAnswer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
}
function createButton() {
  const createButtonReset = document.createElement('button');
  createButtonReset.innerHTML = 'Resetar Jogo';
  createButtonReset.id = 'reset-game';
  createButtonReset.type = 'submit';
  container.appendChild(createButtonReset);
}

createGamecolor(generatorColors);
createOptionColors();
inputColor(generatorColors);
createAnswer();
validationColor();
createButton();

const selectButton = document.querySelector('#reset-game');
selectButton.addEventListener('click', () => {
  const selectColor = document.querySelector('#rgb-color');
  const selectAnswer = document.querySelector('#answer');
  const gerador = generatorColor();
  const randon = Math.floor(Math.random() * gerador.length);
  inputColor(gerador);
  selectColor.innerHTML = gerador[randon];
  selectAnswer.innerHTML = 'Escolha uma cor';
  validationColor();
});
