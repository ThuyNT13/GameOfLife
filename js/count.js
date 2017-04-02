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
