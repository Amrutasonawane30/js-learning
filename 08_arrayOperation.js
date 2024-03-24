var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`===============Original Array================`);
console.log(arrayNumbers);
console.log(`===============Removing Last Element=========`);
arrayNumbers.pop();
console.log(arrayNumbers);
console.log(`===============Original Array================`);
var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(arrayNumbers);
console.log(`===============Add element Last =============`);
arrayNumbers.push(100);
console.log(arrayNumbers);
console.log(`===============Original Array================`);
var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(arrayNumbers);
console.log(`==========Add element 0th index =============`);
arrayNumbers.unshift(44);
console.log(arrayNumbers);
console.log(`===============Original Array================`);
var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`==========Remove element 0th index =============`);
arrayNumbers.shift(44);
console.log(arrayNumbers);

console.log(`===============Slice method================`);
var arrayNumbers = [2, 4, 1, 7, 9, 8, 11, 22];
const subArray = arrayNumbers.slice(3, 5);
console.log(subArray);
const subArrayNew = arrayNumbers.slice(2);
console.log(subArrayNew);

console.log(`=======Remove or delete, middle elements========`);
var arrayNumbers = [2, 4, 1, 7, 9, 8, 11, 22];
console.log(arrayNumbers);
const deleteElement = arrayNumbers.splice(2, 3);
console.log(deleteElement);
console.log(arrayNumbers);

console.log(`=======Insert or add an element in the middle of array========`);
var arrayNumbers = [2, 4, 1, 7, 9, 8, 11, 22];
console.log(arrayNumbers);
const deleteArray = arrayNumbers.splice(3, 1, 100);
console.log(deleteArray);
console.log(arrayNumbers);

console.log(`=============== Add element ================`);
var arrayNumbers = [2, 4, 1, 7, 9, 8, 11, 22];
console.log(arrayNumbers);
arrayNumbers.splice(5, 0, 500);
console.log(arrayNumbers);
arrayNumbers.splice(5, 0, 500, 400);
console.log(arrayNumbers);





