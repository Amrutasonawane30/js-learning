function gradeCalculation(marks) {
    if (marks <= 0 || marks > 100 || marks == null ) {
        console.log(`You entered ${marks}, Please provide the valid marks.`);
    } else if(marks >=75 && marks <= 90) {
        console.log(`Excellent marks : ${marks}, your grade is A`);
    }else if(marks >=50 && marks <= 75){
        console.log(`Good marks : ${marks}, your grade is B`);
    }else if(marks >=35  && marks <= 50){
        console.log(`Marks are ${marks}, your grade is C, need improvement.`);  
    }else if(marks >= 90){
        console.log(`Fantastic marks : ${marks}, your grade is A+`);
    }else if(!Number.isNaN(marks)){
        console.log(`Marks : ${marks}, Please provide valid marks.`);
    }else{
        console.log(`Marks : ${marks}, Fail Better luck next time`);
    }
    
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");
gradeCalculation();
gradeCalculation(null);
//gradeCalculation("Amruta");