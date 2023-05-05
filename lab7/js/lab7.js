// index.js - Lab 7: Functions
// Author: Sienna Dudas
// Date: 5/4/23

// getSortedUserName - a function that asks user for username, sorts letters and displays results.
function getSortedUserName(){
// prompt the user to enter their name
    var userName = window.prompt("Hello, what is your name?");
// convert username to all lowercase letters
    userName = userName.toLowerCase();
// convert the name into an array
    var userNameArray = userName.split('');
// sort the array
    var sortedUserNameArray = userNameArray.sort();
// convert the array into a string and return
    return sortedUserNameArray.join('');
}
//output
document.writeln("<div id='sorted'>I sorted the letters of your name. Here is your new name: ", getSortedUserName(), "</div>");


