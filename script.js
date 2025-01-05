
function createTable() {
  const rows = prompt('Input number of rows');
  const columns = prompt('Input number of columns');

  if (!rows || !columns || rows <= 0 || columns <= 0) {
    alert('Please enter valid positive numbers for both rows and columns.');
    return;
  }

  const table = document.getElementById('myTable');
  table.innerHTML = ''; // Clear previous table contents

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('td');
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
