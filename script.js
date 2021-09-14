const rgbColor = document.querySelector('#rgb-color');

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