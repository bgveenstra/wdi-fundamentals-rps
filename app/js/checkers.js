//checkers.js

var checkerboard = [[null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null]];

function setSquare(player, row, col) {
  // Your Code Here
  checkerboard[row][col] = player;
}

function getPieceAt(row, col) {
  // Your Code Here
  return checkerboard[row][col];
}

function clearBoard() {
	//sets the value of every cell in checkerboard to null.
	for (var row=0; row<checkerboard.length; row++){
		for (var col=0; col<checkerboard[row].length; col++){
			setSquare(null, row, col);
		}
	}
}

function setUpRed() {
	// sets the value of each cell that initially holds a red piece to 'R'
	for (var row=0; row<3; row++){
		for (var col=0; col<checkerboard[row].length; col++){
			if ((col + row) % 2 === 0) {
				setSquare('R', row, col)
			}
		}
	}
	console.log(checkerboard)
}

function setUpRed2(){
	checkerboard.forEach(function(square){
		console.log(square);
	}
}

function setUpBlack() {
	// sets the value of each cell that initially holds a red piece to 'R'
	for (var row=5; row<checkerboard.length; row++){
		for (var col=0; col<checkerboard[row].length; col++){
			if ((col + row) % 2 === 0) {
				setSquare('B', row, col);
			}
		}
	}
	console.log(checkerboard);
}

var pieces = [];

function getPiecesFromBoard() {
	var redPieces = [], blackPieces = [], allPieces;
	for (var row=0; row<checkerboard.length; row++){
		for (var col=0; col<checkerboard.length; col++){
			if (checkerboard[row][col] === 'R'){
				redPieces.push([row,col]);
			} else if (checkerboard[row][col] === 'B'){
				blackPieces.push([row,col]);
			}
		}
	}
	allPieces = {'red':redPieces, 'black':blackPieces};
	return allPieces;
}


function testRed(pieces){
	pieces['red'].map(function(piece){
	      var row = piece[0];
	      var col = piece[1];
	      return checkerboard[row][col] === 'R';
    	});
}

function testBlack(pieces){
  pieces['black'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'B';
    });
}
