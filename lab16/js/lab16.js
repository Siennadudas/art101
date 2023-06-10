// this function calls xkcd api to get daily comic

function writeOutputToHtml(comicObj) {

    console.log(JSON.stringify(comicObj));

    $("#title").html = comicObj["title"];

    var src = comicObj["img"];
    var alt = comicObj["alt"];

    $("#image").attr("src", src);
    $("#image").attr("alt", alt);

}

$(function() {

    // call api with ajax
    $.ajax({
        url : "https://xkcd.com/info.0.json",
        type : "GET",
        dataType : "json",
        success : function(comicObj) {
            writeOutputToHtml(comicObj);
        },
        error : function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
    
});