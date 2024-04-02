
class student{
    constructor(rollNo, name, division){
        this.rollNo = rollNo;
        this.name = name;
        this.division = division;
    }
    getDetails(){
        console.log(`Student details => rollno => ${this.rollNo} Name:${this.name}  division => ${this.division}`);
    }
}
const amu = new student(445,"Amu", "B");
amu.getDetails();

const namu = new student(446,"namu", "B");
namu.getDetails();

const samu = new student(447,"samu", "A");
samu.getDetails();