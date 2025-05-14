// Script for the Rock Paper Scissors game logic

const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    
    //generates a number for the index of the array (0 - 2)
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // main logic: both the same = tie
    if (playerChoice === computerChoice) {
        result = "DRAW";
    }

    else {

        switch(playerChoice) {
            
            /* Here, since there is already a condition for a tie, 
            we can just check if the computer chose scissors.
            since this is a ternary operator, instantly return YOU WIN
            if you chose rock and the computer chose scissors, else, you
            lose since the computer only other choice is paper. The
            logic is the same for the other cases. */
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "COMPUTER WINS!";
                break;

            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "COMPUTER WINS!";
                break;
            
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "COMPUTER WINS!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultsDisplay.textContent = result;

    resultsDisplay.classList.remove("green-text", "red-text")

    /* Switches the color of the result text 
    depending on who wins
    player wins = green 
    computer wins = red */
    switch(result) {
        case "YOU WIN!":
            resultsDisplay.classList.add("green-text");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "COMPUTER WINS!":
            resultsDisplay.classList.add("red-text");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}