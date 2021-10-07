const balls = document.querySelectorAll('.ball');
const rgbInitial = document.querySelector('#rgb-color');

function rgbGenerator () {
  const arrayRgb = [];
   for(let index = 0; index < 3; index += 1){
    arrayRgb.push(Math.round(Math.random()*256))
  }
  return `rgb(${arrayRgb[0]}, ${arrayRgb[1]}, ${arrayRgb[2]})`
}

balls.forEach((ball) => ball.style.backgroundColor = rgbGenerator());

function changeRbg () {
  rgbInitial.innerText = `${balls[Math.floor(Math.random()*7)].style.backgroundColor}`
}
changeRbg();

// const btnReset = document.querySelector('#reset');
// btnReset.addEventListener('click',() => {

// })

// const instructionText = document.querySelector('#instruction-text');
// btnReset.addEventListener('click', () => {
//   if ()
//   instructionText.innerHTML = 
// })