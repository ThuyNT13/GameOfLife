var rows = 24;
var cols = 24;

var playing = false;

var timer;
var delayTime = 100;

var grid = new Array(rows);
var nextGrid = new Array(rows);

function initializeGrids() {
  for (var i=0; i<rows; i++) {
    grid[i] = new Array(cols);
    nextGrid[i] = new Array(cols);
  }
}

// defaults cells to 0 - dead
function resetGrids() {
  for (var i=0; i<rows; i++) {
    for (var j=0; j<cols; j++) {
      grid[i][j] = 0;
      nextGrid[i][j] = 0;
    }
  }
}
function copyAndResetGrids() {
  for (var i=0; i<rows; i++) {
    for (var j=0; j<cols; j++) {
      grid[i][j] = nextGrid[i][j];
      nextGrid[i][j] = 0;
    }
  }
}

// initialize
function initialize() {
  createTable();
  initializeGrids();
  resetGrids();
  setUpControlButtons();
}

function createTable() {
  var gridContainer = document.getElementById("gridContainer");

  if (!gridContainer) {
    console.error("Problem: no div for the grid table!");
  }

  var table = document.createElement("table");

  for (var i=0; i<rows; i++) {
    var row = document.createElement("tr");

    for (var j=0; j<cols; j++) {
      var cell = document.createElement("td");
      cell.setAttribute("id", i + "_" + j);
      cell.setAttribute("class", "dead");
      cell.onclick = cellClickHandler;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  gridContainer.appendChild(table);
}

function updateView() {
  for (var i=0; i<rows; i++) {
    for (var j=0; j<cols; j++) {
      var cell = document.getElementById(i + "_" + j);
      if (grid[i][j] == 0) {
        cell.setAttribute("class", "dead");
      } else {
        cell.setAttribute("class", "live");
      }
    }
  }
}

function cellClickHandler() {
  var rowCol = this.id.split("_");
  var row = rowCol[0];
  var col = rowCol[1];

  var classes = this.getAttribute("class");

  if (classes.indexOf("live") > -1) {
    this.setAttribute("class", "dead");
    grid[row][col] = 0;
  } else {
    this.setAttribute("class", "live");
    grid[row][col] = 1;
  }
}

function setUpControlButtons() {
  var startButton = document.getElementById("start");
  startButton.onclick = startButtonHandler;

  var clearButton = document.getElementById("clear");
  clearButton.onclick = clearButtonHandler;

  var randomButton = document.getElementById("random");
  randomButton.onclick = randomButtonHandler;
}

function startButtonHandler() {
  if (playing) {
    console.log("Pause the game");
    playing = false;
    this.innerHTML = "continue";
    clearTimeout(timer);
  } else {
    console.log("Continue the game");
    playing = true;
    this.innerHTML = "pause";
    play();
  }
}

function clearButtonHandler() {
  console.log("Clear the game; stop playing, clear the grid");

  playing = false;
  var startButton = document.getElementById("start");
  startButton.innerHTML = "start";
  clearTimeout(timer);

  // research difference between nodelist and arrays
  var cellsList = document.getElementsByClassName("live");
  var cellsArray = [];

  for (var i=0; i<cellsList.length; i++) {
    cellsArray.push(cellsList[i]);
  }

  for (var i=0; i<cellsArray.length; i++) {
    cellsArray[i].setAttribute("class", "dead");
  }

  resetGrids();
}

function randomButtonHandler() {
  if (playing) return;
  clearButtonHandler();

  for (var i=0; i<rows; i++) {
    for (var j=0; j<cols; j++) {
      var isLive = Math.round(Math.random());

      if (isLive == 1) {
        var cell = document.getElementById(i + "_" + j);
        cell.setAttribute("class", "live");
        grid[i][j] = 1;
      }
    }
  }
}

function play() {
  computeNextGen();

  if (playing) {
    timer = setTimeout(play, delayTime);
  }
}

// game logic

function computeNextGen() {
  for (var i=0; i<rows; i++) {
    for (var j=0; j<cols; j++) {
      applyRules(i, j);
    }
  }
  copyAndResetGrids();
  updateView();
}

function applyRules(row, col) {
  var numNeighbors = countNeighbors(row, col);
  if (grid[row][col] == 1) {
    if (numNeighbors < 2) {
      nextGrid[row][col]=0;
    } else if (numNeighbors == 2 || numNeighbors == 3) {
      nextGrid[row][col] = 1;
    } else if (numNeighbors > 3) {
      nextGrid[row][col] = 0;
    }
  } else if (grid[row][col] == 0) {
    if (numNeighbors == 3) {
      nextGrid[row][col] = 1;
    }
  }
}

// refactor for repetition secondary loop
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

window.onload = initialize;
