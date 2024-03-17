// numeric string used with + gives string type
console.log(".................................Implicit String.......................................");
console.log("=================================string and number=====================================");
var a = '3'; var b = 2;
var result = '3' + 2;
console.log(`a: ${a} type ${typeof a} , b:${b} type ${typeof b} and result is ${result}`);
var a ='3', b = true, result = a + b;; 
console.log(`a: ${a} type ${typeof a} , b:${b} type ${typeof b} and result is ${result}`);
var a = '3', b1, result = a + b1;
console.log(`a: ${a} type ${typeof a} , b:${b1} type ${typeof b1} and result is ${result}`);
var a = '3', b1=null, result = a + b1;
console.log(`a: ${a} type ${typeof a} , b:${b1} type ${typeof b1} and result is ${result}`);

console.log("\n=========Numeric string used with +,-,*,/ Implicit Conversion to Number===============");
var x ='4', y ='2', result = x - y; 
console.log(`x: ${x} type ${typeof x} , b:${y} type ${typeof y} and subtraction is ${result}`);
var x ='4', y =2, result = x - y; 
console.log(`x: ${x} type ${typeof x} , b:${y} type ${typeof y} and subtraction is ${result}`);
var x ='4', y =2, result = x * y; 
console.log(`x: ${x} type ${typeof x} , b:${y} type ${typeof y} and multiplication is ${result}`);
var x ='4', y =2, result = x / y; 
console.log(`x: ${x} type ${typeof x} , b:${y} type ${typeof y} and division is ${result}`);

console.log("\n======Arithmatic operation with number, boolean, undefined or null gives NaN ==========");
var a = 4, b2, result = a + b2;
console.log(`a: ${a} type ${typeof a}, b2:${b2} type ${typeof b2} and addition is ${result}`);
var result = a - b2;
console.log(`a: ${a} type ${typeof a}, b2:${b2} type ${typeof b2} and subtraction is ${result}`);
var a = true;
console.log(`a: ${a} type ${typeof a}, b2:${b2} type ${typeof b2} and addition is ${result}`);
var a = null;
console.log(`a: ${a} type ${typeof a}, b2:${b2} type ${typeof b2} and addition is ${result}`);

console.log("\n...........Explicit Conversion: Invalid string to number return NaN ......................");
var a = "Hello" ,result = Number(a);
console.log(`a: ${a} type ${typeof a} conversion to number ${result}`);
var a1, result = Number(a1);
console.log(`a1: ${a1} type ${typeof a1} conversion to number ${result}`);
var a2 = NaN, result = Number(a2);
console.log(`a2: ${a2} type ${typeof a2} conversion to number ${result}`);