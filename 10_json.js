//JSON.parse() : Convert JSON to object
//json.stringfy(): convert an object to json

let person = {
    name : "Amu",
    city : "pune",
    experience : 8,
    isMarid : true,
    skills : ["HTML", "CSS", "JAVASCRIPT"],
    address : {
        strret : "wakad",
        city : "Pune"
    }
}
console.log(`type of person is ${typeof person}`);
const result = JSON.stringify(person);
console.log(`type of after converson is ${typeof result}`);
console.log(result);
// below can not use " " bcz it wont alloe dounle coats in to double coats
const personJSON = `
{
    "name": "Amu",
    "city": "pune",
    "experience": 8,
    "isMarid": true,
    "skills": [
      "HTML",
      "CSS",
      "JAVASCRIPT"
    ],
    "address": {
      "strret": "wakad",
      "city": "Pune"
    }
  }
`;
console.log("===================== Convert JSON to object ====================");
const personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.log(personObject);

const a = person.skills[0];
console.log(a);