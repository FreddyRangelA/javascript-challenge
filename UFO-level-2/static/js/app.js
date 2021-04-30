// from data.js
var tableData = data;
var tbody = d3.select("tbody");


var button=d3.select("#filter-btn-all");

var inputUFODateAll=d3.select("#datetime");

button.on("click",handleClickAll);


function handleClickAll(){
    tbody.html("");
    console.log("a button was click")
    tableData.forEach(d => {
        //console.log(ufoReport);
        var row = tbody.append("tr");
        Object.values(d).forEach(td =>{row.append("td").text(td)});
            
      });
    console.log(tableData);
}




var button=d3.select("#filter-btn");

button.on("click",handleClick);

    
function handleClick(){
    var inputUFODate=d3.select("#datetime");
    var inputValue = inputUFODate.property("value");
    tbody.html("");
    console.log("a buttom was click");
    console.log(inputValue);

    if(inputValue !=""){
        
        function filterUFODate(dateUFO){
            return dateUFO.datetime == inputValue;
            
             }
        var filterDates =tableData.filter(filterUFODate);
        console.log(filterDates);

        filterDates.forEach(d =>{
            var row = tbody.append("tr");
            Object.values(d).forEach(td =>{row.append("td").text(td)})

        })
    }
    
 
}



// YOUR CODE HERE!
