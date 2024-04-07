
console.log("============== Step 1 =================");
/*const arrayNumbers = [3, 9, 7, 6, 19, 29, 53];
function isPrimeNumber(){
   var  count = 0;
    console.log(`The array is ${arrayNumbers}`);
    for (let index = 2; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        if (element % index == 0) {
          
            count = count + element;
            console.log(count);
            return true;
        }
        
    }
    
}
//isPrimeNumber();
const result = isPrimeNumber();
console.log(`Total Prime numbers are ${result}`);*/
const arrayNumbers = [3, 9, 7, 6, 19, 29, 53];
function isPrime(num){
    for (let index = 2; index < num; index++) {
        if(num % index == 0){
            return false;
        }
    }
    return true;
    }

    function countNumbers(arr){
        let count = 0;
        let primeArray = [];
        arr.forEach(element => {
            if(isPrime(element)){
                count++;
                primeArray.push(element);
            }
        });
        console.log(`Prime numbers : ${primeArray}`);
        console.log(`Count of prime numbers : ${count}`);
    }
    countNumbers(arrayNumbers);

console.log("\n============== Step 2 =================");

function spaceCount(arg1){
var spaceCount = (arg1.split(" ").length-1)
console.log(` The space in count in => "${arg1}" is ${spaceCount}`);
}
spaceCount("Revision is the mother of success");
spaceCount("Java Script is the language of internet world");