function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    switch(randomNum) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

let winnerIsPlayer = 0;
let winnerIsComp = 0;

function playRound(playerSelection, computerSelection) {

    let playerInput = prompt("Rock, Paper or Scissors? ");
    playerInput = playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();

    let compInput = getComputerChoice();    

    if (playerInput === compInput) {  
        alert("It's a tie! Please go again.");
    }

    else if (playerInput === "Rock" && compInput === "Scissors" || 
    playerInput === "Paper" && compInput === "Rock" || 
    playerInput === "Scissors" && compInput === "Paper") {        
        winnerIsPlayer = winnerIsPlayer + 1;
        alert(`Yay, you won! ${playerInput} beats ${compInput}\nPlayer score: ${winnerIsPlayer}`);
    }

    else {        
        winnerIsComp = winnerIsComp + 1;
        alert(`You lose! ${compInput} beats ${playerInput}\nComputer score: ${winnerIsComp}`);
    }
}

function isWinner() {
    if (winnerIsPlayer > winnerIsComp) {
        alert(`Player ${winnerIsPlayer} - Computer ${winnerIsComp}\nPlayer WINS! Hooray!!!!`);
    }
    else if (winnerIsPlayer < winnerIsComp) {
        alert(`Player ${winnerIsPlayer} - Computer ${winnerIsComp}\nSorry, Computer wins. But hey, better luck next time!`);
    }
    else {
        alert(`Player ${winnerIsPlayer} - Computer ${winnerIsComp}\nIt's a DRAW. What a tight game it was.`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    console.log(isWinner());
}

console.log(playGame());