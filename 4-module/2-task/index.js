function makeDiagonalRed(table) {
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[i].style.background = 'red';
  }
}