const message = document.querySelector('.message');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const buttons = document.querySelectorAll('button');
let playerWins = 0;
let computerWins = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);
}
// buttons[0].addEventListener('click', playGame);
//     buttons[1].addEventListener('click', playGame);
//     buttons[2].addEventListener('click', playGame);

function playGame(e) {
    const playerSelection = e.target.innerText;
    const computerSelection = getComputerSelection();

    const result = checkWinner(playerSelection, computerSelection);

    if (result === 'Player') {
        playerWins++;
    } else if (result === 'Computer') {
        computerWins++;
    }

    updateScore();
    displayResult(playerSelection, computerSelection, result);
}

function getComputerSelection() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScore() {
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
}

function displayResult(player, computer, result) {
    message.innerHTML = `
        Player: <strong>${player}</strong> Computer: <strong>${computer}</strong><br>
        ${result === 'Draw' ? "It's a tie!" : `<strong>${result}</strong> wins!`}
    `;
}

function checkWinner(player, computer) {
    if (player === computer) {
        return 'Draw';
    } else if ((player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')) {
        return 'Player';
    } else {
        return 'Computer';
    }
}