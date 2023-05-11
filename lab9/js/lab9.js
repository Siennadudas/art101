// Lab 9 - JavaScript for the Web
// Author: Sienna Dudas
// Date: 5/10/23

var outputEl = document.getElementById('output');

var new1El = document.createElement('p');

new1El.innerHTML = "How was your day?";

var new2El = document.createElement('p');

new2El.innerHTML = "Goodnight!";

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);
