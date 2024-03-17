console.log("=======================Step 1=======================\n");
function greaterName(num1, num2) {
   var result = num1 > num2 ? num1 : num2;
   console.log(`Given numbers are ${num1} and ${num2}. Greater number is ${result}`);
}   
greaterName(10, -10);
greaterName(800, 899);

console.log("\n=======================Step 2=======================\n");

function isEvenOrOddNum(n1) {
    var result = n1 % 2 == 0 ? "is even number" :"is odd number";
    console.log(`The given number ${n1} is ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("\n=======================Step 3=======================\n");
function wordLength(word) {
    var result = word.length%2==0 ? "even" :"odd";
    console.log(`The word ${word} has ${result} length.`);
}
wordLength("JavaScript");
wordLength("develpoer");
wordLength("Google");