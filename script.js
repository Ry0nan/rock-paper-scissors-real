// Script for the Rock Paper Scissors game logic

// phone = rock, baguette = paper, leek = scissors
const choices = ["phone", "baguette", "leek"];

const playerDisplay        = document.getElementById("playerDisplay");
const computerDisplay      = document.getElementById("computerDisplay");
const resultsDisplay       = document.getElementById("resultsDisplay");
const playerScoreDisplay   = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  // generates a number for the index of the array (0 - 2)
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  // main logic: both the same = tie
  if (playerChoice === computerChoice) {
    result = "DRAW";
  } else {
    switch (playerChoice) {
      /* since there's already a tie condition,
         just check the one winning case */
      case "phone":
        result = (computerChoice === "leek") ? "YOU WIN!" : "TETO WINS!";
        break;
      case "baguette":
        result = (computerChoice === "phone") ? "YOU WIN!" : "TETO WINS!";
        break;
      case "leek":
        result = (computerChoice === "baguette") ? "YOU WIN!" : "TETO WINS!";
        break;
    }
  }

  playerDisplay.textContent   = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Teto: ${computerChoice}`;
  resultsDisplay.textContent  = result;

  resultsDisplay.classList.remove("green-text", "red-text");

  /* Switch the color of the result text depending on who wins:
     YOU WIN! = green; TETO WINS! = red */
  switch (result) {
    case "YOU WIN!":
      resultsDisplay.classList.add("green-text");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "TETO WINS!":
      resultsDisplay.classList.add("red-text");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
