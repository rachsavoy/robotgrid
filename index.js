var makeBoard = function(x) {
  var board = [];
  for (var i = 0; < n; j++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }

  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }

  return board;
};

var robotPaths = function (n) {

}
