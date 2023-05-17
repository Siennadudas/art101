// index.js - Lab 10: JavaScript Events and Forms
// Author: Sienna Dudas
// Date: 5/15/23

// getSortedUserName - a function that sorts username letters
function getSortedUserName(userName) {
    // convert username to all lowercase letters
    userName = userName.toLowerCase();
    // convert the name into an array
    var userNameArray = userName.split('');
    // sort the array
     var sortedUserNameArray = userNameArray.sort();
    // convert the array into a string and return
    return sortedUserNameArray.join('');
}

// locating button and adding event listener
var myButton = document.getElementById('my-button');
myButton.addEventListener('click', getInput);

// a function that gets username from a form input
function getInput() {
    // get username from form input 
    var myInput = document.getElementById('user-name');
    var userName = myInput.value;
    // sort the username
    var sortedUserName = getSortedUserName(userName);
    writeOutput(sortedUserName);
}

function writeOutput(userName) {
    var myOutput = document.getElementById('output');
    myOutput.innerHTML = 'your sorted name is:' + userName;
}


