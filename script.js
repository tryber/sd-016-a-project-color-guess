// criando uma função para gerar a cor randomicamente
function randomColor() {
  const colorRandom = [];
  for (let index = 0; index < 3; index += 1) {
    colorRandom.push(Math.floor(Math.random() * (255 - 0) + 1));
  }
  const returnColor = `(${colorRandom[0]}, ${colorRandom[1]}, ${colorRandom[2]})`;
  return returnColor;
}
// Buscando o elemento que vai receber o RGB color
const tagRgb = document.querySelector('#rgb-color');
tagRgb.innerHTML = randomColor();

// Buscando o elemento que vai armazenar a bolinhas de cores
const ball = Array.from(document.getElementsByClassName('ball'));
const positionRandom = Math.floor(Math.random() * ( 6 - 0) + 0);
ball[positionRandom].style.background = `rgb${tagRgb.innerHTML}`;

for (let index = 0; index < ball.length; index += 1) {
  const currentColor = randomColor();
  if (ball[index].style.background === '' && ball[index].style.background !== positionRandom) {
    ball[index].style.background = `rgb${currentColor}`;
  }
}

// Faendo a função de reiniciar o jogo
function reload() {
  return window.location.reload();
}

const button = document.getElementById('reset-game');
button.addEventListener('click', () => reload());
