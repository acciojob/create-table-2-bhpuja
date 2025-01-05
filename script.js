function createTable() {
    // Prompt the user to input the number of rows
    const rows = parseInt(prompt("Input number of rows:", "0"));
    if (isNaN(rows) || rows <= 0) {
        alert("Please enter a valid positive number for rows.");
        return;
    }

    // Prompt the user to input the number of columns
    const columns = parseInt(prompt("Input number of columns:", "0"));
    if (isNaN(columns) || columns <= 0) {
        alert("Please enter a valid positive number for columns.");
        return;
    }

    // Get the table element
    const table = document.getElementById("myTable");

    // Clear any existing rows in the table
    table.innerHTML = "";

    // Create the table rows and columns
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement("td");
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}


