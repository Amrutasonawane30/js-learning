console.log("===========Step 1 Count Vowels============");
const word = "I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++) {
     let char= word.charAt(index);
    let lowerCase = char.toLocaleLowerCase();
    if (vowels.includes(lowerCase)) {
         vowelsCount++;
    }
}
console.log(`Total vowels are ${vowelsCount}`);

console.log("===========Step 2 Sum of cube of numbers============");
var sum = 0;
for (let index = 0; index <= 5; index++) {
     sum = sum + index * index * index;
}
console.log(`Sum of cube of numbers from 1 to 5 is ${sum}`);

console.log("=================== Step 3 ==========================");
function oddPositionedChars(arg1) {
    for (let index = 0; index < arg1.length; index++) {
     const element = arg1.charAt(index);
     if (index%2 != 0 && element != " ") {
          console.log(element);
     }
     
    }
     
}
console.log("Odd position characters for string1 are ");
oddPositionedChars("Hard work always pays back");
console.log("Odd position characters for string2 are ");
oddPositionedChars("Soon I will be UI IT Champ");