const container = document.querySelector('.container');

function randomColors() {
  const colorRandon1 = Math.floor(Math.random() * 255);
  const colorRandon2 = Math.floor(Math.random() * 255);
  const colorRandon3 = Math.floor(Math.random() * 255);
  const colorSelected = `(${colorRandon1}, ${colorRandon2}, ${colorRandon3})`;
  return colorSelected;
}

function createGamecolor() {
  const createColor = document.createElement('p');
  createColor.innerHTML = randomColors();
  container.appendChild(createColor);
}

createGamecolor();
