
const status = document.querySelector(".grid");

let gameOn = true;

let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];


function handlePlayerChange() {
    if(currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer="X";
    }
}

function handleResultValidation() {
    handlePlayerChange();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    console.log("in handle cell");
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}


function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    console.log("clicked");
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute("cell-id")
    );
    console.log(clickedCellIndex);
    if (gameState[clickedCellIndex] === "X" || gameState[clickedCellIndex] === "O" || !gameOn) {
        console.log("not allowed")
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}


document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});