window.onload = function () {
  colorChoices ();
  chooseChallenge ();
  buttonFinish();
};

function generateRandomHue () {
  let newHue = Math.floor(Math.random()*255)+1;
  return newHue;
};

function generateColor (){
  let red = generateRandomHue();
  let green = generateRandomHue();
  let blue = generateRandomHue();
  let newColor = '(' + red + ',' + green + ',' + blue + ')';
  return newColor;
};

function chooseChallenge () {
  let ballsList = document.querySelectorAll('.ball');
  let chooseIndex = Math.floor(Math.random()*6);
  let chooseColor = ballsList[chooseIndex];
  let colorCode = document.querySelector('#rgb-color');

  let colorBall = getComputedStyle(chooseColor).backgroundColor;
  let onlyNumbers = colorBall.replace('rgb', '')
  colorCode.innerHTML = onlyNumbers;
};

function colorChoices () {
  let choices = document.getElementsByClassName('ball');

  for(let index = 0 ; index < choices.length ; index += 1){
    let color = generateColor() ;
    choices[index].style.backgroundColor = 'rgb'+color;
    choices[index].addEventListener('click',scoreCount);
  };
};

function scoreCount (event) {
  let color = 'rgb'+document.querySelector('#rgb-color').innerHTML;
  let placar = document.querySelector('#score');
  let feedbackText = document.querySelector('#answer');
  
  let score = parseInt(placar.innerHTML);
  let choosenColor = event.target.style.backgroundColor;
  console.log(typeof parseInt(score.innerHTML))
  if(choosenColor === color){
    score += 3;
    placar.innerHTML = score;
    feedbackText.innerHTML = "Acertou!"
    colorChoices ();
    chooseChallenge ();
  }else {
    feedbackText.innerHTML = "Errou! Tente novamente!"
    colorChoices ();
    chooseChallenge ();
  };  
};

function buttonFinish () {
  let button = document.querySelector('#finish');
  button.addEventListener('click', restartGame);
}

function restartGame () {
  colorChoices ();
  chooseChallenge ();
};