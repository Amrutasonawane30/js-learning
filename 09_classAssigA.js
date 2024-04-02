console.log("======================================= Step 1 ==========================================");
class Vehicle {
    constructor(name, model, price,color,weight){
        this.name = name;
        this.model = model;
        this.price = price;
        this.color = color;
        this.weight = weight;
    }
    details(){
        console.log(`Vehicle name => ${this.name} model => ${this.model} price => ${this.price} cr color => ${this.color} weight => ${this.weight} kg`);
    }
}

const ferrary = new Vehicle("Ferrari", 430, "5.4 Cr","red", 1517);
ferrary.details();
const nexon = new Vehicle("Tata Nexon", 456, "15L", "Black", 1456);
nexon.details();
const hyundai = new Vehicle("Hyundai i10", 143, "10L", "Grey", 1786);
hyundai.details();
const maruti = new Vehicle("Maruti Dzire", 2356, "11L", "Blue", 1406);
maruti.details();
const honda = new Vehicle("Honda City", 76, "18L", "white", 1654);
honda.details();
console.log("\n============================== Traversing Array Object ================================");
const array = [ferrary, nexon, hyundai, maruti, honda];
for (const element of array) {
    element.details();
}

console.log("\n======================================= Step 2 ==========================================");
class College{
    constructor(name, address, stream, stud_strength){
        this.name = name;
        this.address =  address;
        this.stream = stream;
        this.stud_strength = stud_strength; 
    }
    display(){
        console.log(`College name => ${this.name} Address => ${this.address} Stream => ${this.stream} Student Strength => ${this.stud_strength}`);
    }
}
const rajivGandhi = new College("Rajiv Gandhi", "Pune", "Science", 1000 );
rajivGandhi.display();
const mahaveer = new College("Mahaveer", "Pune", "Science & Commerce", 1200 );
mahaveer.display();
const Crecent = new College("Crecent", "Pune", "Science & Commerce", 800 );
Crecent.display();
const THFR = new College("THFR", "Pune", "Arts", 500 );
THFR.display();

