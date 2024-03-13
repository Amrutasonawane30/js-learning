

var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of chars is:" , totalChars);
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);
var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);
var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);
var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);
console.log("========== indexOf() ==================");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M is: ", indexOfM);
console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);
console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);
console.log(`========== trim() ==================`);
var greet="   good morning   ";
console.log("before trim length ",greet.length);
var str=greet.trim();
console.log("After trim length ",str.length);
console.log("========== includes() ==================");
var greet="good morning";
var result=greet.includes("ing");
console.log(`Is string ${greet} includs word for ing ${result}`);
console.log("========== search() ==================");
var greet="good morning";
var result = greet.search("ing");
console.log(`'ing' is availablr at ${result}`);
var result = greet.search("r");
console.log(`'r' is availablr at ${result}`);
console.log("========== slice() ==================");
var greet="good morning";
var slc=greet.slice(0,greet.length-1);
console.log(`first char is ${0} and last is ${slc}`);
console.log("========== split() ==================");
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);




