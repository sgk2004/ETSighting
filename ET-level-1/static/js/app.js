
// Select the table body
var tableBody=d3.select("tbody");

// Data from data.js
renderTable(data);

// Form element selection
// Input Box and Button 
var filterButton = d3.select("#filter-btn");
var inputBox = d3.select(".form-control");


// Button event click and call back function
filterButton.on('click', click => filterTable());
    
        
   

// Function Button Event check
function filterTable(){
    var inputDate = inputBox.property('value');

    if (inputDate === "" ){
         
         window.alert("Please enter a date to filter the sighting !!");
         renderTable(data);
         console.log("table loaded");
        }
    else {
    // console.log(inputDate);

    // Filter the data by the user input
    var filteredData= data.filter(event => (event.datetime === inputDate));
    // console.log(filteredData);
    // Call back function to rerenders Table with filtered data 
    renderTable(filteredData);
};
};

// Table rendering call back function
function renderTable(table) {
    // clears table before rendering again 
    tableBody.html('');
    
    table.forEach(sighting => {
        // add new row to table
    var row = tableBody.append('tr');

    Object.values(sighting).forEach(details => row.append('td').text(details));
      
    
    });
};

    
    

    
