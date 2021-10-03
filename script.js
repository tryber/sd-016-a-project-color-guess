const txtColor = document.querySelector('#rgb-color');
const ballColors = document.querySelectorAll('.ball');

txtColor.innerHTML = '(168, 34, 1)';

window.onload = () => {
  for (let i = 0, len = ballColors.length; i < len; i += 1) {
    const rgb1 = Math.floor(Math.random() * 255 + 1);
    const rgb2 = Math.floor(Math.random() * 255 + 1);
    const rgb3 = Math.floor(Math.random() * 255 + 1);
    ballColors[i].style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  }
};
