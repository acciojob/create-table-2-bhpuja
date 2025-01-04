  function createTable() {
    // Get the number of rows and columns from the user
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Get the reference of the table
    let table = document.getElementById("myTable");

    // Create rows and columns
    for(let i=0; i<rn; i++) {
        let row = document.createElement("tr");

        for(let j=0; j<cn; j++) {
            let cell = document.createElement("td");
            // Add text to the cell
            cell.textContent = Row-${i} Column-${j};
            // Append the cell to the row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }
}

