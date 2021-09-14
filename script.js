// Localiza texto rgb
const rgbColor = document.querySelector('#rgb-color');

// Localiza lista das opções de cores
const colorOptions = document.querySelector('#color-options');

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

// Colore as opções com cores aleatórias
function colorizeOptions() {
    for (let index = 0; index < colorOptions.children.length; index += 1) {
        colorOptions.children[index].style.backgroundColor = `rgb${generateRgb()}`;
    }
}

// Carregamento da página
window.onload = function onLoad() {
    rgbColor.innerHTML = generateRgb();
    colorizeOptions();
};
