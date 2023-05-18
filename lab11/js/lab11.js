// index.js - Lab 11: Libraries & jQuery
// Author: Sienna Dudas
// Date: 5/17/23

$(function() {
    alert("hello");
    var challengeButtonHtml = '<button type="button" id="challenge-button"> Go! </button>';
    var challengeButton = $(challengeButtonHtml);
    $("#challengesParagraph").append(challengeButton);

    var problemButtonHtml = '<button type="button" id="problem-button"> Go!! </button>';
    var problemButton = $(problemButtonHtml);
    $("#problemsParagraph").append(problemButton);

    var resultsButtonHtml = '<button type="button" id="result-button"> Go!!! </button>';
    var resultsButton = $(resultsButtonHtml);
    $("#myresultsParagraph").append(resultsButton);

    challengeButton.click( function () {
    $("#challengesParagraph").toggleClass("special");
    });
     problemButton.click(function () {
    $("#problemsParagraph").toggleClass("special");
    });
    resultsButton.click(function() {
    $("#myresultsParagraph").toggleClass("special");
    });
});

