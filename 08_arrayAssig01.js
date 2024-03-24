const fruits_seasonal=["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Original Array is `);
console.log(fruits_seasonal);

console.log("\n============== Step 1 =================");
console.log("First element is ",fruits_seasonal.at(0));
console.log("Last element is ",fruits_seasonal.at(fruits_seasonal.length-1));

console.log("\n============== Step 2 =================");
fruits_seasonal.unshift("Papaya");
console.log(`Add Papaya before banana`);
console.log(fruits_seasonal);

console.log("\n============== Step 3 =================");
console.log(fruits_seasonal);
console.log("Remove Mango from");
fruits_seasonal.splice(4, 1);
console.log(fruits_seasonal);

console.log("\n============== Step 4 =================");
console.log(fruits_seasonal);
console.log(`Add Element Pineapple at last position`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log("\n============== Step 5 =================");
console.log(fruits_seasonal);
console.log("Insert Dragon Fruit before Water Melon");
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(fruits_seasonal);

console.log("\n============== Step 6 =================");
console.log(fruits_seasonal);
console.log("Replace Orange with Kiwi");
fruits_seasonal.splice(2, 1,"Kiwi")
console.log(fruits_seasonal);

console.log("\n============== Step 7 =================");
console.log(fruits_seasonal);
console.log("Displaying elements from 1 to 4");
var x =fruits_seasonal.slice(1,5);
console.log(x);

console.log("\n============== Step 8 =================");
console.log(fruits_seasonal);
var len = fruits_seasonal.length;
var x = fruits_seasonal.slice(len-3);
console.log(x);