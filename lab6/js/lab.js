// index.js - Experimenting with javascript arrays and objects
// Author: Sienna Dudas
// Date: 5/1/23



// Define Variables
myTransport = ["Volkswagen Golf", "bus", "bicycle"]

// create an object for my main ride
  myMainRide = {
    make: "Volkswagon",
    model: "Golf",
    color: "Gray",
    year: 2010,
    age: function() {
        return 2023 - this.year;
    }
}



// Output
document.writeln("Modes of transportation I use: ", myTransport, "</b>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null,'\t'), "</pre>");




