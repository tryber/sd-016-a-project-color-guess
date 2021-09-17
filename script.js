const ball = Array.from(document.getElementsByClassName('ball'));
const tagRgb = document.querySelector('#rgb-color');
const phraseReturn = document.getElementById('answer');
const score = document.getElementById('score');
const containerBalls = document.getElementById('container-balls');
const button = document.getElementById('reset-game');
const positionRandom = Math.floor(Math.random() * (6 - 0) + 0);
let counter = 0;

// criando uma função para gerar a cor randomicamente
function randomColor() {
  const colorRandom = [];
  for (let index = 0; index < 3; index += 1) {
    colorRandom.push(Math.floor(Math.random() * (255 - 0) + 1));
  }
  const returnColor = `(${colorRandom[0]}, ${colorRandom[1]}, ${colorRandom[2]})`;
  return returnColor;
}

// Buscando o elemento que vai armazenar a bolinhas de cores
function createRandom() {
  for (let index = 0; index < ball.length; index += 1) {
    const currentColor = randomColor();
    ball[index].innerHTML = '';
    if (ball[index].style.background !== positionRandom) {
      ball[index].style.background = `rgb${currentColor}`;
    }
  }
  tagRgb.innerText = randomColor();
  ball[positionRandom].style.background = `rgb${tagRgb.innerHTML}`;
}
createRandom();

// Fazendo com que o click verifique se está certo ou errado a tentativa
function verifyClick(e) {
  const clickVerify = e.target.attributes[1].value;
  if (clickVerify.includes(tagRgb.textContent)) {
    phraseReturn.innerText = 'Acertou!';
    phraseReturn.style.color = 'green';
    counter += 3;
    score.innerText = counter;
    localStorage.setItem('counter', counter);
  } else {
    phraseReturn.innerText = 'Errou! Tente novamente!';
    phraseReturn.style.color = 'red';
  }
}

containerBalls.addEventListener('click', verifyClick);

button.addEventListener('click', () => {
  createRandom();
  const recoverData = localStorage.getItem('counter');
  phraseReturn.innerText = 'Escolha uma cor';
  return recoverData;
});

window.onload = () => {
  score.innerText = 0;
};
