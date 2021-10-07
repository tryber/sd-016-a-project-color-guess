// const balls = document.querySelectorAll('.ball');

const arrayRgb = [];

function rgbGenerator () {
   for(let index = 0; index < 3; index += 1){
    arrayRgb.push(Math.round(Math.random()*100))
  }
  return `rgb(${arrayRgb[0]}, ${arrayRgb[1]}, ${arrayRgb[2]})`
}
rgbGenerator()

// // balls.forEach((ball) => ball.style.backgroundColor = rgbGenerator());

// for (let i = 0; i < balls.length; i += 1) {
//   console.log(balls[i])
// }

const balls = document.querySelectorAll('.ball')
console.log(balls)