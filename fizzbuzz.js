function fizzBuzz(countTo) {
    for (var counter = 1; counter <= countTo; counter++) {
        var output = counter;
        if (counter % 3 == 0) {
            output = "fizz";
        }
        if (counter % 5 == 0) {
            output = "buzz";
        }
        if ((counter % 3 == 0) && (counter % 5 == 0)) {
            output = "fizzbuzz"
        }
    }
    console.log(output);

}

function array(num) {
    var result = [];
}
