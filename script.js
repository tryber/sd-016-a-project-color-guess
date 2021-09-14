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
answerOptions()
