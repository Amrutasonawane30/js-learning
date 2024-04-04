
let info = {
    name : "Aleix Melon",
    id : "E00245",
    role : ["Dev", "DBA"],
    age : 23,
    doj : "11-12-2019",
    married : false,
    address : {
        street : "32, Laham st.",
        city : "Innsbruck",
        country : "Austria"
    },
   // reffered-by : "E0012"
}

const infoAleix = `
{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev", "DBA"],
    "age" : 23,
    "doj" : "11-12-2019:,
    "married" : false,
    "address" : {
        "street" : "32, Laham st.",
        "city" : "Innsbruck",
        "country" : "Austria",
    },
    "reffered-by" : "E0012"
}
`;
console.log("============= console of first role =================");
const devRole = info.role[0];
console.log(devRole);
console.log("============= console last name =================");
const lastName = info.name.substring(6,11);
console.log(lastName);
console.log("============= Joining year of employee =================");
const dojEmp = info.doj.split("-");
console.log(dojEmp);
var len = dojEmp.length;
console.log(`Joining year of employee ${dojEmp[len-1]}`);