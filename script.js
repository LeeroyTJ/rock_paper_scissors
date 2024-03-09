function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    switch(randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    };
};

let winnerIsPlayer = 0;
let winnerIsComp = 0;

function playRound(playerSelection, computerSelection) {

    let playerInput = playerSelection;
    let compInput = computerSelection;
    resultDisplay.textContent = '';
    
    if (playerInput === compInput) {
        winnerIsPlayer = winnerIsPlayer;         
    }
    else if (playerInput === "Rock" && compInput === "Scissors" || 
    playerInput === "Paper" && compInput === "Rock" || 
    playerInput === "Scissors" && compInput === "Paper") {        
        winnerIsPlayer = winnerIsPlayer + 1;
    }
    else {        
        winnerIsComp = winnerIsComp + 1;
    };

    isWinner();

    if (winnerIsPlayer === 5 && winnerIsPlayer > winnerIsComp) {
        resultDisplay.textContent = 'Yay!!! You have WON. Congratulations!!!!!';
        return;
    }
    else if (winnerIsComp === 5 && winnerIsPlayer < winnerIsComp) {
        resultDisplay.textContent = 'Eish, Computer wins. Better luck next time mate.';
        return;
    } 
};

const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
rockBtn.className = 'roundBtn';
const paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';
paperBtn.className = 'roundBtn';
const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'Scissors';
scissorsBtn.className = 'roundBtn';

rockBtn.addEventListener('click', function() {
    playRound('Rock', getComputerChoice());    
});

paperBtn.addEventListener('click', function() {
    playRound('Paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', function() {
    playRound('Scissors', getComputerChoice());
});

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);

const buttonsContainer = document.createElement('div');
buttonsContainer.className = 'buttons-container';

buttonsContainer.appendChild(rockBtn);
buttonsContainer.appendChild(paperBtn);
buttonsContainer.appendChild(scissorsBtn);

document.body.appendChild(buttonsContainer);

buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent = 'center'

document.querySelectorAll('.roundBtn').forEach(btn => {
    btn.style.borderRadius = '50%';
    btn.style.width = '100px';
    btn.style.height = '100px';
    btn.style.margin = '0 20px'; // Adjust margin between buttons
    btn.style.color = 'white';
    btn.style.fontWeight = 'bold';
    btn.style.fontSize = '16px';
});

rockBtn.style.backgroundColor = 'red';
paperBtn.style.backgroundColor = 'green';
scissorsBtn.style.backgroundColor = 'blue';

const resultDisplay = document.createElement('div');
resultDisplay.className = 'resultDisplay';

document.body.appendChild(resultDisplay);


function isWinner() {
    if (winnerIsPlayer > winnerIsComp) {
        resultDisplay.textContent = `Player ${winnerIsPlayer} - Computer ${winnerIsComp}`;
    }
    else if (winnerIsPlayer < winnerIsComp) {
        resultDisplay.textContent = `Player ${winnerIsPlayer} - Computer ${winnerIsComp}`;
    }
    else {
        resultDisplay.textContent = `Player ${winnerIsPlayer} - Computer ${winnerIsComp}`;
    }
};
