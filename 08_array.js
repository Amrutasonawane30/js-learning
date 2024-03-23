
let arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(arrayNumbers);

console.log(`====== Total Elements or length =========`);
console.log(`${arrayNumbers.length}`);

console.log(`====== Accessing array elements =========`);
const element0 = arrayNumbers[0];
console.log(`0th element is: ${element0}`);
console.log(`3rd index element from the array is : ${arrayNumbers[3]}`);

console.log(`====== Accessing array's last elements =========`);
console.log(arrayNumbers[5]);
console.log(`Accessing last element using length property`);
const len = arrayNumbers.length;
console.log(arrayNumbers[len-1]);

console.log(`====== Includs() =========`);
console.log(arrayNumbers.includes(7))
console.log(arrayNumbers.includes(70))

console.log(`====== Update Elements =========`);
arrayNumbers[0] = 200;
console.log(arrayNumbers);

console.log(`====== indexof() =========`);
console.log(arrayNumbers.indexOf(7));
console.log(arrayNumbers.indexOf(700));

console.log(`====== travesing an array =========`);
const arrayNums = [2, 4, 1, 7, 9, 8];
for (let index = 0; index < arrayNums.length; index++) {
     const element = arrayNums[index];
     console.log(element);
    } 

    console.log(`====== travesing an array in reverse=========`);
    let word = "";
    for (let index = arrayNums.length-1; index >=0;index--) {
         const element = arrayNums[index];
         word = word + ' '+ element;
         console.log(element);
        } 
        console.log(word);
