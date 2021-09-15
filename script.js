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

function createSpans() {
  for (let index = 1; index <= 6; index += 1) {
    const createSection = document.createElement('span');
    createSection.classList.add('ball');
    createSection.style.padding = '20px';
    createSection.style.borderRadius = '50%';
    createSection.style.height = '1px';
    createSection.style.border = '1px solid black';
    createSection.style.width = '1px';
    createSection.style.marginLeft = '10px';
    createSection.style.marginTop = '100px';
    createSection.style.display = 'inline-block';
    getIdRgb.appendChild(createSection);
  }
}

createSpans();
