function getComputerChoice() {
    let n = 3; // number of choices
    let choice = Math.floor(Math.random() * n) + 1;
    if (choice === 1) return 'Rock';
    else if (choice === 2) return 'Paper';
    else return 'Scissors';
}

function getHumanChoice() {
    let choice = prompt('Enter your choice [Rock, Paper, Scissors]: ');
    choice = choice.toLowerCase();
    if (choice === 'rock') return 'Rock';
    else if (choice === 'paper') return 'Paper';
    else if (choice === 'scissors') return 'Scissors';
    else return 'wrong choice\n';
}

let humanScore = 0,
    computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    alert(
        `Human choice is: ${humanChoice}\n Computer choice is: ${computerChoice}\n`
    );
    if (humanChoice === computerChoice) alert('Draw!');
    else if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        ++computerScore;
        displayScore();
    } else {
        ++humanScore;
        displayScore();
    }
    if (humanScore === 5) displayWinner('Human');
    if (computerScore === 5) displayWinner('Computer');
}

/////////////////////////////           UI IMPLEMENTATION           /////////////////////////////

const buttons = document.querySelectorAll('.container button');

for (let button of buttons) {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        if (button.className === 'rock') playRound('rock', computerChoice);
        else if (button.className === 'paper')
            playRound('paper', computerChoice);
        else playRound('scissors', computerChoice);
    });
}

function displayScore() {
    const p = document.querySelector('.score p');
    p.textContent = `Computer: ${computerScore} Human: ${humanScore}`;
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}

function displayWinner(player) {
    const score = document.querySelector('.score');
    const p = document.createElement('p');

    p.textContent = `${player} is the winner!`;
    score.appendChild(p);
}
