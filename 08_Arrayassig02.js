console.log("=================================== Step 1 ======================================");
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
var x = arrayNumbers.length;
console.log(`Total elements available in array ${x}`);

console.log("\n=================================== Step 2 =====================================");
console.log(arrayNumbers);
var x =arrayNumbers.at(0);
console.log(`First element is ${x}`);
console.log("Last element is ",arrayNumbers.at(arrayNumbers.length-1));

console.log("\n=================================== Step 3 =====================================");
console.log(arrayNumbers);
var x = arrayNumbers[arrayNumbers.length-3];
console.log(`Third last element in array using length property is ${x}`); 

console.log("\n=================================== Step 4 =====================================");
console.log(arrayNumbers);
console.log("Even numbers in array ");
for (const element of arrayNumbers) {
    if (element%2==0) {
       console.log(element);
    }
}

console.log("\n=================================== Step 5 =====================================");
console.log(arrayNumbers);
console.log("Odd numbers in array ");
for (const element of arrayNumbers) {
    if (element%2!=0) {
       console.log(element);
    }
}

console.log("\n=================================== Step 6 =====================================");
console.log(arrayNumbers);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];
        sum = sum + element;
    }
}
console.log(`Sum of even positioned element is ${sum}`);

console.log("\n=================================== Step 7 =====================================");
console.log(arrayNumbers);
let sum1 = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2!=0) {
        const element = arrayNumbers[index];
        sum1 = sum1 + element;
    }
}
console.log(`Sum of odd positioned element is ${sum1}`);

console.log("\n=================================== Step 8 =====================================");
console.log(arrayNumbers);
let sum2 = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum2 = sum2 + element;
}
console.log(`Sum of all elements is ${sum2}`);

console.log("\n=================================== Step 9 =====================================");
console.log(arrayNumbers);
for (const iterator of arrayNumbers) {
    if (iterator%5==0) {
        console.log(iterator);
    }
}

console.log("\n=================================== Step 10 =====================================");
console.log(arrayNumbers);
var x = arrayNumbers.includes(115);
console.log(`Is number 155 available in array?`);
console.log(x);

console.log("\n=================================== Step 11 =====================================");
console.log(arrayNumbers);
var x = arrayNumbers.includes(23);
console.log(`Is number 23 available in array?`);
console.log(x);

console.log("\n=================================== Step 12 =====================================");
console.log(arrayNumbers);
console.log("Inserting element 55 and 66 to index 3");
var x = arrayNumbers.splice(3,0, 55,66)
console.log(arrayNumbers);

console.log("\n=================================== Step 13 =====================================");
console.log(arrayNumbers);
console.log("Delete three elements from starting from index 4");
let indexRemove = 4;
arrayNumbers.splice(indexRemove,3)
console.log(arrayNumbers);