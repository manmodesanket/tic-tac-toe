let gameOn = true;

let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];

let winner = "";

function restartGame() {
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameOn = true;
    currentPlayer = "X";
    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerHTML = "";
    });
    document.querySelector(".result").innerHTML = "";
}

function handlePlayerChange() {
    if(currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer="X";
    }
}

function handleResultValidation() {
    const winningCondition = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    for(let i = 0; i < winningCondition.length; i = i + 1) {
        let count = 0;
        for(let j = 0; j < winningCondition[i].length; j = j + 1) {
            if(gameState[winningCondition[i][j]] == currentPlayer) {
                count += 1;
            }
        }
        if(count === 3) {
            winner = currentPlayer;
            gameOn = false;
            document.querySelector(".result").innerHTML = currentPlayer + " has won the game";
            break;
        }
    }
    let count = 0;
    for(let i = 0; i < gameState.length; i++) {
        if(gameState[i] != "") {
            count++;
        }
    }
    if(count === 9) {
        document.querySelector(".result").innerHTML = "It's a draw";
    }
    handlePlayerChange();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}


function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute("cell-id")
    );
    if (gameState[clickedCellIndex] === "X" || gameState[clickedCellIndex] === "O" || !gameOn) {
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}


document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});



document.getElementById("restart").addEventListener('click',restartGame);