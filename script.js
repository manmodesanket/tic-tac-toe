let gameOn = true;

let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];

let winner = "";

function restartGame() {
    //console.log("restart");
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
    //console.log("result evaluation");
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
        //console.log("in i");
        let count = 0;
        for(let j = 0; j < winningCondition[i].length; j = j + 1) {
            //console.log("in j");
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
    handlePlayerChange();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    //console.log("in handle cell");
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}


function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    //console.log("clicked");
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute("cell-id")
    );
    //console.log(clickedCellIndex);
    if (gameState[clickedCellIndex] === "X" || gameState[clickedCellIndex] === "O" || !gameOn) {
        //console.log("not allowed")
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}


document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});



document.getElementById("restart").addEventListener('click',restartGame);