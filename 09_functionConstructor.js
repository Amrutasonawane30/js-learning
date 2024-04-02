function Person(name, city, age){
this.name = name;
this.city = city;
this.age = age;
}
Person.prototype.country = "Bharat";

console.log(`${jenny.name}, ${jenny.city}, ${jenny.age}, ${jenny.country}`);

const bill = new Person("Bill", "Mumbai", 34);
console.log(`${bill.name}, ${bill.city}, ${bill.age}, ${bill.country}`);

const elon = new Person("Elon", "benglur", 67);
console.log(`${elon.name}, ${elon.city}, ${elon.age}, ${elon.country}`);

//instanceOf
const result = elon instanceof Person;
console.log(result);

const array = [2,4,6,8];
array.push(7);
console.log(array);

1.30