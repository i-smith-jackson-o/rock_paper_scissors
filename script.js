// Initialize RPS Values, computer and player values.
let objects = ['Rock','Paper','Scissors']; 
let computerSelection = 0; 
let playerSelection = 0; 

const rock = document.getElementById("0");
const paper = document.getElementById("1");
const scissors = document.getElementById("2");

rock.addEventListener("click",function(e){
  computerSelection = computerPlay(); 
  playerSelection = 0;
  playRound(computerSelection, playerSelection); 
});
paper.addEventListener("click",function(e){
  computerSelection = computerPlay(); 
  playerSelection = 1;
  playRound(computerSelection, playerSelection); 
});
scissors.addEventListener("click",function(e){
  computerSelection = computerPlay(); 
  playerSelection = 2;
  playRound(computerSelection, playerSelection); 
});

// Get computer selection 
function computerPlay() {
  const r = Math.random()*(3-0) + 0;
  let i = Math.floor(r);
  return i;
}

// Game Logic
function playRound(computerSelection, playerSelection) {
  console.log("computer: " + objects[computerSelection]);
  console.log("player: " + objects[playerSelection]);

  if (computerSelection === playerSelection) {
    console.log('Draw');
    return;
  }
  if (computerSelection == 0) {
    if (playerSelection == 1 ) {
      console.log('player++');
    } else {
      console.log('computer++')
    }
  }
  if (computerSelection == 1) {
    if (playerSelection == 2 ) {
      console.log('player++');
    } else {
      console.log('computer++')
    }
  }
  if (computerSelection == 2) {
    if (playerSelection == 0 ) {
      console.log('player++');
    } else {
      console.log('computer++')
    }
  }
}