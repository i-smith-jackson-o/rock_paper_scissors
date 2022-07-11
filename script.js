// Initialize RPS Values, computer and player values.
let objects = ['Rock','Paper','Scissors']; 
let round = ['Player', 'Computer', 'Draw'];
let computerSelection = 0; 
let playerSelection = 0; 
let winnerScore = 0;
let numDraws = 0;
let numRounds = 0;
let uScore = 0; 
let cScore = 0;
let maxScore = 5;

let buttons = document.querySelectorAll(".button");
const rock = document.getElementById("0");
const paper = document.getElementById("1");
const scissors = document.getElementById("2");
const scoreboard = document.getElementById("scoreboard");
const computerChoice = document.getElementById("computerChoice");
const userChoice = document.getElementById("userChoice");
const computerScore = document.getElementById("computerScore");
const userScore = document.getElementById("userScore");
const roundWinner = document.getElementById("roundWinner");
const winner = document.getElementById("winner");
const draw = document.getElementById("draw");

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

function declareWinner(){
  console.log(objects);
}

function gameLoop() {
  if (uScore === 5 || cScore === 5) {
    declareWinner(); 
  }
}

// Game Logic
function playRound(computerSelection, playerSelection) {
  computerChoice.innerHTML = objects[computerSelection];
  userChoice.innerHTML = objects[playerSelection];

  if (computerSelection === playerSelection) {
    numDraws++;
    roundWinner.innerHTML = round[2];
    draw.innerHTML = numDraws;
    return;
  }
  if (computerSelection == 0) {
    if (playerSelection == 1 ) {
      uScore++; 
      roundWinner.innerHTML = round[0];
      userScore.innerHTML = uScore;
    } else {
      cScore++;
      roundWinner.innerHTML = round[1];
      computerScore.innerHTML = cScore;
    }
  }
  if (computerSelection == 1) {
    if (playerSelection == 2 ) {
      uScore++; 
      roundWinner.innerHTML = round[0];
      userScore.innerHTML = uScore;
    } else {
      cScore++;
      roundWinner.innerHTML = round[1];
      computerScore.innerHTML = cScore;
    }
  }
  if (computerSelection == 2) {
    if (playerSelection == 0 ) {
      uScore++; 
      roundWinner.innerHTML = round[0];
      userScore.innerHTML = uScore;
    } else {
      cScore++;
      roundWinner.innerHTML = round[1];
      computerScore.innerHTML = cScore;
    }
  }
  gameLoop(uScore, cScore);
}


