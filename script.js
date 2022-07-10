// Initialize RPS Values, computer and player values.
let objects = ['Rock','Paper','Scissors']; 
let computerSelection = 0; 
let playerSelection = 0; 

// Randomly generate number between 0-2 
function randomNumber(min=0, max=3) {
  const r = Math.random()*(max-min) + min; 
  return Math.floor(r); 
}

// Computer's round.
function computerPlay(computerSelection) {
  let i = randomNumber(); 
  computerSelection = objects[i];
  return computerSelection;
}

// Player round
function playerPlay(playerSelection) {
  return objects[playerSelection];
}

// rock 
const btnA = document.querySelector('#rock'); 
btnA.addEventListener('click', function(e) {
  playRound(computerSelection, playerSelection=0) //rock
});

// paper
const btnB = document.querySelector('#paper'); 
btnB.addEventListener('click', function(e) {
  playRound(computerSelection, playerSelection=0) //rock
});

//scissors
const btnC = document.querySelector('#scissors'); 
btnC.addEventListener('click', function(e) {
  playRound(computerSelection, playerSelection=0) //rock
});

function playRound(computerSelection, playerSelection) {
  computerSelection = computerPlay(); 
  playerSelection = playerPlay(playerSelection);
  //playerSelection = objects[playerSelection]; 
  console.log(`Computer played ${computerSelection}.`); 
  console.log(`User played ${playerSelection}.`);

  if (computerSelection === playerSelection){
    console.log(`Draw: ${computerSelection} === ${playerSelection}.`);
  }
  else if (computerSelection == 'rock' && playerSelection != 'paper') {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
  }
  else if (computerSelection == 'paper' && playerSelection != 'scissors') {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
  }
  else if (computerSelection == 'scissors' && playerSelection != 'rock') {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
  }
  else {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
  }
}

