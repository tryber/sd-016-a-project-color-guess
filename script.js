const getIdRgb = document.querySelector('#rgb-color');
const rgbColors = ['(168,3,1)'];

function chooseColors() {
  const choose = rgbColors[Math.floor(Math.random() * 1)];
  return choose;
}

function inputRgb() {
  getIdRgb.innerHTML = chooseColors();
}

inputRgb();
