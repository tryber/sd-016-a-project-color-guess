// Localiza texto rgb
const rgbColor = document.querySelector('#rgb-color');

// Localiza lista das opções de cores
const colorOptions = document.querySelector('#color-options');

// Localiza string de respota
const answerString = document.querySelector('#answer');

// Localiza botão de reiniciar
const restartBtn = document.querySelector('#reset-game');

// Localiza valor do score
const score = document.querySelector('#score');
let scoreCalc = 0; 
score.innerHTML = scoreCalc;

// Funções:
// Gera um código RGB aleatório para inserir em rgbColor
function generateRgb() {
    const codeArray = [];
    for (let index = 0; index < 3; index += 1) {
      const colorCode = Math.floor(Math.random() * 256);
      codeArray.push(colorCode);
    }
  
    const colorString = `(${codeArray[0]}, ${codeArray[1]}, ${codeArray[2]})`;
    return colorString;
}

// Verificar se é a resposta correta
function checkIfCorrect(event) {
    const answer = `rgb${rgbColor.innerHTML}`;
    if (event.target.style.backgroundColor === answer) {
        answerString.innerHTML = 'Acertou!';
        scoreCalc += 3;
        score.innerHTML = scoreCalc;
    } else {
        answerString.innerHTML = 'Errou! Tente novamente!';
    }
}

// Colore as opções com cores aleatórias
function colorizeOptions() {
    const randomIndex = Math.floor(Math.random() *5 );
    for (let index = 0; index < colorOptions.children.length; index += 1) {
        if (index === randomIndex) {
            colorOptions.children[index].style.backgroundColor = `rgb${rgbColor.innerHTML}`;
        } else {
            colorOptions.children[index].style.backgroundColor = `rgb${generateRgb()}`;
        }
        colorOptions.children[index].addEventListener('click', checkIfCorrect);
    }
}

// Reinicia o jogo
function restartGame() {
    answerString.innerHTML = 'Escolha uma cor'
    rgbColor.innerHTML = generateRgb();
    colorizeOptions();
}

restartBtn.addEventListener('click', restartGame);

// Carregamento da página
window.onload = function onLoad() {
    restartGame();
};
