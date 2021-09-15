const rgbColor = document.querySelector('#rgb-color');
const rgbAnswerSection = document.querySelector('#rgb-answers');

function randomRGB() {
  const r = Math.ceil(Math.random() * 256);
  const g = Math.ceil(Math.random() * 256);
  const b = Math.ceil(Math.random() * 256);

  return [r, g, b];
}

function rgbReference() {
  rgbColor.innerText = `rgb(${randomRGB()})`;
}
rgbReference();

function answerOptions() {
  for (let index = 0; index < 6; index += 1) {
    const answerOpt = document.createElement('div');
    answerOpt.className = 'ball';
    rgbAnswerSection.appendChild(answerOpt);
  }
}
answerOptions();

function createAnswerColors() {
  const colors = [];
  for (let index = 0; index < 6; index += 1) {
    colors.push(`rgb(${randomRGB()})`);
  }
  const indexR = Math.floor(Math.random() * 6);
  colors[indexR] = rgbColor.innerText;
  return colors;
}

function insertBackgroundColor() {
  const colorArrayBgC = createAnswerColors();
  const answerOption = document.querySelectorAll('.ball');
  for (let index = 0; index < answerOption.length; index += 1) {
    answerOption[index].style.backgroundColor = colorArrayBgC[index];
  }
}
insertBackgroundColor();
