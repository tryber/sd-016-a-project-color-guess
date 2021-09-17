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
