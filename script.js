const colorArray = [];
const setColorText = document.getElementById('rgb-color');
const colorsBalls = document.getElementsByClassName('ball');

function setRandom(min, max) {
   return Math.round(Math.random() * (max - (min - 1))) + min;
  }

  function generateRandomColor() {
    return `rgb(${setRandom(1, 255)}, ${setRandom(1, 255)}, ${setRandom(1, 255)})`;
  }



for(let i = 0; i < 6; i += 1) {
    colorArray.push(generateRandomColor());
}

function createColors() {
    const colorContainer = document.getElementById('container');
    for(let index = 0; index < colorArray.length; index += 1) {
        const div = document.createElement('div');
        div.classList.add('ball');
        div.style.backgroundColor = colorArray[index];
        colorContainer.appendChild(div);
    }
}

function setTextRGB() {
        const divValue = colorsBalls[Math.round(Math.random() * colorsBalls.length-1)];
        setColorText.innerHTML = divValue.style.backgroundColor;
    }
window.onload = () => {
    createColors(); 
    setTextRGB();
}

   



