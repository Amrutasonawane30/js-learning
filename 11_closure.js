let num3 = 300; //num3 is global
function outer(){
    let num2 = 200;
let inner = function(){
let num1 = 100;
console.log(`num1 is ${num1}`);
console.log(`num2 is ${num2}`);
console.log(`global is ${num3}`);
}
return inner;
}
//outer()();// u can call this type
let result = outer();
result();

33