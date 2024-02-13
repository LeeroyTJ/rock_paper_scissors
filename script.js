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

function rockPaperScissors(playerSelection, computerSelection) {
    let playerInput = prompt("Rock, Paper or Scissors? ");
    let compInput = getComputerChoice();

    if (playerInput === compInput) {
        alert("It's a tie! Please go again.");
    }
    else if (playerInput === "Rock" && compInput === "Scissors" || 
    playerInput === "Paper" && compInput === "Rock" || 
    playerInput === "Scissors" && compInput === "Paper") {
        alert(`Yaay, you won! ${playerInput} beats ${compInput}`);
    }
    else {
        alert(`You lose! ${compInput} beats ${playerInput}`);
    }

}
console.log(rockPaperScissors());