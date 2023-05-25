// index.js - Lab 11: Libraries & jQuery
// Author: Sienna Dudas
// Date: 5/17/23

$(function() {
    // opening alert for fun
    alert("hello, welcome to lab 11.");

    // add button to challenge section
    var challengeButtonHtml = '<button type="button" id="challenge-button"> Go! </button>';
    var challengeButton = $(challengeButtonHtml);
    $("#challengesParagraph").append(challengeButton);

    // add button to problems section
    var problemButtonHtml = '<button type="button" id="problem-button"> Go!! </button>';
    var problemButton = $(problemButtonHtml);
    $("#problemsParagraph").append(problemButton);

    // add button to results section
    var resultsButtonHtml = '<button type="button" id="result-button"> Go!!! </button>';
    var resultsButton = $(resultsButtonHtml);
    $("#myresultsParagraph").append(resultsButton);

    // add event listener to challenge button
    challengeButton.click( function () {
    $("#challengesParagraph").toggleClass("special");
    });

    // add event listener to problems button
     problemButton.click(function () {
    $("#problemsParagraph").toggleClass("special");
    });

    // add event listener to results button
    resultsButton.click(function() {
    $("#myresultsParagraph").toggleClass("special");
    });
});

