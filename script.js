// Script for the Rock Paper Scissors game logic

// phone = rock, baguette = paper, leek = scissors
const choices = ["phone", "baguette", "leek"];

const playerDisplay        = document.getElementById("playerDisplay");
const computerDisplay      = document.getElementById("computerDisplay");
const resultsDisplay       = document.getElementById("resultsDisplay");
const playerScoreDisplay   = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// sounds
const winSound = new Audio('./assets/sounds/sound-effects/teto-crying.mp3');
const loseSound = new Audio('./assets/sounds/sound-effects/teto-laughing-at-you.mp3');
winSound.volume = 0.01;

const gameModal = document.getElementById("game-modal");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restart-button");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");

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

  if (playerScore === 5 || computerScore === 5) {
    isGameOver();
  }
}

/* checks if the player or teto reaches the score of 5 first
   displays custom images depending who won */
function isGameOver() {
  let winner = playerScore === 5 ? "You Won!" : "Teto Won!";
  modalTitle.textContent = winner;

  if (playerScore === 5) {
    modalImage.src = "./assets/teto-ssets/crying-teto.jpg";  
    modalImage.alt = "Win Image";
    winSound.play();
  } else {
    modalImage.src = "./assets/teto-ssets/smug-teto.jpg"; 
    modalImage.alt = "Lose Image";
    loseSound.play();
  }

  gameModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// restarts the game back to 0
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  playerDisplay.textContent = "Player";
  computerDisplay.textContent = "Teto";
  resultsDisplay.textContent = "Who Won?";
  resultsDisplay.classList.remove("green-text", "red-text");
  gameModal.classList.add("hidden");
  overlay.classList.add("hidden");
}

restartBtn.addEventListener("click", restartGame);

overlay.addEventListener("click", () => {
  gameModal.classList.add("hidden");
  overlay.classList.add("hidden");
});
