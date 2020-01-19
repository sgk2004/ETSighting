
// Select the table body
var tableBody=d3.select("tbody");

// Data from data.js
renderTable(data);

// Form element selection
// Input Box and Button 
var filterButton = d3.select("#filter-btn");
var inputBox1 = d3.select("#datetime");
var inputBox2 = d3.select("#city");
var inputBox3 = d3.select("#state");
var inputBox4 = d3.select("#country");
var inputBox5 = d3.select("#shape");




// Button event click and call back function
filterButton.on('click', click => filterTable());
    
        
   

// Function Button Event check
function filterTable(){
    

    var inputDate1 = inputBox1.property('value');
    var inputDate2 = inputBox2.property('value');
    var inputDate3 = inputBox3.property('value');
    var inputDate4 = inputBox4.property('value');
    var inputDate5 = inputBox5.property('value');

    if (inputDate1 === "" && inputDate2 === "" &&inputDate3 === "" &&inputDate4 === "" && inputDate5 === ""  )
    {
         
         window.alert("Please enter a date to filter the sighting !!");
         renderTable(data);
         console.log("table loaded");
        }
    else {
    console.log(inputDate1);
    console.log(inputDate2);
    console.log(inputDate3);
    console.log(inputDate4);
    console.log(inputDate5);

    // Filter the data by the user input
    var filteredData= data.filter(event => 
        (event.city === inputDate2.toLowerCase() || inputDate2 === "") && 
        (event.datetime === inputDate1 || inputDate1 === "") && 
        (event.state === inputDate3.toLowerCase() || inputDate3 === "") && 
        (event.country === inputDate4.toLowerCase() || inputDate4 === "") &&  
        (event.shape === inputDate5.toLowerCase() || inputDate5 === "")) ;
    
    console.log(filteredData);
    // Call back function to rerenders Table with filtered data 
    renderTable(filteredData);
    }

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



    
    

    
