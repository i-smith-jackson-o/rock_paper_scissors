/*
Rock Paper Scissors will be played completely from the console. 
Playing against the computer, start with a function called
computerPlay that will randomly return rock, paper, or scissors.

Write a function that plays a single round, taking two parameters: 
playerSelection and computerSelection returns a string that 
declares the winner, eg: "You lose, paper beats rock."

make playerSelection parameter case insensitive.
*/

// Test to verify we're good to go. 
function helloUser() {
    let name = prompt("Enter your name."); 
    alert("Hello, " + name + "!"); 
}

// Generate array of RPS values
let objects = ['rock','paper','scissors']; 

// Randomly generate number between 0-2 
function randomNumber(min=0, max=3) {
    const r = Math.random()*(max-min) + min; 
    return Math.floor(r); 
}

// Computer's round.
function computerSelection() {
    // Generate random number and return 
    // object at index i
    let i = randomNumber(); 
    return objects[i]; 
}

function playerSelection() {
    // Make case insensitive
}

function gameLoop() {

}
