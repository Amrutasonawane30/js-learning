const person = {
    name : "Amruta",
    city : "Pune",
    experience : 10
}
//Not allowed
// person = {
//     pin : 1234
// }
console.log(person);
person.city="Mumbai";
console.log(person);

const address = {
    flatNumber : 1005,
    wing : "B2 Block",
    street : "S nagar"
}
console.log(address);
Object.freeze(address);

address.street = "Kharadi";// won't reflect this change as object  address is freezed
console.log(address);

console.log("=================== in operator ===============");
const result = "street" in address;
console.log(result);
console.log("pin" in address);



39















