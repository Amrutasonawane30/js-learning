class Person{
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    details(){//method
        console.log(`Person details => Name:${this.name} city=> ${this.city} age=> ${this.age}`);
    }
}

const jenny = new Person ("jenny", "Pune", 28);
const bill = new Person("Bill", "Mumbai", 24);
const elon = new Person("Elon", "LA", 87);
const Stew = new Person("Stew", "Pune", 58);

const arrayPerson =[jenny, bill, elon, Stew];
console.log(`======= WAP to get employee from city - Pune ================`);
arrayPerson.forEach( element =>{
if (element.city=="Pune") {
    element.details();
}
});

console.log(`======= WAP to get average age ================`);
let sumAge = 0;
arrayPerson.forEach(person => {
sumAge = sumAge + person.age;
});
let averageAge = sumAge/arrayPerson.length;
console.log(`Average age : ${averageAge}`);