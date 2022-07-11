// Initialize RPS Values, computer and player values.
let objects = ['Rock','Paper','Scissors']; 
let computerSelection = 0; 
let playerSelection = 0; 

const rock = document.getElementById("0");
const paper = document.getElementById("1");
const scissors = document.getElementById("2");

rock.addEventListener("click",function(e){
  computerSelection = computerPlay(); 
  playerSelection = objects[0];
  playRound(computerSelection, playerSelection); 
});
paper.addEventListener("click",function(e){
  computerSelection = computerPlay(); 
  playerSelection = objects[1];
  playRound(computerSelection, playerSelection); 
});
scissors.addEventListener("click",function(e){
  computerSelection = computerPlay(); 
  playerSelection = objects[2];
  playRound(computerSelection, playerSelection); 
});

// Get computer selection 
function computerPlay() {
  const r = Math.random()*(3-1) + 1;
  let i = Math.floor(r);
  return objects[i];
}

// Game Logic
function playRound(computerSelection, playerSelection) {
  console.log(computerSelection); 
  console.log(playerSelection);
}