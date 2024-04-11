class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
    details (){
        //console.log(`Employee  Name:${this.emp_name} and  Company: ${this.emp_company}`);
        console.log(`Employee details Id: ${this.emp_id} Name:${this.emp_name} Department: ${this.emp_dept} Salary: ${this.emp_salary} Company: ${this.emp_company}`);
    }
     
}
const emp_anil = new Employee(22, "Anil", "IT", 50008, "TCS");
const emp_radha = new Employee(33, "Radha", 'RR', 74808, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47080, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Manesh", "HR", 85000, "Infy");

const arrayEmployees =  [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("========================== Step 1 Employee working in TCS ============================");
arrayEmployees.forEach( element => {
if(element.emp_company == "TCS")
console.log(`Employee  Name:${element.emp_name} and  Company: ${element.emp_company}`);
});

console.log("\n========================== Step 2 Finance Department Employee ============================");
arrayEmployees.forEach(element =>{
if(element.emp_dept == "Finance")
console.log(`Employee Name ${element.emp_name} and Department ${element.emp_dept}`);
});

console.log("\n========================== Step 3 Employee Name starts with 'R' ============================");
arrayEmployees.forEach(element => {
    if(element.emp_name.startsWith("R")){
        element.details();
    }
})

console.log("\n========================== Step 4 Employee Salary greater than 75000 ============================");
arrayEmployees.forEach(element =>{
if(element.emp_salary > 75000)
console.log(`Employee Salary greater tahn 75000 is ${element.emp_name}`);
});

console.log("\n========================== Step 5 ============================");
arrayEmployees.forEach(element => {
if(element.emp_salary >= 50000 && element.emp_dept == "IT")
element.details();
});

console.log("\n========================== Step 6 ============================");
arrayEmployees.forEach(element =>{
if(element.emp_company=="Infy")
element.details();
});