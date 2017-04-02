function applyRules(row, col) {
  var numNeighbors = countNeighbors(row, col);

  // logic to choose SPECIFIC ALGORITHMS to run?

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
