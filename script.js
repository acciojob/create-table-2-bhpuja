function createTable() {
    //Write your code here
  function createTable() {
  // Prompt the user for the number of rows and columns
  let rows = parseInt(prompt("Input number of rows"));
  let cols = parseInt(prompt("Input number of columns"));
  
  // Get the table element by ID
  let table = document.getElementById("myTable");

  // Clear the table if it has any existing content
  table.innerHTML = '';

  // Loop through the number of rows
  for (let i = 0; i < rows; i++) {
    // Create a new row
    let row = document.createElement("tr");

    // Loop through the number of columns
    for (let j = 0; j < cols; j++) {
      // Create a new cell for each column in the row
      let cell = document.createElement("td");
      // Set the text content for each cell
      cell.textContent = `Row-${i} Column-${j}`;
      // Append the cell to the row
      row.appendChild(cell);
    }

    // Append the row to the table
    table.appendChild(row);
  }
}

}
