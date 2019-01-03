

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
                console.log("received data " +  JSON.stringify(d));
                let user = d[0]["handle"];
                let predictions = d[0]["predicted"];
                console.log("predictions " + predictions);
                d3.selectAll("#predictionText").text("User "+user+" appears "+predictions )  ; 
            }
  });
}

d3.select("#predict").on("click",fetchData);
