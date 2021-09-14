const balls = document.querySelectorAll('.ball');

function returnRandomRGBColor() {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`
}

function addCorToBalls() {
  balls.forEach((ball) => {
    ball.style.backgroundColor = returnRandomRGBColor();
  });
}

window.onload = addCorToBalls;