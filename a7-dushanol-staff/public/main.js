'use strict'
    
    const tblBody = document.getElementById("tbody");

// Function to create and append rows
// function generateTable(staff){
//     // creates a <table> element & a <tbody> element
//     const staffTable = document.getElementById("table");
//     const tblBody = document.getElementById("tbody");

//     // creating all 4 cells in the table
//     // first, create a row
//     const row = document.createElement("tr");

//     // create <td> element and call is cell
//     // create a TextNode element and append it to the cell
//     // append the cell to the row
//     for (let i=0; i<4; i++){
//         const cell = document.createElement("td");
//         const cellText = document.createTextNode("tbd ${}");
        

//         cell.appendChild(cellText);
//         row.appendChild(cell);
//     }

//     // add the row to the <tbody>
//     tblBody.appendChild(row);
//     // add the <tbody> to the <table>
//     staffTable.appendChild(tblBody);
// }



// Handler ------------------------------
fetch("https://randomuser.me/api")
    .then(function(response){
        return response.json();
    })
    .then(function(apiJsonData){
        console.log(apiJsonData);
        makeTable(apiJsonData)
    });

// function getData(){
//     return fetch("https://randomuser.me/api")
//         .then(response => JSON.parse(response.json()))
//         .then(data => console.log(data))
//         .then(data=>makeTable(data))
//         .catch(error => console.error(error));
// }


function makeTable(staff){
    const staffTable = document.getElementById("table");
    const row = document.createElement("tr");
    
    console.log(Object.keys(staff)[0]);        
    

}
    
const button = document.querySelector("button");
button.addEventListener("click", makeTable);
