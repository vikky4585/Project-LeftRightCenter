

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
             alert("Save Complete") 
            }
  });
}

d3.select("#predict").on("click",fetchData);
