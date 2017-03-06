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
    playing = false;
    this.innerHTML = "continue";
    clearTimeout(timer);
  } else {
    playing = true;
    this.innerHTML = "pause";
    play();
  }
}

function clearButtonHandler() {

  playing = false;
  var startButton = document.getElementById("start");
  startButton.innerHTML = "start";
  clearTimeout(timer);

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
