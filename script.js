// Function to create the table when the button is pressed
function createTable() {
  // Prompt the user to enter the number of rows and columns
  const numRows = parseInt(prompt("Input number of rows"));
  const numCols = parseInt(prompt("Input number of columns"));

  // Get the table element by its ID
  const table = document.getElementById("myTable");

  // Clear any existing rows in the table
  table.innerHTML = "";

  // Loop through to create rows
  for (let i = 0; i < numRows; i++) {
    // Create a new row
    const row = document.createElement("tr");

    // Loop through to create columns for each row
    for (let j = 0; j < numCols; j++) {
      // Create a new cell
      const cell = document.createElement("td");
      // Set the cell's text content
      cell.textContent = `Row-${i} Column-${j}`;
      // Append the cell to the row
      row.appendChild(cell);
    }

    // Append the row to the table
    table.appendChild(row);
  }
}
