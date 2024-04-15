//First class citizen
//1. FE(function expression)
console.log("=========== FE =============");
let add = function(){
console.log(`inside add function..........`);
}
add();
//2. callback
console.log("=========== callbacks =============");
function greet(callbacks){
console.log(`Good morning......`);
callbacks();
}
let saySomething = function(){
console.log(`how are you......`);
}
greet(saySomething);
//3. function can return another function
console.log(`====== function can return another function ==========`);
function show(){
    console.log(`inside show function....`);
    let display = function(){
        console.log(`inside display.....`);
    }
    return display;
}
//show()();  u can call like this method
let result = show();
result();