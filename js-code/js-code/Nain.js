//truthy and falsy values 
// truthy and falsy value with number
const falsyNumber = 9898;
if (falsyNumber){
    console.log("we have allow value")
}
else {
    console.log("we dont not allow")
}
//truthy and falsy value with string
const falsyString = "nazanin"
if(falsyString){
    console.log("we have inithial value")
}
else {
    console.log("we don't have inithial value")
}
// method length with string
const myFamily = "My name is nazanin my last name is hussaini im student in sharifi acadimi programming"
const trimFamily = myFamily.trim()
if(myFamily.length > 2 && myFamily.length <48){
    console.log ("we have inithial value")
}
else{
    console.log("we don't have inithial value")
}
// condithon with ternary opretor
const result_1 = myFamily <0 ? "we have inithial value" : "we don't have inithial value";
// method trim with string and ternary opretor
const name = prompt("Enter your name");
const result_2 = name.trim()?"you hav allowed" : "you have not allowed"
console.log(result_2);
// method trim with string and if condition
const meName = prompt("Enter your names")
const nameTrimed = meName.trim()
if (nameTrimed.length > 2 && nameTrimed <20){
    console.log ("your name is valid name");
}
else{
    console.log("your name is unvalid name")
}
//function 3 now ast 1=> declarithon 2=> exparithon 3=> call back 
//function declartion
function grathing (name,lastName){
    console.log (name+" "+lastName);
}
grathing("Nazanin","Hussaini");
// function declartion and spread opretor
function sum (...a){
    return a.reduce((total,sum)=>{
    return  total * sum
    },1)
}
sum(1,3,4,5,8,3)