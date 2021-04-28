// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(d => {
      //console.log(ufoReport);
      var row = tbody.append("tr");
      Object.values(d).forEach(td =>{row.append("td").text(td)});
          
    });
    
// YOUR CODE HERE!
