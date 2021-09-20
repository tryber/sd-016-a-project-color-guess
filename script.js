function createRandomTextRGB() {
  let mainContainer = document.createElement('main');
  mainContainer.id = 'main-container';
  mainContainer.style.textAlign = 'center';

  let randomTextRGB = document.createElement('p')
  randomTextRGB.id = 'rgb-color';
  randomTextRGB.innerText = '(168, 34, 1)';

  document.body.appendChild(mainContainer);
  mainContainer.appendChild(randomTextRGB);
}

createRandomTextRGB();

let mainContainer = document.getElementById('main-container');
function createColorsOptions() {
  for (let i = 0; i <= 5; i += 1) {
    let colorOptions = document.createElement('button');
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

window.onload = () => {
  createColorsOptions();
  generateRandomTextRGB();
}
