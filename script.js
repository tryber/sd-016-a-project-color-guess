const standardColor = () => {
  const colorRGB = document.querySelector('#standard-color');
  const createParagraph = document.createElement('p');
  createParagraph.innerHTML = '(123, 45, 210)';
  createParagraph.id = 'rgb-color';
  colorRGB.appendChild(createParagraph);
};
standardColor();

const createColorBall = () => {
  const ballContainer = document.querySelector('#color-ball');
  for (let index = 1; index <= 6; index += 1) {
    const createDivBall = document.createElement('div');
    createDivBall.classList.add('ball');
    ballContainer.appendChild(createDivBall);
  }
};
createColorBall();

const backgroundColorBall = () => {
  const ballSelected = document.querySelectorAll('.ball');
  for (let index = 0; index < ballSelected.length; index += 1) {
    const currentBall = ballSelected[index];
    const colorR = Math.floor(Math.random() * 256);
    const colorG = Math.floor(Math.random() * 256);
    const colorB = Math.floor(Math.random() * 256);
    currentBall.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
  }
};
backgroundColorBall();
