console.log("_____________________Step 1___________________");
function squareOfWordLength(arg1)
{
    var len=arg1.length;//
    var n1= len;
    var n2=2;
    result=n1**n2;
    return result;
}
squareOfWordLength("JavaScript");
console.log(`Length square of JavaScript is ${result} `);
squareOfWordLength("Google Chrome");
console.log(`Length square of Google Chrome is ${result} `);
squareOfWordLength("Developer Smart");
console.log(`Length square of Developer Smart is ${result} `);

console.log("_____________________Step 2___________________");
function showLength()
{
    var str="I am Angular Developer";
    var a=str.length;
    console.log(`String length is ${a}`);
    var stringDivide=a/4;
    console.log(`String length divided by total no words ${stringDivide}`);
    var mul=a*4;
    console.log(`String length multiplied by total no words ${mul}`);
}
showLength();