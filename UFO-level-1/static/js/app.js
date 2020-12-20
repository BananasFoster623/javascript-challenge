// from data.js
var tableData = data;

// Generalized Steps
// 1. Find the table body so we can append table rows
// 2. Iterate through tableData to get key value pairs for each event
//      2a. Get the key value pairs
//      2b. Put the appropriate data in each cell
// 3. Filter table based on user input of date/time
//      3a. Clear previously appended rows from table
//      3b. Identify the button and define the eventHandler for button.on("click", function)
//      3c. Grab user input
//      3d. Find all rows that fit the user input
//      3e. Return all rows that fit the user input and append to table

// Step 1

var tbody = d3.select("tbody");

// Step 2

tableData.forEach((ufo_event) => {     // This is the basic loop using forEach; using the arrow function here to define inline
    // console.log(ufo_event);                 // Just writing stuff out to console for debugging
    let row = tbody.append("tr");           // Variable that defines that when row is called it appends a new row to the table
    Object.entries(ufo_event).forEach(([key,value]) => {        // Using the arrow function here to define inline; its okay key is not used here
        let cell = row.append("td")         // Variable that defines that when cell is called it appends a new td cell to the table
        cell.text(value);                   // Acts on the cell variable to insert as text the appropriate value, which in this case is the value for our current key
    });
  });

// Step 3

let filterButton = d3.select("#filter-btn");        // Use # here to select the button since we are searching on ID
filterButton.on("click", function() {               // Here we have the eventHandler and the function with no inputs
    
    tbody.html("");         // This resets the page to its basic html (i.e. no previously input data into table) so we append to a blank table and not our previously written rows
    
    // Do the filtering
    let userInputElement = d3.select("#datetime");                                          // Selecting the user input element
    let userInputValue = userInputElement.property("value");                                // Selecting the VALUE from our user input element
    let filteredData = tableData.filter(event => event.datetime === userInputValue);        // filtering our data and assigning to new variable
    // console.log(filteredData)           // Writing to console for debugging

    // Do basically the same thing as above, since we want to populate the table with the filtered data
    // Potential to create a single function that could just be called twice.
    filteredData.forEach((ufo_event) => {     // This is the basic loop using forEach; using the arrow function here to define inline
        // console.log(ufo_event);                 // Just writing stuff out to console for debugging
        let row = tbody.append("tr");           // Variable that defines that when row is called it appends a new row to the table
        Object.entries(ufo_event).forEach(([key,value]) => {        // Using the arrow function here to define inline; its okay key is not used here
            let cell = row.append("td")         // Variable that defines that when cell is called it appends a new td cell to the table
            cell.text(value);                   // Acts on the cell variable to insert as text the appropriate value, which in this case is the value for our current key
        });
      });

})