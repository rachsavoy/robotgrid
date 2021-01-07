var makeBoard = function(n) {
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
  var paths = 0;
  var board = makeBoard(n);
  var findPaths = function (i,j) {
    if (i + j >= 23) {
      return;
    }
    else {
      board.togglePiece(i, j);
      findPaths(i,j + 1);
      findPaths(i + 1, j);
      findPaths(i, j - 1);
      findPaths(i - 1, j);
      board.togglePiece(i, j);
    }
  };

  findPaths(0, 0);
  return paths;
};
