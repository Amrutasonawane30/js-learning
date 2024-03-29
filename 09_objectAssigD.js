
let professor = {
name : "Reddy",
age : 50,
subject : "Computer Science",
college : "ISSC",
city : "Pune",
degree : {
engineering : 'CSC',
PHD : 'Adv. Computing',
getDegree : function(){
   
    let degr = `Degree : ${this.engineering} PHD : ${this.PHD} `
    //return professor;
}
},
certificates : ['Hacker Rank Participation', 'Certificate in IFE cource', 'Certificate in Adv Programing']
}
console.log(`====== Professor name : ${professor.name} age : ${professor.age} teaching subject : ${professor.subject} college name : ${professor.college} city : ${professor.city} ======`);
console.log("============== Nested Objects ===========");
console.log(professor.degree);
console.log("============== Adding one array ===========");
console.log(professor.certificates);

console.log("============== Adding new property ===========");
professor.totalExperience = 14;
console.log(professor);

console.log("============== Modifing property ===========");
let a = professor.certificates.splice(1, 0, "Hadoop");
console.log(professor.certificates);

console.log("============== Adding Certificate ===========");
professor.certificates.splice(2, 0, "Oracle Certified");
console.log(professor.certificates);

console.log("============== Last Element of Certificate ===========");
let b = professor.certificates.slice(-1);
console.log(b);

console.log("============== Complete Object ===========");
console.log(professor);

console.log("============== Traversing Array ===========");
for (let index = 0; index < professor.certificates.length; index++) {
    const element = professor.certificates[index];
    console.log(element);
}

