function getComputerChoice() {
    let n = 3; // number of choices
    let choice = Math.floor(Math.random() * n) + 1;
    if (choice === 1) return 'Rock';
    else if (choice === 2) return 'Paper';
    else return 'Scissors';
}
