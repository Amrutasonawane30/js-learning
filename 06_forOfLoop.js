 
 var arrayNumbers = [2, 4, 1, 7, 9, 8];
for (var element of arrayNumbers) {
    console.log(element);
}
let sum = 0;
for (var element of arrayNumbers) {
    sum = sum + element;
}
console.log(`sum of an array ${sum}`);

let mul = 1;
for (const element of arrayNumbers) {
    mul = mul * element
}
console.log(`Multiplication of arra ${mul}`);

console.log(`========================================`);
var friendList = ["Jenny", "Bill", "Andy", "Elon"];
for (var element of friendList) {
    console.log(element);
}
// Question count vowels in friendList
console.log(friendList);
var element = friendList.join(", ");
console.log(" Join element as",element);

let arr1 = [4, 5,];
let arr2 = [1, 2, 3];
let arr3 = arr2.concat(arr1);
console.log(`Concated array is ${arr3}`);