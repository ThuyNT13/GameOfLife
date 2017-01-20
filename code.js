// global variables
var rows = 24;
var cols = 24;


function initialize() {
  createTable();
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
        row.appendChild(cell);
    }
    table.appendChild(row);
  }
  gridContainer.appendChild(table);
}

// start everything
window.onload = initialize;
