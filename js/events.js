// option 1;
{/* <button onclick="document.body.style.backgroundColor = 'yellow'">Make yellow</button> */}

// option 2;
// We can Use this option sometimes
{/* <button onclick="makeRedButton()">Make Red</button> */}
function makeRedButton(){
  document.body.style.backgroundColor ='red';
}

// option 3;
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
  document.body.style.backgroundColor = 'blue';
}

// option 3; Another
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function(){
  document.body.style.backgroundColor = 'purple';
}

// option: 4
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click',makePink);

function makePink(){
  document.body.style.backgroundColor = 'pink';
}

// option: 4 Another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click',function(){
  document.body.style.backgroundColor = 'green';
});

// option: 4 Final
// We can Use this option sometimes
document.getElementById('make-goldenrod').addEventListener('click',function(){
  document.body.style.backgroundColor = 'goldenrod'
})