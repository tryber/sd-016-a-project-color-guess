const colorDisplay = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
  return `(${randomRange(0, 255)}, ${randomRange(0, 255)}, ${randomRange(0, 255)})`;
}

balls.forEach((elem) => {
  elem.style.backgroundColor = `rgb${randomColor()}`;
});

const colorGuess = randomColor();
colorDisplay.innerText = colorGuess;
const randomBall = balls[Math.floor(Math.random() * balls.length)];
randomBall.style.backgroundColor = `rgb${colorGuess}`;
randomBall.classList.toggle('color');
