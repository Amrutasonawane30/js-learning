console.log("=========== callbacks =============");
function greet(callbacks){
console.log(`Good morning......`);
callbacks();
let innerFunction = function(){
    console.log(`inside inner function`);
}
return innerFunction;
}
let saySomething = function(){
console.log(`how are you......`);
}
let result = greet(saySomething);
result();
//greet(saySomething)();