var rows = 24;
var cols = 24;

var playing = false;

// can this be refactored
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
      cell.setAttribute("id", i + "_" +j);
      cell.setAttribute("class", "dead");
      cell.onclick = cellClickHandler;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  gridContainer.appendChild(table);
}

function cellClickHandler() {
  var rowCol = this.id.split("_");
  var row = rowCol[0];
  var col = rowCol[1];

  var classes = this.getAttribute("class");

  // refactored differently? 
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
}

function clearButtonHandler() {
  console.log("Clear the game; stop playing, clear the grid");
  playing = false;
  var startButton = document.getElementById("start");
  startButton.innerHTML = "start";
}

function startButtonHandler() {
  if (playing) {
    console.log("Pause the game");
    playing = false;
    this.innerHTML = "continue";
  } else {
    console.log("Continue the game");
    playing = true;
    this.innerHTML = "pause";
    play();
  }
}

function play() {
  console.log("Play the game");
}

window.onload = initialize;
