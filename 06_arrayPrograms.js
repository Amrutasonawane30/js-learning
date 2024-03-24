
var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`=============== Evan Index Element =================`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 0 ) {
        const element = arrayNumbers[index];
        console.log(element);
    }
}

console.log(`=============== Odd Index Element =================`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 != 0 ) {
        const element = arrayNumbers[index];
        console.log(element);
    }
} 
    
console.log(`=============== Sum of an Array Element =================`);
var arrayNumbers = [2, 4, 1, 7, 9, 8];
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum = sum + element;
}
console.log(`Sum of an array element is ${sum}`);