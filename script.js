function rgbtext() {
  const random = Math.round(Math.random() * 5);
  let valor = document.querySelectorAll('.ball')[random].style.backgroundColor;
  const Rgb = [];
  for (let i = 3; i < valor.length; i += 1) {
    Rgb.push(valor[i]);
  }
  valor = '';
  for (let i = 0; i < Rgb.length; i += 1) {
    valor += Rgb[i];
  }
  document.querySelector('p').innerText = valor;
}
function addPoint() {
  const score = document.querySelector('#score');
  score.innerText = parseInt(document.querySelector('#score').innerText, 10) + 3;
}
function guess(origin) {
  let frase = 'rgb';
  frase += document.querySelector('p').innerText;
  if (origin.target.style.backgroundColor === frase) {
    document.querySelector('#answer').innerText = 'Acertou!';
    addPoint();
  } else {
    document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
  }
}
function generetedcolors(numerodecores) {
  for (let i = 0; i < numerodecores; i += 1) {
    let randomColor = 'rgb(';
    randomColor += Math.round(Math.random() * 260);
    randomColor += ',';
    randomColor += Math.round(Math.random() * 260);
    randomColor += ',';
    randomColor += Math.round(Math.random() * 260);
    randomColor += ')';
    const ball = document.createElement('li');
    ball.className = 'ball hover';
    ball.style.backgroundColor = randomColor;
    ball.addEventListener('click', guess);
    document.querySelector('.lista').appendChild(ball);
  }
  rgbtext();
}
function Reset() {
  const lista = document.querySelectorAll('.ball');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].parentElement.removeChild(lista[i]);
  }
  document.querySelector('#answer').innerText = 'Escolha uma cor';
  generetedcolors(6);
}
generetedcolors(6);
document.querySelector('#reset-game').addEventListener('click', Reset);
