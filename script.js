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
