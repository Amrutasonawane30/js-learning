
class Employee{
    constructor(emp_id, emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    detail(){
console.log(`Employee Details => ID: ${this.emp_id}, Name : ${this.emp_name},Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);
    }
}
const anil=new Employee(22,"Anil","IT",50000,"TCS");
const radha=new Employee(33,"Radha","HR",74000,"Wipro");
const rishi=new Employee(55,"Rishi","Fianance",47000,"TCS");
const sonali=new Employee(66,"Sonali","Fianance",45000,"Infy");
const monika=new Employee(77,"Monika","IT",40000,"Wipro");
const vinay=new Employee(88,"Vinayak","IT",75000,"TCS");
const mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayEmps = [anil, radha, rishi, sonali, monika, vinay, mahi];
//let newArray;
console.log("=========================== Step 1 Employes from Wipro =================================");
    const newArray = arrayEmps.filter((emp)=>{
     return emp.emp_company=="Wipro";
 });
const wiproCompany = arrayEmps.reduce( (runningTotal, currentValue )=>{
return runningTotal+currentValue.emp_company == "Wipro";
});
newArray.forEach((element) => {
    element.detail();
});

console.log("\n=========================== Step 2 Employes from HR or IT =================================");
const array =arrayEmps.filter( (currentValue)=>{
    return ( currentValue.emp_dept=="IT" || currentValue.emp_dept=="HR");
} );

array.forEach( (element)=>{
    element.detail();
} );

console.log("\n=========================== Step 3 Employes whose id's > 50 =================================");
const arrayGreater = arrayEmps.filter( (emp)=>{
return (emp.emp_id > 50)
});
arrayGreater.forEach((element) =>{
    element.detail();
});

console.log("\n=========================== Step 4 Employes names atarts with A, V or M =================================");
const arrayName =arrayEmps.filter( (currentValue)=>{
    return (currentValue.emp_name.startsWith('A') || currentValue.emp_name.startsWith('V')||currentValue.emp_name.startsWith('M'));
} );

arrayName.forEach( (element)=>{
    element.detail();
} );

console.log("\n=========================== Step 5 Average salary for all dept =================================");
const avgAll = arrayEmps.filter((emp)=>{
    return emp.emp_dept=="IT","HR","Fianance";
});

const sumAll = avgAll.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
//console.log(sumAll);
console.log(`Average salary for all departments employee's: ${sumAll/avgAll.length}`);

console.log("\n=========================== Step 6 Average salary of IT dept =================================");
const avgSalary = arrayEmps.filter((emp)=>{
    return emp.emp_dept==("IT" || "HR" || "Finance");
});

const sumSalary = avgSalary.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
//console.log(sumSalary);
console.log(`Average salary from IT department: ${sumSalary/avgSalary.length}`);