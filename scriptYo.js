const balls = document.querySelectorAll('.ball');


function rgbGenerator () {
  const arrayRgb = [];
   for(let index = 0; index < 3; index += 1){
    arrayRgb.push(Math.round(Math.random()*256))
  }
  return `rgb(${arrayRgb[0]}, ${arrayRgb[1]}, ${arrayRgb[2]})`
}

balls.forEach((ball) => ball.style.backgroundColor = rgbGenerator());

