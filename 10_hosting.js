
//hosting : we can call variable after call, but can not call let and const after log
//you can call function before initialising  it can definatelly ask in interview
console.log(city);
var city = "Pune";

square(5);
function square(num){
console.log(`Addition is ${num + num}`);
}


var  cube = function(num){
    console.log(`cube is ${num * num}`);

}
cube(3);