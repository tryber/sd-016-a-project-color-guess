const getIdRgb = document.querySelector('#rgb-color');
const getButtonReset = document.getElementsByTagName('button')[0];
const childIdRgb = document.querySelector('.showColors');
const getClassColor = document.querySelector('.showColors');
const creatingPTask = document.createElement('p');

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
  const getBall = document.querySelectorAll('.ball');
  const chooseColorByRgb = getBall[Math.floor(Math.random() * 6)].style.backgroundColor;
  // Método replace: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  // Pega a string 'rgb' e a substitui pela string vazia.
  getIdRgb.innerText = chooseColorByRgb.replace('rgb', '');
}

function createColors() {
  const getBall = document.querySelectorAll('.ball');
  for (let index = 0; index < 6; index += 1) {
    getBall[index].style.backgroundColor = creatingRgbColor();
  }
  getInputRgbAndDisplayInMyPage();
}

function creatingTaskGame() {
  creatingPTask.id = 'answer';
  creatingPTask.innerText = 'Escolha uma cor';
  getClassColor.appendChild(creatingPTask);
}

function creatingGame() {
  const getClassColors = document.querySelectorAll('.ball');
  const getPTask = document.querySelector('#answer');
  for (let index = 0; index < getClassColors.length; index += 1) {
    getClassColors[index].addEventListener('click', () => {
      if (getClassColors[index].style.backgroundColor === getIdRgb.innerHTML.replace('', 'rgb')) {
        getPTask.innerText = 'Acertou!';
      } else {
        getPTask.innerText = 'Errou! Tente novamente!';
      }
    });
  }
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
  creatingTaskGame();
  creatingGame();
}
createSpans();

getButtonReset.addEventListener('click', () => {
  createColors();
  creatingTaskGame();
  creatingGame();
});
