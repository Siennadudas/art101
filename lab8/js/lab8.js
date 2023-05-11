// index.js - Lab 8: Anon Functions and Callbacks
// Author: Sienna Dudas
// Date: 5/8/23

function doubleIt(x) {
    return 2*x;
}

// test function
console.log("11 doubled is:", doubleIt(11));
console.log("22 doubled is:", doubleIt(22));
console.log("44 doubled is:", doubleIt(44));

array = [11,22,44,88,176,352,704,1408]
console.log("My Array", array);


var result = array.map(doubleIt);
console.log("Array doubled", result);

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = result; // 22,44,88



