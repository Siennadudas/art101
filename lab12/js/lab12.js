// index.js - Lab 12: Conditonals
// Author: Sienna Dudas
// Date: 5/23/23

function sortingHat(str) {

    // count the letters in str
    var length = str.length;

    // use modulus to get the remainder with 4
    var mod = length % 4;

    // return different results depending on value of mod
    var house = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
    return house[mod];
}

$(function() {

    // find button in document
    var button = $("#button");

    // add event listener to button
    button.click(function() {

        // get the value of the form input
        var name = $("#input").val();

        // send value to sortingHat 
        var house = sortingHat(name);

        // create paragraph element
        var outputHtml = '<p class="outputParagraph">The Sorting Hat has sorted you into ' + house + '</p>';
        var outputParagraph = $(outputHtml);

        // append paragraph to output div
        $("#output").append(outputParagraph);

    });
    
});
