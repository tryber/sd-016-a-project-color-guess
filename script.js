const getIdRgb = document.querySelector('#rgb-color');

const getSection = document.getElementsByTagName('section')[0];
const childIdRgb = document.createElement('p');
getSection.appendChild(childIdRgb);

function creatingRgbColor() {
  const choose = Math.floor(Math.random() * 255);
  const choose1 = Math.floor(Math.random() * 255);
  const choose2 = Math.floor(Math.random() * 255);
  // `` backticks - criação do template
  // concatena strings e variáveis - $
  const rgbColor = `rgb(${choose}, ${choose1}, ${choose2})`;
  return rgbColor;
}

function getInputRgbAndDisplayInMyPage() {
  const rgbNumber = creatingRgbColor();
  getIdRgb.innerText = rgbNumber.replace('rgb', '');
}
getInputRgbAndDisplayInMyPage();

function createColors() {
  const getBall = document.querySelectorAll('.ball');
  for (let index = 0; index < 6; index += 1) {
    getBall[index].style.backgroundColor = creatingRgbColor();
  }
  getInputRgbAndDisplayInMyPage();
}

function createSpans() {
  for (let index = 1; index <= 6; index += 1) {
    const createSpan = document.createElement('span');
    createSpan.classList.add('ball');
    createSpan.style.padding = '20px';
    createSpan.style.borderRadius = '50%';
    createSpan.style.height = '1px';
    createSpan.style.border = '1px solid black';
    createSpan.style.width = '1px';
    createSpan.style.marginLeft = '10px';
    createSpan.style.marginTop = '5px';
    createSpan.style.display = 'inline-block';
    childIdRgb.appendChild(createSpan);
  }
  createColors();
}
createSpans();
