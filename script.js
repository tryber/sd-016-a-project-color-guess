const balls = document.querySelectorAll('.ball');
const color = document.getElementById('rgb-color');

const coloringBalls = () => {
  for (let index = 0; index < balls.length; index += 1) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    balls[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
};

const rightColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  color.innerText = `(${red}, ${green}, ${blue})`;
};

const matchColorWithBall = () => {
  balls[Math.floor(Math.random() * 6)].style.backgroundColor = `rgb${color.innerText}`;
};

rightColor();
coloringBalls();
matchColorWithBall();
