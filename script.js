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
        alert(
            `Computer Wins the round!\n Total Score: Human: ${humanScore} - Computer: ${computerScore}`
        );
    } else {
        ++humanScore;
        alert(
            `Human Wins the round!\n Total Score: Human: ${humanScore} - Computer: ${computerScore}`
        );
    }
}
