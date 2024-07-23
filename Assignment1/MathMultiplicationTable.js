// Define the size of the multiplication table
let size = 10;

// Create an empty array to hold the final multiplication table
let multiplicationTable = [];

// Outer loop to iterate through each row of the table
for (let i = 1; i <= size; i++) {
    // Create an empty array for the current row
    let row = [];
    
    // Inner loop to calculate the product for each column
    for (let j = 1; j <= size; j++) {
        // Push the product of the current row and column values into the row array
        row.push(i * j);
    }
    
    // Add the completed row to the multiplication table
    multiplicationTable.push(row);
}

// Output the final multiplication table to the console
console.log(multiplicationTable);
