// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var tbodydate = d3.select("tbodydate");

tableData.forEach(d => {
      //console.log(ufoReport);
      var row = tbody.append("tr");
      Object.values(d).forEach(td =>{row.append("td").text(td)});
          
    });

var button=d3.select("#filter-btn");
var inputUFODate=d3.select("#datetime");
var inputValue = inputUFODate.property("valaue");


button.on("click",handleClick);

    
function handleClick(){
    
    
    console.log("a buttom was click");
    console.log(inputValue);
    
    // function filterUFODate(dateUFO){
    //     return dateUFO.datetime == inputUFODate;
    // }
    // var filterDates =tableData.filter(filterUFODate);
    // console.log(filterDates);

    //     filterDates.forEach(ed => {
            

    //         console.log(filterDates);
    //         var row = tbody.append("tr");
    //         Object.values(d).forEach(td =>{row.append("td").text(td)});
                
    //      });
}




console.log(inputUFODate)
// YOUR CODE HERE!
