/*
TODO: RPS logic
*/
function helloUser() {
    let name = prompt("Enter your name."); 
    alert("Hello, " + name + "!"); 
    console.log("We're going to play a game of Rock, Paper, Scissors against the computer."); 
    console.log("\n\tNerd.")
}

// Initialize RPS Values, computer and player values.
let objects = ['rock','paper','scissors']; 
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

function userPlay(playerSelection) {
    // Make case insensitive
    let choice = prompt("0: Rock\n1: Paper\n2: Scissors");
    playerSelection = objects[+choice];
    return playerSelection; 
}

function playRound(computerSelection, playerSelection='rock') {
    computerSelection = computerPlay(); 
    playerSelection = userPlay(); 
    console.log(`Computer played ${computerSelection}.`); 
    console.log(`User played ${playerSelection}.`);

    if (computerSelection === playerSelection){
        return `It's a draw! ${computerSelection} and ${playerSelection} are the same!`;
    }
    else if (computerSelection == 'rock' && playerSelection != 'paper') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection == 'paper' && playerSelection != 'scissors') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection == 'scissors' && playerSelection != 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}   

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound()); 
    }
}

game(); 