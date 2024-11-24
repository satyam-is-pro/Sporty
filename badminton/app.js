const p1Display = document.querySelector('#player-one');
const p2Display = document.querySelector('#player-two');
const maxInput = document.querySelector('#max-input');
const setGameLengthBtn = document.querySelector('#set-game-length');
const stat = document.querySelector('.status');
const p1Btn = document.querySelector('#player-uno');
const p2Btn = document.querySelector('#player-dos');
const resetBtn = document.querySelector('#reset');

let maxValue = localStorage.getItem('maxValue') ? parseInt(localStorage.getItem('maxValue')) : null;
let p1Score = localStorage.getItem('p1Score') ? parseInt(localStorage.getItem('p1Score')) : 0;
let p2Score = localStorage.getItem('p2Score') ? parseInt(localStorage.getItem('p2Score')) : 0;

if (maxValue) {
    maxInput.value = maxValue;
}
p1Display.innerText = p1Score;
p2Display.innerText = p2Score;

function saveToLocalStorage() {
    localStorage.setItem('p1Score', p1Score);
    localStorage.setItem('p2Score', p2Score);
    localStorage.setItem('maxValue', maxValue);
}

setGameLengthBtn.addEventListener('click', function () {
    const inputValue = parseInt(maxInput.value);
    if (!isNaN(inputValue) && inputValue > 0) {
        maxValue = inputValue;
        stat.innerText = `(Max Points Set: ${maxValue})`;
        stat.style.color = "limegreen";
        saveToLocalStorage();
    } else {
        alert("Please enter a valid positive number for the game length.");
    }
});

p1Btn.addEventListener('click', function () {
    if (!maxValue) {
        alert("Please set the game length before starting.");
        return;
    }
    p1Score++;
    p1Display.innerText = p1Score;
    saveToLocalStorage();
    checkGameStatus();
});

p2Btn.addEventListener('click', function () {
    if (!maxValue) {
        alert("Please set the game length before starting.");
        return;
    }
    p2Score++;
    p2Display.innerText = p2Score;
    saveToLocalStorage();
    checkGameStatus();
});

resetBtn.addEventListener('click', function () {
    reset();
});

function checkGameStatus() {
    if (p1Score === maxValue) {
        displayGameOver("Player One Wins!");
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
    } else if (p2Score === maxValue) {
        displayGameOver("Player Two Wins!");
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }
}

function displayGameOver(message) {
    stat.style.color = "white";
    stat.innerText = `(Game Over: ${message})`;
    stat.style.display = 'block';
    p1Btn.disabled = true;
    p2Btn.disabled = true;
}

function reset() {
    stat.style.color = "#fff";
    stat.innerText = "(Status)";
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    saveToLocalStorage();
}
