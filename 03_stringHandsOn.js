
function show()
{   console.log("____________________Step 1____________________");
    var str="   Hey you are doing good, keep it up   ";
    console.log("Actual string is :",str);
    console.log("____________________Step 2____________________");
    var strlen=str.length;
    console.log("Length of the string is ",strlen);
    console.log("____________________Step 3____________________");
    var a=str.trim();
    console.log("Removeing the leading and trailing extra spaces:",a);
    console.log("total character after trim ",a.length);
    console.log("____________________Step 4____________________");
    var b= a.length;
    console.log(`Total number of spaces removed : ${strlen-b}`);
    console.log("____________________Step 5____________________");
    console.log(`First character after trim ${a.charAt(0)} and last character after trim ${a.charAt(a.length-1)}`);
    console.log("____________________Step 6____________________");
    var resultVal=a.split(" ");
    console.log(`Total words available in the string after trim: ${resultVal.length}`);
    console.log("____________________Step 7____________________");
    var resultIndex=a.indexOf("good");
    console.log(`Index of good is ${resultIndex}`);
    console.log("____________________Step 8____________________");
    var Substring= a.substring(22);
    console.log(`Substring starting from index 22 is ${Substring}`);
    console.log("____________________Step 9____________________");
    var endStr=a.includes("up");
    console.log(`Is string ends with word "up" ${endStr}`);
    console.log("____________________Step 10____________________");
    var chkStr=a.startsWith("Hey");
    console.log(`Is string starts with word "Hey"  ${chkStr}`);
}
show();