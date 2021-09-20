function createRandomTextRGB() {
  let mainContainer = document.createElement('main');
  mainContainer.id = 'main-container';
  mainContainer.style.textAlign = 'center';

  let randomTextRGB = document.createElement('p')
  randomTextRGB.id = 'rgb-color';

  document.body.appendChild(mainContainer);
  mainContainer.appendChild(randomTextRGB);
}

createRandomTextRGB();

let mainContainer = document.getElementById('main-container');
function createColorsOptions() {
  for (let i = 0; i <= 5; i += 1) {
    let colorOptions = document.createElement('div');
    colorOptions.className = 'ball';
    colorOptions.style.backgroundColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`;
    mainContainer.appendChild(colorOptions);
  }
}

function generateRandomTextRGB() {
  let randomTextRGB = document.getElementById('rgb-color');
  let colorOptions = document.querySelectorAll('.ball');
  let randomIndex = Math.floor(Math.random() * 6);

  let randomColor =  colorOptions[randomIndex].style.backgroundColor;
  randomTextRGB.innerText = randomColor;
}

function createAnswerText() {
  let answerText = document.createElement('p');
  answerText.id = 'answer';
  answerText.innerText = 'Escolha uma cor';

  mainContainer.appendChild(answerText);
}


function handleColorButtons() {
  let randomTextRGB = document.getElementById('rgb-color').innerText;
  let answerText = document.getElementById('answer');
  let colorButtons = document.querySelectorAll('.ball');

  for (let i = 0; i < colorButtons.length; i += 1) {
    colorButtons[i].addEventListener('click', () => {
      if (colorButtons[i].style.backgroundColor === randomTextRGB) {
        answerText.innerText = 'Acertou!';
      } else {
        answerText.innerText = 'Errou! Tente novamente!';
      }
    })
  } 
}



window.onload = () => {
  createColorsOptions();
  generateRandomTextRGB();
  createAnswerText();
  handleColorButtons();
}
