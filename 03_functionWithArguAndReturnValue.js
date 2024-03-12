//3. Function with arguments and return value

function subtract(numOne, numTwo){

    console.log("======== subtraction ================");

    console.log("Arguments: ", numOne,numTwo );

    var result = numOne - numTwo;

    return result;

}

var returnValue = subtract(9, 4);

console.log("Result of subtraction is: ", returnValue);

 

var returnValue = subtract(99, 42);

console.log("Result of subtraction is: ", returnValue);