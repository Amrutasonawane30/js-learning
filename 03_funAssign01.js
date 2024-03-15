<<<<<<< HEAD
console.log("________________Step 1_________________");
console.log("============Function without Argument============");
function fun1()
{
console.log("I am in function 1");
}
function fun2()
{
console.log("I am in function 2");
} 
fun1();
fun2();
console.log("________________Step 2_________________");
console.log("============Function with Argument============");
function personalDetails(firstName, lastName, collegeName) 
{
   firstName="Amruta"; lastName="Sonawane"; collegeName="ISSC";
   console.log("First Name is:",firstName, "Last Name is:",lastName, "College Name is:", collegeName);
}
personalDetails();
console.log("________________Step 3_________________");
console.log("============Function with Argument and no return value============");
function swapValues(arg1,arg2) {
console.log("Arguments before swap ",arg1,arg2);
// After swap below code
arg1=arg2;
arg2=arg1;
console.log("Arguments after swap ",arg1,arg2); 
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("________________Step 4_________________");
console.log("========Function with three Argument==========");
function addThreeValues(v1,v2,v3)
{
   var add=v1+v2+v3;
   console.log("Addition is ",add);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

=======
console.log("________________Step 1_________________");
console.log("============Function without Argument============");
function fun1()
{
console.log("I am in function 1");
}
function fun2()
{
console.log("I am in function 2");
} 
fun1();
fun2();
console.log("________________Step 2_________________");
console.log("============Function with Argument============");
function personalDetails(firstName, lastName, collegeName) 
{
   firstName="Amruta"; lastName="Sonawane"; collegeName="ISSC";
   console.log("First Name is:",firstName, "Last Name is:",lastName, "College Name is:", collegeName);
}
personalDetails();
console.log("________________Step 3_________________");
console.log("============Function with Argument and no return value============");
function swapValues(arg1,arg2) {
console.log("Arguments before swap ",arg1,arg2);
// After swap below code
arg1=arg2;
arg2=arg1;
console.log("Arguments after swap ",arg1,arg2); 
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("________________Step 4_________________");
console.log("========Function with three Argument==========");
function addThreeValues(v1,v2,v3)
{
   var add=v1+v2+v3;
   console.log("Addition is ",add);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

>>>>>>> 19f3e5cb7636a59644b7aae4bf96522ef90ccdd8
