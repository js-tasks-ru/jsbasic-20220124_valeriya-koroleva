let table = document.querySelector('table');
let rows = table.rows;

function makeDiagonalRed(table) {
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[i].style.background = 'red';
  }
}

makeDiagonalRed(table);
