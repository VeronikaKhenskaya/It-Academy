infinitePlay();

function getName() {
    let userName = prompt("Please, enter your name");
    if (userName === null || userName === "") {
        userName = "User";
    }
    return userName;
}

function infinitePlay() {
    do {
        playGame();
    } while (confirm("Do you want to start new game?"));
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let userName = getName();
    do {
        let x = playRound();
        if (x === "computer") {
            computerScore++;
            alert(`Computer won this round: Current count is ${userName}: ${userScore}: Computer ${computerScore}`);
        }
        if (x === "user") {
            userScore++;
            alert(`You won this round: Current count is ${userName}: ${userScore}: Computer ${computerScore}`);
        }
    } while (computerScore < 3 && userScore < 3);
    if (computerScore < userScore) {
        alert(`Congratulations. You won this game. Count - You: ${userScore} : Computer ${computerScore}`);
    } else {
        alert(`Sorry. You lost this game. Count - You: ${userScore} : Computer ${computerScore}`);
    }
}

/* return {string}: winner of the round "computer" or "user" or "tie" */
function playRound() {
    let userChoice;
    do {
        userChoice = (prompt("Rock, Scissors, Paper... Please make your move") + "").toLowerCase();
    } while (userChoice !== "rock" && userChoice !== "scissors" && userChoice !== "paper");
    return decideWinner(computerMove(), userChoice);
}

/* return {string}: returns computer move as "rock", "scissors" or "paper" */
function computerMove() {
    let gameChoice = ["rock", "scissors", "paper"];
    let randomArrayChoice = Math.floor(Math.random() * gameChoice.length);
    let computerChoice = gameChoice[randomArrayChoice];
    alert(`Computer move is: ${computerChoice}`);
    return computerChoice;
}

/* return {string} "tie", "computer", or "user" */
function decideWinner(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        return "tie";
    }
    if (computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "paper" || computerChoice === "paper" && userChoice === "rock") {
        return "computer";
    } else {
        return "user";
    }
}

