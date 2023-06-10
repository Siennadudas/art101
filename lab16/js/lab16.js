// this function calls xkcd api to get daily comic

function getAndPutData(number) {

    // call api with ajax
    $.ajax({
        url : "https://xkcd.com/" + number + "/info.0.json",
        type : "GET",
        dataType : "json",
        success : function(comicObj) {

            console.log(JSON.stringify(comicObj));

            var title = comicObj["title"];
            var src = comicObj["img"];
            var alt = comicObj["alt"];

            $("#title").html = title;
            $("#image").attr("src", src);
            $("#image").attr("alt", alt);
        },

        error : function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

$(function() {

    var number = 614;

    // add event listener to next button
    $("#next").click(function() {
        number = number + 1;
        getAndPutData(number);
    });

    // add event listener to previous button
    $("#previous").click(function() {
        number = number - 1;
        getAndPutData(number);
    });

    getAndPutData(number);

});


