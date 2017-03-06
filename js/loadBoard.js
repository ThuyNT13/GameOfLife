var rows = 100;
var cols = 100;

var playing = false;

var timer;
var delay = 100;

var grid = new Array(rows);
var nextGrid = new Array(rows);

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

function initializeGrids() {
  for (var i=0; i<rows; i++) {
    grid[i] = new Array(cols);
    nextGrid[i] = new Array(cols);
  }
}

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

window.onload = initialize;
