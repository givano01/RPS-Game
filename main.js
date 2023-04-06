const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const btnPlayAgain = document.getElementById("btn-play-again");
const output = document.getElementById("output-text");
const output_play_again = document.getElementById("output-play-again");
const scoreBoard_div = document.querySelector(".score-box")
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

//Getting random computer choice
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

// Function that calls when the user wins
const win = () => {

    userScore++;
    userScore_span.innerHTML = userScore;

    if (userScore >= 3) {
        output.textContent = `Congratulations! You won!`
        disableBtn();
        showBtn();

    }
}

// Function that calls when the user loses
const lose = () => {

    computerScore++;
    computerScore_span.innerHTML = computerScore;

    if (computerScore >= 3) {
        output.textContent = `Unfortunately you lost... Try again!`
        disableBtn();
        showBtn();
    }
}


// Disable button after one of the parties wins
const disableBtn = () => {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

// Play Again button
const playAgain = () => {
    location.reload();
    console.log("test");
}

// Showing Play Again button after one of the parties wins
const showBtn = () => {
    if (btnPlayAgain.style.display === "block") {
        btnPlayAgain.style.display = "none";
    } else {
        btnPlayAgain.style.display = "block";
    }
}




const game = userChoice => {

    const computerChoice = getComputerChoice();
    const userChoice_border = document.getElementById(userChoice);

    const txtWin = `You chose ${userChoice}. 
   The computer chose ${computerChoice}.`;
    const txtLose = `You chose ${userChoice}. 
   The computer chose ${computerChoice}.`;

    if (userChoice === "rock" && computerChoice === "scissors") {
        output.textContent = txtWin;
        userChoice_border.classList.add("btn-green-border")
        win();
    } else if (userChoice === "rock" && computerChoice === "paper") {
        output.textContent = txtLose;
        userChoice_border.classList.add("btn-red-border")
        lose();
    } else if (userChoice === "paper" && computerChoice === "rock") {

        output.textContent = txtWin;
        userChoice_border.classList.add("btn-green-border")
        win();
    } else if (userChoice === "paper" && computerChoice === "scissors") {

        output.textContent = txtLose;
        userChoice_border.classList.add("btn-red-border")
        lose();
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        win();
        output.textContent = txtWin;
        userChoice_border.classList.add("btn-green-border")

    } else if (userChoice === "scissors" && computerChoice === "rock") {

        output.textContent = txtLose;
        userChoice_border.classList.add("btn-red-border")
        lose();
    } else {
        output.textContent = "It's a draw";
        border_draw = userChoice_border.classList.add("btn-grey-border")
    }




    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("btn-green-border");
    }, 300)

    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("btn-red-border");
    }, 300)

    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("btn-grey-border");
    }, 300)

}


const main = () => {

    btnRock.addEventListener("click", () => {
        game("rock");
    })

    btnPaper.addEventListener("click", () => {
        game("paper");

    })

    btnScissors.addEventListener("click", () => {
        game("scissors");

    })

}

main();