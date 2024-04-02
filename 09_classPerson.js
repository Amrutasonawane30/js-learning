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
jenny.details();

const bill = new Person("Bill", "Mumbai", 24);
bill.details();

const elon = new Person("Elon", "LA", 87);
elon.details();

console.log(`======= Traversing Array object ================`);

const array =[jenny, bill, elon];
for (const element of array) {
    element.details();
}

//instanceOf
const result = elon instanceof Person;
console.log(result);

