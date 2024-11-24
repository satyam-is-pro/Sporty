const p1Display = document.querySelector('#player-one');
const p2Display = document.querySelector('#player-two');
const maxSelect = document.querySelector('#max-select');
const stat = document.querySelector('.status');
const p1Btn = document.querySelector('#player-uno');
const p2Btn = document.querySelector('#player-dos');
const resetBtn = document.querySelector('#reset');

let maxValue = localStorage.getItem('maxValue') ? parseInt(localStorage.getItem('maxValue')) : 7;
let p1Score = localStorage.getItem('p1Score') ? parseInt(localStorage.getItem('p1Score')) : 0;
let p2Score = localStorage.getItem('p2Score') ? parseInt(localStorage.getItem('p2Score')) : 0;

maxSelect.value = maxValue;
p1Display.innerText = p1Score;
p2Display.innerText = p2Score;

function saveToLocalStorage() {
    localStorage.setItem('p1Score', p1Score);
    localStorage.setItem('p2Score', p2Score);
    localStorage.setItem('maxValue', maxValue);
}

maxSelect.addEventListener('change', function () {
    maxValue = parseInt(maxSelect.value);
    reset();
});

p1Btn.addEventListener('click', function () {
    p1Score++;
    p1Display.innerText = p1Score;
    saveToLocalStorage();

    if (maxValue > 7) {
        checkDeuce();
    } else {
        lowerCheck();
    }

    if (p1Score === maxValue) {
        stat.style.color = "white";
        stat.innerText = "(Game Over)";
        stat.style.display = 'block';
        p1Display.classList.toggle('winner');
        p2Display.classList.toggle('loser');
        gameOver();
    }
});

p2Btn.addEventListener('click', function () {
    p2Score++;
    p2Display.innerText = p2Score;
    saveToLocalStorage();

    if (maxValue > 7) {
        checkDeuce();
    } else {
        lowerCheck();
    }

    if (p2Score === maxValue && p2Score !== p1Score) {
        stat.style.color = "white";
        stat.innerText = "(Game Over)";
        stat.style.display = 'block';
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
        gameOver();
    }
});

resetBtn.addEventListener('click', function () {
    reset();
});

function lowerCheck() {
    if (p1Score === maxValue - 1 && p2Score === maxValue - 1) {
        stat.style.color = "white";
        stat.innerText = "(Next Point Wins)";
    }
    return;
}

function checkDeuce() {
    if (p1Score === maxValue - 1 && p2Score === maxValue - 1) {
        maxValue++;
        stat.style.color = "white";
        stat.style.display = "block";
        stat.innerText = "(Deuce)";
    } else if (p1Score === maxValue - 1 || p2Score === maxValue - 1) {
        stat.style.color = "white";
        if (stat.innerText === "(Deuce)") {
            stat.innerText = "(Adv.)";
        } else {
            stat.style.color = "white";
            stat.innerText = "(Game Point)";
        }
    }
    return;
}

function reset() {
    stat.style.color = "#111";
    stat.innerText = "Status";
    p1Score = 0;
    p2Score = 0;
    maxValue = parseInt(maxSelect.value);
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    saveToLocalStorage();
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    p1Btn.classList.remove('disabled');
    p2Btn.classList.remove('disabled');
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}

function gameOver() {
    p2Btn.disabled = true;
    p1Btn.disabled = true;
    p2Btn.classList.toggle('disabled');
    p1Btn.classList.toggle('disabled');
}
