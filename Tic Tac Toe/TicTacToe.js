// Set answer tracker
let displayBoard = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]

// Set sister board to easily track positions
let coordBoard = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"]
]

////////////////////////////////

const btns = document.querySelectorAll('.btn');
const startText = document.getElementById('btn-start');
const gameResult = document.getElementById('end-message');
const reset = document.getElementById('reset-game');

let turnCount = 0;

////////////////////////////////

// Reset board and game to original state
reset.addEventListener('click', function(e){
	btns.forEach(function (btn) {
		btn.disabled = false
		btn.textContent = "-"
	})
	gameResult.style.display = "none"
	startText.textContent = "make your move"
	reset.style.display = "none"
	displayBoard = [
		["-", "-", "-"],
		["-", "-", "-"],
		["-", "-", "-"]
	]
	turnCount = 0
})

////////////////////////////////

// Transpose array for columns. Return [[col0],[col1],[col2]]
function transposeBoardCol(arr){

	let arrTransposed = [
		[
		arr[0][0],
		arr[1][0],
		arr[2][0]
		],
		[
        arr[0][1],
        arr[1][1],
        arr[2][1]
		],
		[
        arr[0][2],
        arr[1][2],
        arr[2][2]
		]
    ]

    return arrTransposed

}

// Transpose array for diagonals. Return [[diag0],[diag1]]
function transposeBoardDiag(arr){

    let arrTransposed = [
		[
		arr[0][0],
		arr[1][1],
		arr[2][2]
		],
		[
		arr[0][2],
		arr[1][1],
		arr[2][0],
		]
	]

    return arrTransposed

}

// Count instances of empty spaces, computer spaces, and user spaces. Return [[emptyCountTotal0, emptycountTotal1], [compCountTotal0, compCountTotal1], [playerCountTotal0, playerCountTotal1]]
function countTicTacToes(arr){

    let emptyCountTotal = []
    let compCountTotal = []
    let playerCountTotal = []

    for (i = 0; i < arr.length; i++){

        let emptyCount = 0
        let compCount = 0
        let playerCount = 0

        for (j = 0; j < arr[i].length; j++){
            if (arr[i][j] == "-"){
                emptyCount++
            }
            if (arr[i][j] == "o"){
                compCount++
            }
            if (arr[i][j] == "x"){
                playerCount++
            }
        }

        emptyCountTotal.push(emptyCount)
        compCountTotal.push(compCount)
        playerCountTotal.push(playerCount)

    }

    return [emptyCountTotal, compCountTotal, playerCountTotal]

}

// Check board for winning state and winning moves. Return [victoryState, compWinningMove, playerWinningMove]
function analyzeBoard(arr1, arr2){

    let displayBoardRows = arr1
    let displayBoardCols = transposeBoardCol(arr1)
    let displayBoardDiags = transposeBoardDiag(arr1)

    let coordBoardRows = arr2
    let coordBoardCols = transposeBoardCol(arr2)
    let coordBoardDiags = transposeBoardDiag(arr2)

    let victoryState = false
    let compWinningMove = []
    let playerWinningMove = []

    // Perform check on rows
    if (victoryState == false){
        let instanceCountRows = countTicTacToes(displayBoardRows)
        // Check for winning state, update VictoryState with result
            // Interpret computer counts
            for (i = 0; i < instanceCountRows[1].length; i++){
                if(instanceCountRows[1][i] == 3){
                    victoryState = true
                }
                if(instanceCountRows[1][i] == 2){
                    for (j = 0; j < displayBoardRows[i].length; j++){
                        if (displayBoardRows[i][j] == "-"){
                            compWinningMove.push(coordBoardRows[i][j])
                            console.log("Computer Winning Move Found at " + coordBoardRows[i][j])
                        }
                    }

                }
            }
            // Interpret player counts
            for (i = 0; i < instanceCountRows[2].length; i++){
                if(instanceCountRows[2][i] == 3){
                    victoryState = true
                }
                if(instanceCountRows[2][i] == 2){
                    for (j = 0; j < displayBoardRows[i].length; j++){
                        if (displayBoardRows[i][j] == "-"){
                            playerWinningMove.push(coordBoardRows[i][j])
                            console.log("Player Winning Move Found at " + coordBoardRows[i][j])
                        }
                    }

                }
            }
    }

    // Perform check on columns
    if (victoryState == false){
        let instanceCountCols = countTicTacToes(displayBoardCols)
        // Check for winning state, update VictoryState with result
            // Interpret computer counts
            for (i = 0; i < instanceCountCols[1].length; i++){
                if(instanceCountCols[1][i] == 3){
                    victoryState = true
                }
                if(instanceCountCols[1][i] == 2){
                    for (j = 0; j < displayBoardCols[i].length; j++){
                        if (displayBoardCols[i][j] == "-"){
                            compWinningMove.push(coordBoardCols[i][j])
                            console.log("Computer Winning Move Found at " + coordBoardCols[i][j])
                        }
                    }

                }
            }
            // Interpret player counts
            for (i = 0; i < instanceCountCols[2].length; i++){
                if(instanceCountCols[2][i] == 3){
                    victoryState = true
                }
                if(instanceCountCols[2][i] == 2){
                    for (j = 0; j < displayBoardCols[i].length; j++){
                        if (displayBoardCols[i][j] == "-"){
                            playerWinningMove.push(coordBoardCols[i][j])
                            console.log("Player Winning Move Found at " + coordBoardCols[i][j])
                        }
                    }

                }
            }
    }

    // Perform check on diagonals
    if (victoryState == false){
        let instanceCountDiags = countTicTacToes(displayBoardDiags)
         // Check for winning state, update VictoryState with result
            // Interpret computer counts
            for (i = 0; i < instanceCountDiags[1].length; i++){
                if(instanceCountDiags[1][i] == 3){
                    victoryState = true
                }
                if(instanceCountDiags[1][i] == 2){
                    for (j = 0; j < displayBoardDiags[i].length; j++){
                        if (displayBoardDiags[i][j] == "-"){
                            compWinningMove.push(coordBoardDiags[i][j])
                            console.log("Computer Winning Move Found at " + coordBoardDiags[i][j])
                        }
                    }

                }
            }
            // Interpret player counts
            for (i = 0; i < instanceCountDiags[2].length; i++){
                if(instanceCountDiags[2][i] == 3){
                    victoryState = true
                }
                if(instanceCountDiags[2][i] == 2){
                    for (j = 0; j < displayBoardDiags[i].length; j++){
                        if (displayBoardDiags[i][j] == "-"){
                            playerWinningMove.push(coordBoardDiags[i][j])
                            console.log("Player Winning Move Found at " + coordBoardDiags[i][j])
                        }
                    }

                }
            }
    }

    // Prevent pushing undefined arrays
    if (compWinningMove.length == 0){
        compWinningMove.push("N")
    }

    if (playerWinningMove.length == 0){
        playerWinningMove.push("N")
    }

    return [victoryState, compWinningMove, playerWinningMove]      

}

////////////////////////////////

// User Inputs Move
btns.forEach(function (btn) {
	btn.addEventListener('click', function(e){
		const position = e.currentTarget.classList

		let userLocA = parseInt(position[2], 10)
		let userLocB = 0


		if (position[1] == "left"){
			userLocB = 0
		}
		if (position[1] == "mid"){
			userLocB = 1
		}
		if (position[1] == "right"){
			userLocB = 2
		}

        // If selected spot it empty update displayBoard
		if (displayBoard[userLocA][userLocB] == "-"){
			displayBoard[userLocA][userLocB] = "x"
			e.currentTarget.textContent = "x"
            console.log("Player move")
            console.log(displayBoard)
		}
		btn.disabled = true

        // Remove start text once the game has started an track
		turnCount++
		if(turnCount > 0){
			startText.textContent = ""
		}

        // Analyze board for winning state and best possible moves
        let boardState = analyzeBoard(displayBoard, coordBoard)

        let victoryState = boardState[0]
        console.log("Victory State " + victoryState)

        let compWinningMove = boardState[1]
        console.log("Computer Winning Move " + compWinningMove)

        let playerWinningMove = boardState[2]
        console.log("Player Winning Move " + playerWinningMove)

        // If the player has won end the game
        if (victoryState == true){
            btns.forEach(function (btn){
				btn.disabled = true
			})
			gameResult.textContent = "You won!"
			gameResult.style.display = "inline-block"
			reset.style.display = "inline-block"
        }
        // If there is no winner and all moves have been made, end the game in a draw
        else if (victoryState == false && turnCount == 9){
            gameResult.textContent = "Draw game"
            gameResult.style.display = "inline-block"
            reset.style.display = "inline-block"
            console.log("Draw game!")
        }
        // Computer makes a move
        else {

            let bestMove = 0
            let bestMoveClass = 0

            // If the computer can win, make winning move
            if (compWinningMove != "N"){
                bestMove = compWinningMove.slice(0, 2)
                bestMove = bestMove.toString()
                console.log("Computer can win with " + bestMove)
            }
            // If computer can't win but player can, block player win
            else if (bestMove == 0 && playerWinningMove != "N"){
                bestMove = playerWinningMove.slice(0, 2)
                bestMove = bestMove.toString()
                console.log("Player can win with " + bestMove)
            }
            // If there are no best moves, make a random move
            else {
                while (bestMove == 0){
                    randomMoveLocA = Math.floor(Math.random() * displayBoard.length)
                    randomMoveLocA = randomMoveLocA.toString()
                    randomMoveLocB = Math.floor(Math.random() * displayBoard.length)
                    randomMoveLocB = randomMoveLocB.toString()
                    if (displayBoard[randomMoveLocA][randomMoveLocB] == "-"){
                        bestMove = randomMoveLocA + randomMoveLocB
                    }
                }
                console.log("Computer makes random move " + bestMove)
            }

            // Update displayBoard with bestMove
            displayBoard[bestMove[0]][bestMove[1]] = "o"
            console.log("Computer move")
            console.log(displayBoard)

            // Turn calculated bestMove into class referencing string
            if (bestMove[1] == 0){
                bestMoveClass = "left";
            }
            else if (bestMove[1] == 1){
                bestMoveClass = "mid";
            }
            else if (bestMove[1] == 2){
                bestMoveClass = "right";
            }

            bestMove = "btn " + bestMoveClass + " " + bestMove[0]

            const compMove = document.getElementsByClassName(bestMove);
            console.log(compMove[0])
            compMove[0].textContent = "o";
            compMove[0].disabled = true;
            turnCount++

            // Analyze board for computer win
            let boardState = analyzeBoard(displayBoard, coordBoard)

            let victoryState = boardState[0]
            console.log("Victory State " + victoryState)

            // If computer has won end the game
            if (victoryState == true){
                console.log("Computer Win");
                btns.forEach(function (btn){
                    btn.disabled = true
                })
                gameResult.textContent = "Computer won."
                gameResult.style.display = "inline-block"
                reset.style.display = "inline-block"
            }

        }

    })
})

        