const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const result = document.getElementById("result");
const choicesArray = ["Rock", "Paper", "Scissors"];

function playGame(playerSelection) {
    const computerChoice = Math.floor(Math.random() * choicesArray.length);
    const computerSelection = choicesArray[computerChoice];
    
    playerDisplay.textContent = `Player: ${playerSelection}`;
    computerDisplay.textContent = `Computer: ${computerSelection}`;
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
    }else{
        switch (playerSelection) {
            case "Rock":
                result.textContent = (computerSelection === "Scissors") ? "You win!" : "Computer wins!";
                break;
            case "Paper":
                result.textContent = (computerSelection === "Rock") ?  "You win!" : "Computer wins!";
                break;
            case "Scissors":
                result.textContent = (computerSelection === "Paper") ? "You win!" : "Computer wins!";
                break;
        }
    }
}
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        playGame(event.target.value);
    })
})