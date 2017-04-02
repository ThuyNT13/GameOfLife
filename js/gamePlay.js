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
