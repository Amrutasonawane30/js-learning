
var marrageCheck = function(age, candidateName){
if(age>=21){
    console.log(`Eligible for marriage-- ${age} Name-- ${candidateName}`);
}
console.log(`Marriage eligibility check done`);
}
marrageCheck(20, "Bill");
marrageCheck(21, "Stew");
marrageCheck(29, "Leo");
console.log("==============================");

var marriageEligibility = function(age, candidateName, gender){
    if (age>=21 && gender=="Male") {
        console.log(`Eligible : Age- ${age}, Name- ${candidateName}`);
    }
}
marriageEligibility(23, "Bill", "Male");
marriageEligibility(20, "Elon", "Male");
console.log("==============================");