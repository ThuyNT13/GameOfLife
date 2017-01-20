// global variables
var rows = 24;
var cols = 24;

var playing = false;

function initialize() {
  createTable();
  setUpControlButtons();
}

function createTable() {
  var gridContainer = document.getElementById("gridContainer");

  if (!gridContainer) {
    // throw error
    console.error("Problem: no div for the grid table.");
  }

  var table = document.createElement("table");

  for (var i=0; i<rows; i++) {
    var row = document.createElement("tr");
    for (var j=0; j<cols; j++) {
      var cell = document.createElement("td");
        // coordinates
        cell.setAttribute("id", i + "_" + j);
        cell.setAttribute("class", "dead");
        cell.onclick = cellClickHandler;
        row.appendChild(cell);
    }
    table.appendChild(row);
  }
  gridContainer.appendChild(table);
}

function cellClickHandler() {
  var classes = this.getAttribute("class");

  // toggler
  if (classes.indexOf("live") > -1) {
    this.setAttribute("class", "dead");
  } else {
    this.setAttribute("class", "live");
  }
}

function setUpControlButtons() {
  var startButton = document.getElementById("start");
  startButton.onclick = startButtonHandler;

  var clearButton = document.getElementById("clear");
  clearButton.onclick = clearButtonHandler;
}

function startButtonHandler() {

  // while game playing is true
  if (playing) {
    // if running
    console.log("Pause the game");
    // change playing
    playing = false;
    // set button to continue,
    // using this to access button element
    this.innerHTML = "continue";
  } else {
    // if not running...
    console.log("Continue the game");
    // change playing
    playing = true;
    this.innerHTML = "pause";
    play();
  }
}

function clearButtonHandler() {
  console.log("Clear the game: stop playing, clear the grid");
  playing = false;
  var startButton = document.getElementById("start");
  startButton.innerHTML = "start";
}

function play() {
  console.log("Play the game");
}
// start everything
window.onload = initialize;
