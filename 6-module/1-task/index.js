export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.table = document.createElement('table');
    this.table.innerHTML = `<thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
  </thead>`;
  this.tbody = document.createElement('tbody');
  this.table.appendChild(this.tbody);

  for (const row of this.rows) {
    this.tbody.insertAdjacentHTML('beforeEnd', 
    `<tr>
    <td>${row.name}</td>
    <td>${row.age}</td>
    <td>${row.salary}</td>
    <td>${row.city}</td>
    <td><button>X</button></td>
    </tr>`);
  }

  this.table.addEventListener('click', this.onClick);
  }

  get elem() {

    return this.table;
  }

  onClick(event) {
    const button = event.target.closest('button');
    const trCr = event.target.closest('tr');
    
    if (button) {
      trCr.remove();
    }
  }
}


