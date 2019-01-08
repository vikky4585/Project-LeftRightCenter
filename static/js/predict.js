


function cleanUp(){
    var plt = document.getElementById("plot1");
    plt.innerHTML = '';

    plt = document.getElementById("plot2");
    plt.innerHTML = '';

    plt = document.getElementById("predictionText");
    plt.innerHTML = '';

    // plt = document.getElementById("spinner");
    // plt.innerHTML = '';
}

function fetchData(){
    d3.event.preventDefault();
    cleanUp();
    dataurl = "/predict"
    console.log("inside fetchdata")
    d3.select("#spinner").append("div").attr("class","loader")
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
                d3.select("#spinner").remove("div")

                let user = d[0]["handle"];
                let predictions = d[0]["predicted"];
                console.log("predictions " + predictions);
                d3.selectAll("#predictionText").
                text(user+" is likely "+ predictions + " with " + +d[0]["model_accuracy"].toFixed(2) * 100 + "% accuracy.")  ; 
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

                  var layout1 = {
                      title: "Accuracy Trend - Model " + d[0]["algoname"],
                      xaxis: {
                        title: "epochs"
                    },

                    yaxis: {
                        title: "Accuracy"
                    }
                  }

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

                  var layout2 = {
                    title: "Loss Trend - Model " + d[0]["algoname"],
                    xaxis: {
                        title: "epochs"
                    },

                    yaxis: {
                        title: "Loss"
                    }
                }
    
                  var data1 = [trace1];
                  var data2 = [trace2];

                  Plotly.newPlot("plot1", data1, layout1);
                  Plotly.newPlot("plot2", data2, layout2);


            }
  });
}

d3.select("#predict").on("click",fetchData);
