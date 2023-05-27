function FizzBuzz() {
        // define constants
        const multipleOf3 = "Fizz";
        const multipleOf5 = "Buzz";
        const multipleof7 = "Pop";
        const multipleof9 = "RAWR";

        // loop through numbers 1 to 200
        var number = 1;
        while (number <= 200) {

        var str = "";

        // see if number is a multiple of 3
        if (number % 3 == 0) {
            str += multipleOf3;
        }
        
        // see if number is a multiple of 5
        if (number % 5 == 0) {
            str += multipleOf5;
        }

        // see if number is a multiple of 7
        if (number % 7 == 0) {
            str += multipleof7;
        }

        // see if number is a multiple of 9
        if (number % 9 == 0) {
            str += multipleof9;
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