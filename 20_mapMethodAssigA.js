
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("================ Step 1 adding 10 into each element =============");
console.log(`Original Array is `);
console.log(arrayNumbers);
let arrayTransform = [];
arrayNumbers.forEach(element =>{
    arrayTransform.push(element + 10);
});
console.log(`After addaing 10 into each element`);
console.log(arrayTransform);

console.log("\n================ Step 2 cube each array element =============");
console.log(`Original Array is `);
console.log(arrayNumbers);
const arrayCube = arrayNumbers.map( (currentValue)=>{
return currentValue * currentValue * currentValue;
});
console.log(`after cubing each array element`);
console.log(arrayCube);

console.log("\n=== Step 3 adding index value into its corrosponding each array element =====");
const indexValue = arrayNumbers.map( (element, index) => {
    //return element + 1;
     //element = element + 1;
    return element + index;
});
console.log(indexValue);












