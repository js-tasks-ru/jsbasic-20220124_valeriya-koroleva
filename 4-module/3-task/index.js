function highlight(table) {
    let tbody = table.querySelector('tbody');
    let rows = tbody.querySelectorAll("tr");
    for(let row of rows){
        for(let cell of row.cells){
            if (cell.hasAttribute("data-available")) {
               if(cell.dataset.available === "true") {
                row.classList.add('available');
                } else if (cell.dataset.available === "false") {
                row.classList.add('unavailable');
               } 
            } else {
                row.setAttribute('hidden', '');
            }

            let gender = row.cells[2];
            let age = row.cells[1];

            if (gender.innerHTML === 'm') {
                row.classList.add('male');
            } if (gender.innerHTML === 'f') {
                row.classList.add('female');
            }

            if (age.innerHTML < 18) {
                row.style="text-decoration: line-through";
            }
           }
        }
    }