function generateRGBCode() {
  const firstRbgCode = Math.floor(Math.random() * 254);
  const secondRbgCode = Math.floor(Math.random() * 254);
  const thirdRbgCode = Math.floor(Math.random() * 254);

  return `(${firstRbgCode}, ${secondRbgCode}, ${thirdRbgCode})`;
}

function setRGBCode() {
  const codeColor = document.querySelector('#rgb-color');
  codeColor.innerHTML = generateRGBCode();
}

setRGBCode();
