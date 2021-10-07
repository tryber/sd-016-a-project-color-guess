const balls = document.querySelectorAll('.ball');
const rgbInitial = document.querySelector('#rgb-color');

function rgbGenerator() {
  const arrayRgb = [];
  for (let index = 0; index < 3; index += 1) {
    arrayRgb.push(Math.round(Math.random() * 256))
  }
  return `rgb(${arrayRgb[0]}, ${arrayRgb[1]}, ${arrayRgb[2]})`
}

balls.forEach((ball) => ball.style.backgroundColor = rgbGenerator());

function changeRbg() {
  rgbInitial.innerText = `${balls[Math.floor(Math.random() * 6)].style.backgroundColor}`
}
changeRbg();

const instructionText = document.getElementById('answer')

balls.forEach((ball) => {
  ball.addEventListener('click', () => {
    if (ball.style.backgroundColor === rgbInitial.innerText) {
      instructionText.innerHTML = 'Acertou!';
    } else {
      instructionText.innerHTML = 'Errou! Tente novamente!';
    }
  })
})


// const btnReset = document.querySelector('#reset');
// btnReset.addEventListener('click',() => {

// ;
// btnReset.addEventListener('click', () => {
//   if ()
//   instructionText.innerHTML = 
// })
