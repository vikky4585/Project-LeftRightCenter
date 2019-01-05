

function fetchData(){
    d3.event.preventDefault();
    dataurl = "/predict"
    console.log("inside fetchdata")

    user = d3.select("#inputEmail4").property("value")
    option = d3.select("#inputState").property("value")
    console.log("input user " + option)

    var inputData = {handle : user, algoname : option}
    $.ajax({
        type: 'POST',
        url: dataurl,
        data: inputData,
        success: function(d) {
                //console.log("received data " +  JSON.stringify(d));
                let user = d[0]["handle"];
                let predictions = d[0]["predicted"];
                console.log("predictions " + predictions);
                d3.selectAll("#predictionText").text("User "+user+" appears "+predictions )  ; 
                epochs = Array.from({length:d[0]['acc'].length-1},(v,k)=>k+1)
                var trace1 = {
                    type: "scatter",
                    mode: "lines",
                    name: name,
                    x: epochs,
                    y: d[0]['acc'],
                    line: {
                      color: "green",
                      width: 4
                    }
                  };

                  var trace2 = {
                    type: "scatter",
                    mode: "lines",
                    name: name,
                    x: epochs,
                    y: d[0]['loss'],
                    line: {
                      color: "blue",
                      width: 4
                    }
                  };
    
                  var data1 = [trace1];
                  var data2 = [trace2];

                  Plotly.newPlot("plot1", data1);
                  Plotly.newPlot("plot2", data2);


            }
  });
}

d3.select("#predict").on("click",fetchData);
