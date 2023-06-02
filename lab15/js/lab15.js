function fetchOutputFromApi() {

    // call api with ajax
    $.ajax({
        url : "https://swapi.dev/api/people/5/",
        type : "GET",
        dataType : "json",
        success : function(data) {
            writeOutputToHtml(data);
        },
        error : function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            writeOutputToHtml(textStatus);
        }
    });

}

function writeOutputToHtml(data) {

    console.log(JSON.stringify(data));

    for (var key of Object.keys(data)) {

        var value = data[key];
        var str = key + ': ' + JSON.stringify(value);

        var outputHtml = str + '<br/>'; 

        $("#output").append(outputHtml);
    }

}

$(function() {

    // add event listener to button
    $("#activate").click(function() {

        fetchOutputFromApi();

    });
    
});