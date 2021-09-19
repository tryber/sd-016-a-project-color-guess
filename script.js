// Declaração de constantes e variáveis
const container = document.querySelector('.container');
let generatorColors;
let randon = 0;
let totScore = 0;

// Função que sorteia os valores aleatórios e returna formatado.
function randomColors() {
  const colorRandon1 = Math.floor(Math.random() * 255);
  const colorRandon2 = Math.floor(Math.random() * 255);
  const colorRandon3 = Math.floor(Math.random() * 255);
  const colorSelected = `(${colorRandon1}, ${colorRandon2}, ${colorRandon3})`;
  return colorSelected;
}

// Função que transforma as cores aleatórias em array e as retorna.
function arrayColor() {
  const arrayColors = [];
  for (let index = 0; index < 6; index += 1) {
    arrayColors.push(randomColors());
  }
  return arrayColors;
}

generatorColors = arrayColor();

// Função que cria o elemento p para definição da cor que deve ser advinhada.
function createGamecolor(color) {
  randon = Math.floor(Math.random() * color.length);
  const createColor = document.createElement('p');
  createColor.id = 'rgb-color';
  createColor.innerHTML = color[randon];
  container.appendChild(createColor);
  return color;
}

// Função que cria as 6 cores para advinhação.
function createOptionColors() {
  for (let index = 0; index < 6; index += 1) {
    // let sort = Math.floor(Math.random() * 6)
    const createDivColors = document.createElement('div');
    createDivColors.classList.add('ball');
    container.appendChild(createDivColors);
  }
}

// Função que colori as div de advinhação.
function inputColor(color) {
  const divColors = document.querySelectorAll('.ball');
  for (let index = 0; index < 6; index += 1) {
    const rgb = `rgb${color[index]}`;
    divColors[index].style.backgroundColor = rgb;
  }
}

// Função que cria o paragrafo de informação do jojo.
function createAnswer() {
  const creatText = document.createElement('p');
  creatText.id = 'answer';
  creatText.innerHTML = 'Escolha uma cor';
  container.appendChild(creatText);
}

// Função que cria o paragrafo de informação de pontuação.
function createScore() {
  const creatScore = document.createElement('p');
  creatScore.id = 'score';
  creatScore.innerHTML = totScore;
  container.appendChild(creatScore);
}

// Função que faz a contagem de pontuação.
function totalScore() {
  const selectScore = document.querySelector('#score');
  totScore += 3;
  selectScore.innerHTML = totScore;
  return selectScore.innerHTML;
}

// Função que valida se usuário acertou ou erro a escolha da cor.
function validationColor() {
  const selectAnswer = document.querySelector('#answer');
  const selectColor = document.querySelector('#rgb-color').innerHTML;
  const selectBalls = document.querySelectorAll('.ball');
  for (let index = 0; index < selectBalls.length; index += 1) {
    selectBalls[index].addEventListener('click', (event) => {
      if (event.target.style.backgroundColor === `rgb${selectColor}`) {
        selectAnswer.innerHTML = 'Acertou!';
        return totalScore();
      }
      selectAnswer.innerHTML = 'Errou! Tente novamente!';
    });
  }
}

// Função que cria o botão de Inicio e Reset Game.
function createButton() {
  const createButtonReset = document.createElement('button');
  createButtonReset.innerHTML = 'Iniciar / Resetar Jogo';
  createButtonReset.id = 'reset-game';
  createButtonReset.type = 'submit';
  container.appendChild(createButtonReset);
}

// Carrega todas as funções para funcionamento do Jogo.
createGamecolor(generatorColors);
createOptionColors();
inputColor(generatorColors);
createAnswer();
validationColor();
createScore();
createButton();

// Função que reseta o Jogo.
const selectButton = document.querySelector('#reset-game');
selectButton.addEventListener('click', () => {
  const selectColor = document.querySelector('#rgb-color');
  const selectAnswer = document.querySelector('#answer');
  randon = Math.floor(Math.random() * generatorColors.length);
  generatorColors = arrayColor();
  inputColor(generatorColors);
  selectColor.innerHTML = generatorColors[randon];
  selectAnswer.innerHTML = 'Escolha uma cor';
  validationColor();
});
