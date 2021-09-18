const container = document.querySelector('.container');

function randomColors() {
  const colorRandon1 = Math.floor(Math.random() * 255);
  const colorRandon2 = Math.floor(Math.random() * 255);
  const colorRandon3 = Math.floor(Math.random() * 255);
  const colorSelected = `(${colorRandon1}, ${colorRandon2}, ${colorRandon3})`;
  return colorSelected;
}

function arrayColor() {
  const arrayColors = [];
  for (let index = 0; index < 6; index += 1) {
    arrayColors.push(randomColors());
  }
  return arrayColors;
}

const generatorColor = arrayColor();
console.log(generatorColor);

function createGamecolor() {
  const randon = Math.floor(Math.random() * generatorColor.length);
  console.log(randon);
  const createColor = document.createElement('p');
  createColor.id = 'rgb-color';
  createColor.innerHTML = generatorColor[randon];
  container.appendChild(createColor);
}

function createOptionColors() {
  for (let index = 0; index < 6; index += 1) {
    // let sort = Math.floor(Math.random() * 6)
    const createDivColors = document.createElement('div');
    createDivColors.classList.add('ball');
    const rgb = `rgb${generatorColor[index]}`;
    createDivColors.style.backgroundColor = rgb;
    container.appendChild(createDivColors);
  }
}

function createAnswer() {
  const creatText = document.createElement('p');
  creatText.id = 'answer';
  creatText.innerHTML = 'Escolha uma cor';
  container.appendChild(creatText);
}

function validationColor() {
  const selectAnswer = document.querySelector('#answer');
  const selectColor = document.querySelector('#rgb-color').innerHTML;
  const selectBalls = document.querySelectorAll('.ball');
  for (let index = 0; index < selectBalls.length; index += 1) {
    selectBalls[index].addEventListener('click', (event) => {
      console.log(event.target.style.backgroundColor);
      if (event.target.style.backgroundColor === `rgb${selectColor}`) {
        selectAnswer.innerHTML = 'Acertou!';
      } else {
        selectAnswer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
}

createGamecolor();
createOptionColors();
createAnswer();
validationColor();
