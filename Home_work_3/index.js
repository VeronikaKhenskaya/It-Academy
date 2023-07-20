function name() {
    let userName = prompt("Please, enter your name");
}

function startGame() {
    let userChoice = prompt("Rock, Scissors, Paper... Please make your move");
    if (userChoice == null) {
        alert("You aborted this game. To start new game just refresh the page.")
    }
    if (userChoice != "rock" || userChoice != "scissors" || userChoice != "paper") {
        startGame();
    }
}

function computerMove() {
    let gameChoice = ["rock", "scissors", "paper"];
    let randomArrayChoice = Math.floor(Math.random() * gameChoice.length);
    let computerChoice = gameChoice[randomArrayChoice];
    return computerChoice;
}


if (computerChoice === userChoice) {
 alert()
}
if (computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "paper" || computerChoice === "paper" && userChoice === "rock"){
    alert ("Computer won this round: Current count is <username>: <userscore>: Computer <computerScore>")
} else {
    alert ("You won this round: Current count is <username>: <userscore>: Computer <computerScore>")
}