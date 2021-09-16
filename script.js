const colorDisplay = document.querySelector('#rgb-color');

function randomColor() {
    return `(${randomRange(0, 255)}, ${randomRange(0, 255)}, ${randomRange(0, 255)})`
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const colorGuess = randomColor();
colorDisplay.innerText = colorGuess;