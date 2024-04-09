console.log("========================== Step 1 No Arguments no return values  =======================");
let display = () =>{
    console.log(`Good Morning, Today is Monday`);
}
display();

console.log("\n========================== Step 2 Three arguments and no return value =======================");
let mul = (n1, n2, n3 = 1) =>{
    console.log(`The values are n1: ${n1}, n2: ${n2}, n3: ${n3}`);
console.log(`Multiplication is ${(n1 * n2 * n3)}`);
//console.log(`Multiplication of 10 and 4 is ${(n1 * n2 * n3)}`);
}
mul(5, 5, 2);
mul(10,4);

console.log("\n========================== Step 3 Five arguments and return values =======================");
let addition = (n1, n2, n3, n4, n5) => {
    console.log(`The values are n1: ${n1}, n2: ${n2}, n3: ${n3}, n4: ${n4} and n5: ${n5}`);
    let result = n1 + n2 + n3 +n4 + n5;
    return result
}
let addResult = addition(100, 100, 200, 349, 756);
let addstr = addition("I am", " learning", " ES6", " features", " in depth");
console.log(`Addition is ${addResult}`);
console.log(`Addition of string is ${addstr}`);
/*let strAddition = (element0, element1, element2,element3, element4) =>{
    const arrayName = ["I am", "learning", "ES6", "features", "in depth"];
    let addition = [ element0 + element1 + element2 + element3 + element4];
    // let [element0, element1, element2,element3, element4] = arrayName;
    
    //console.log(`element0 : ${element0} element1 : ${element1} element2 : ${element2} element3 : ${element3} elemen4 : ${element4}`);
    // let addition = [ element0 + element1 + element2 + element3 + element4];
    return addition
}
let result = arrayName[element0 + element1 + element2 + element3 + element4];
    console.log(`Addition of array is ${result}`);*/

    // let returnValue = addition("i am",  "learning" ,  "ES6" , 'features' , "in depth");
    // console.log(`values to be passed:"i am", "learning", "ES6", 'features', "in depth"`);;
    // console.log("Addition is: ", returnValue);




