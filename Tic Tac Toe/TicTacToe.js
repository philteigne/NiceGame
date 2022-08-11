// Set answer tracker
let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const btns = document.querySelectorAll('.btn');

// user inputs move
btns.forEach(function (btn) {
	btn.addEventListener('click', function(e){
		const position = e.currentTarget.classList;
		let userLocA = parseInt(position[2], 10);
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
		if (board[userLocA][userLocB] == 0){
			board[userLocA].replaceAt(userLocB, "1");
			e.currentTarget.textContent = "x";
			console.log(true)
		}
		console.log(board)
		// // Check if user has won
		// let boardState = victoryCheck(board);
		// console.log(boardState);
		// if (boardState == false){
		//     board[compLocA][compLocB] = 2;
		//     console.log(board);
		// }
	})
    
})

function victoryCheck(board){
	victoryStatus = false;
	for (i = 0; i < 3; i++){
		// check columns
		if (board[1][i] > 0){
			if (board[0][i] && board[2][i] == board[1][i]){
					victoryStatus = true;
			}
		}
		// check rows
		if (board[i][1] > 0){
			if (board[i][0] && board[i][2] == board[i][1]){
				victoryStatus = true;
			}
		}
		// check diagonals
		if (board[1][1] > 0){
			if (board[0][0] && board[2][2] == board[1][1]){
				victoryStatus = true;
			}
			if (board[2][0] && board[0][2] == board[1][1]){
				victoryStatus = true;
			}
		}
	}
	return victoryStatus;
}


// computer makes best move NOT WORKING YET SINA DONT SAY ANYTHING
function compMove(){

    return compLocA;
    return compLocB;
}