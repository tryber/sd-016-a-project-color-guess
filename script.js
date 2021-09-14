function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let array = [];

for(let i = 0; i < 3; i += 1){
    array.push(getRandomInt(0, 255));
}

const text = document.getElementById('rgb-color');
text.innerText = `(${array[0]}, ${array[1]}, ${array[2]})`;

const colors = document.getElementById('colors');
for(let i = 0; i < 6; i += 1){
    colors.appendChild(document.createElement('div')).classList.add('ball');
    colors.children[i].id = i;
}