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



//buttom for filter
var button=d3.select("#filter-btn");
//wiring the buttom and the input value.
button.on("click",handleClick);

    
function handleClick(){
    //Data from the inout.
    //select the imput on the date time 
    var inputUFODate=d3.select("#datetime");
    //select the imput on the city. 
    var inputUFODCity=d3.select("#city");
    //select the imput on the state. 
    var inputUFODCountry=d3.select("#Country");
    //select the imput on the state. 
    var inputUFODState=d3.select("#State");
    //select the imput on the shape. 
    var inputUFODShape=d3.select("#Shape");


    //value used
    //selects the values for the date time
    var inputValue = inputUFODate.property("value");
    //selects the values for the date time
    var inputValueCity = inputUFODCity.property("value");
   //selects the values for the state.
   var inputValueState = inputUFODState.property("value");
   //selects the values for the Country
   var inputValueCountry = inputUFODCountry.property("value");
   //selects the values for the shape.
   var inputValueShape = inputUFODShape.property("value");
   
    //clears out the tbody
    tbody.html("");
    //console log to see whats going on
    console.log("a buttom was click");
    
    // value gest filter and new table get display.
    //search by date
    if(inputValue !=""){
        //filter gets settle
        function filterUFODate(dateUFO){
            return dateUFO.datetime == inputValue;
            
             }
        //table gets generated.
        var filterDates =tableData.filter(filterUFODate);
        console.log(filterDates);
        

        filterDates.forEach(d =>{
            var row = tbody.append("tr");
            Object.values(d).forEach(td =>{row.append("td").text(td)})

        })
    //search for the city
    } else if (inputValueCity !=""){
        function filterUFOCity(cityUFO){
            return cityUFO.city==inputValueCity;
        }
        var filterCity=tableData.filter(filterUFOCity);

        console.log(filterCity);
        filterCity.forEach(d =>{
            var row=tbody.append("tr");
            Object.values(d).forEach(td =>{row.append("td").text(td)})
        } )

    }else if (inputValueState !=""){
        function filterUFOState(stateUFO){
            return stateUFO.state==inputValueState;
        }
        var filterState=tableData.filter(filterUFOState);
        
        
        filterState.forEach(d =>{
            var row=tbody.append("tr");
            Object.values(d).forEach(td =>{row.append("td").text(td)})
        } )

    }else if (inputValueCountry !=""){
        function filterUFOCountry(countryUFO){
            return countryUFO.country==inputValueCountry;
        }
        var filterCountry=tableData.filter(filterUFOCountry);
        
        
        filterCountry.forEach(d =>{
            var row=tbody.append("tr");
            Object.values(d).forEach(td =>{row.append("td").text(td)})
        } )
    
    }else if (inputValueShape !=""){
        function filterUFOShape(shapeUFO){
            return shapeUFO.shape==inputValueShape;
        }
        var filterShape=tableData.filter(filterUFOShape);
        
        
        filterShape.forEach(d =>{
            var row=tbody.append("tr");
            Object.values(d).forEach(td =>{row.append("td").text(td)})
        } )
    
    }
    
 
}



// YOUR CODE HERE!
