// Lab 9 - JavaScript for the Web
// Author: Sienna Dudas
// Date: 5/10/23

var outputEl = document.getElementById('output');

// create new paragraph element
var new1El = document.createElement('p');

new1El.innerHTML = "How was your day?";

// create another paragraph element 
var new2El = document.createElement('p');

new2El.innerHTML = "Goodnight!";

// insert new paragraphs into document
outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

// create a 3rd element 
var new3El = document.createElement('p');

// add what the element will display
new3El.innerHTML = "Hello,";

// insert paragraph into document
outputEl.prepend(new3El);


