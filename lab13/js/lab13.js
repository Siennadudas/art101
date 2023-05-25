function FizzBuzz() {


    // loop through numbers 1 to 200
    var number = 1;
    while (number <= 200) {

        var str = "";

        // see if number is a multiple of 3
        if (number % 3 == 0) {
            str += "Fizz";
        }
        
        // see if number is a multiple of 5
        if (number % 5 == 0) {
            str += "Buzz";
        }

        // see if number is a multiple of 7
        if (number % 7 == 0) {
            str += "Boom";
        }

        // add exclamation point to end of string
        if (str.length > 0) {
            str += "!";
        }

        // append string to output div
        $("#output").append("<p>" + number + " " + str + "</p>");

        // increase number by one
        number++;
    }
    
}

$(function() {

    FizzBuzz();
    
});