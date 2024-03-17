

// WA FE  with one argument for values  .. "javascript", "I am hero"
//inside the FE check wether given word is even or odd
var result = function(word)
{
    var result = word.length%2==0 ? "even" : "odd";
    console.log(`Given word is ${word} is with ${result} `);
}
result("javascript");
result("I am hero");

console.log("====================================");
//FE to check wether number is multiple of 3 or not 

var mul = function(num)
{
    var result = num%3==0 ? "Multyple of 3" : "Not multiple of 3";
    console.log(`number is ${num} and result is ${result}`);
}
mul(9);
mul(91);