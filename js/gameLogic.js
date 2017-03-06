// how to implement event handling to applyRules function

function play() {
  computeNextGen();

  if (playing) {
    timer = setTimeout(play, delay);
  }
}

function computeNextGen() {
  for (var i=0; i<rows; i++) {
    for (var j=0; j<cols; j++) {
      applyRules(i, j);
    }
  }
  copyAndResetGrids();
  updateView();
}

// Game Logic

function applyRules(row, col) {
  var numNeighbors = countNeighbors(row, col);

  // // Game of Life
  // if (grid[row][col] == 1) {
  //   if (numNeighbors < 2) {
  //     nextGrid[row][col]=0;
  //   } else if (numNeighbors == 2 || numNeighbors == 3) {
  //     nextGrid[row][col] = 1;
  //   } else if (numNeighbors > 3) {
  //     nextGrid[row][col] = 0;
  //   }
  // } else if (grid[row][col] == 0) {
  //   if (numNeighbors == 3) {
  //     nextGrid[row][col] = 1;
  //   }
  // }

  // // MAZE generates a maze
  // if (grid[row][col] == 1) {
  //   if (numNeighbors > 0 && numNeighbors < 6) {
  //     nextGrid[row][col] = 1;
  //   } else {
  //     nextGrid[row][col] = 0;
  //   }
  // } else {
  //   if (numNeighbors == 3) {
  //     nextGrid[row][col] = 1;
  //   }
  // }

  // // NIGHT / DAY
  // if (grid[row][col] == 1) {
  //   if (numNeighbors == 3 || numNeighbors == 4 || numNeighbors > 5) {
  //     nextGrid[row][col] = 1;
  //   } else {
  //     nextGrid[row][col] = 0;
  //   }
  // } else {
  //   if (numNeighbors == 3 || numNeighbors > 5) {
  //     nextGrid[row][col] = 1;
  //   }
  // }

  // // WALLED CITY
  // if (grid[row][col] == 1) {
  //   if (numNeighbors > 3 && numNeighbors < 9) {
  //     nextGrid[row][col] = 1;
  //   } else {
  //     nextGrid[row][col] = 0;
  //   }
  // } else {
  //   if (numNeighbors > 1 && numNeighbors < 6) {
  //     nextGrid[row][col] = 1;
  //   }
  // }

  // Reverse Game of Life
  if (grid[row][col] == 1) {
    if (numNeighbors == 3) {
      nextGrid[row][col] = 1;
    } else {
      nextGrid[row][col] = 0;
    }
  } else {
    if (numNeighbors == 2 || numNeighbors == 3) {
      nextGrid[row][col] = 1;
    }
  }

  // // Off and On
  // if (grid[row][col] == 1) {
  //   if (numNeighbors < 3 || numNeighbors == 4) {
  //     nextGrid[row][col] = 1;
  //   } else {
  //     nextGrid[row][col] = 0;
  //   }
  // } else {
  //   if (numNeighbors < 4 || numNeighbors == 5) {
  //     nextGrid[row][col] = 1;
  //   }
  // }
}

function countNeighbors(row, col) {
  var count = 0;

  if (row-1 >= 0) {
    if (grid[row-1][col] == 1) count++;
  }
  if (row-1 >= 0 && col-1 >= 0) {
    if (grid[row-1][col-1] == 1) count ++;
  }
  if (row-1 >= 0 && col+1 < cols) {
    if (grid[row-1][col+1] == 1) count ++;
  }

  if (col-1 >= 0) {
    if (grid[row][col-1] == 1) count ++;
  }
  if (col+1 < cols) {
    if (grid[row][col+1] == 1) count ++;
  }

  if (row+1 < rows) {
    if (grid[row+1][col] == 1) count++;
  }
  if (row+1 < rows && col-1 >= 0) {
    if (grid[row+1][col-1] == 1) count++;
  }
  if (row+1 < rows && col+1 < cols) {
    if (grid[row+1][col+1] == 1) count++;
  }

  return count;
}
