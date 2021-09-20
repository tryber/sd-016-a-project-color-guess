const standardColor = () => {
  const colorRGB = document.querySelector('#standard-color');
  const createParagraph = document.createElement('p');
  createParagraph.innerHTML = '(123, 45, 210)';
  createParagraph.id = 'rgb-color';
  colorRGB.appendChild(createParagraph);
};
standardColor();
