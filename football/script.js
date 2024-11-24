// Initializing the scores and cards from local storage or default values
const scoreA = document.getElementById("scoreA");
const scoreB = document.getElementById("scoreB");
const yellowCardsA = document.getElementById("yellowCardsA");
const yellowCardsB = document.getElementById("yellowCardsB");
const redCardsA = document.getElementById("redCardsA");
const redCardsB = document.getElementById("redCardsB");

function loadScores() {
  scoreA.textContent = localStorage.getItem("scoreA") || 0;
  scoreB.textContent = localStorage.getItem("scoreB") || 0;
  yellowCardsA.textContent = localStorage.getItem("yellowCardsA") || 0;
  yellowCardsB.textContent = localStorage.getItem("yellowCardsB") || 0;
  redCardsA.textContent = localStorage.getItem("redCardsA") || 0;
  redCardsB.textContent = localStorage.getItem("redCardsB") || 0;
}

// Functions to update scores and cards
function incrementScore(team) {
  const scoreElement = document.getElementById(`score${team}`);
  let score = parseInt(scoreElement.textContent);
  score += 1;
  scoreElement.textContent = score;
  localStorage.setItem(`score${team}`, score);
}

function decrementScore(team) {
  const scoreElement = document.getElementById(`score${team}`);
  let score = parseInt(scoreElement.textContent);
  if (score > 0) {
    score -= 1;
    scoreElement.textContent = score;
    localStorage.setItem(`score${team}`, score);
  }
}

function addYellowCard(team) {
  const yellowCardElement = document.getElementById(`yellowCards${team}`);
  let yellowCards = parseInt(yellowCardElement.textContent);
  yellowCards += 1;
  yellowCardElement.textContent = yellowCards;
  localStorage.setItem(`yellowCards${team}`, yellowCards);
}

function removeYellowCard(team) {
  const yellowCardElement = document.getElementById(`yellowCards${team}`);
  let yellowCards = parseInt(yellowCardElement.textContent);
  if (yellowCards > 0) {
    yellowCards -= 1;
    yellowCardElement.textContent = yellowCards;
    localStorage.setItem(`yellowCards${team}`, yellowCards);
  }
}

function addRedCard(team) {
  const redCardElement = document.getElementById(`redCards${team}`);
  let redCards = parseInt(redCardElement.textContent);
  redCards += 1;
  redCardElement.textContent = redCards;
  localStorage.setItem(`redCards${team}`, redCards);
}

function removeRedCard(team) {
  const redCardElement = document.getElementById(`redCards${team}`);
  let redCards = parseInt(redCardElement.textContent);
  if (redCards > 0) {
    redCards -= 1;
    redCardElement.textContent = redCards;
    localStorage.setItem(`redCards${team}`, redCards);
  }
}

// Load initial values from local storage when the page loads
window.onload = loadScores;
