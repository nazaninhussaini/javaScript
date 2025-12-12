// method number with Number
const number = "23";
const result = Number(number);
//method number with parseInt
const num = 99.99;
const result_1 = parseInt(num);
//method number with parseFloat
const float_num = 88.9;
const result_2 = parseFloat(float_num);
//method number with + -
const plas_num = -44;
+plas_num;
//method number with ceil
const math_num = 76.7
const result_3 = Math.ceil(math_num);
//mwthod number with isNaN
isNaN(math_num);
// method number with random
const math = "";
const result_4 = Math.random()*100;
// function with if with method isNaN
 function sum (num_1,num_2){
    if(isNaN (num_1)){
        num_1 = 1
    }
    console.log( num_1*num_2);
}
sum(2,6);
// game with if and random ,prompt
const userChoice = prompt("Choose ROCK,PAPER,SCISSORS");
const randomNumber = Math.random()*100;
let computerChois = "";
if(randomNumber> 66){
    computerChois ="SCISSORS"
}
else if(randomNumber>33){
    computerChois = "PAPER"
}
else{
    computerChois = "ROCK";
}
if((computerChois === "PAPER" && userChoice === "ROCK") ||(computerChois === "ROCK" && userChoice === "SCISSORS")||
(computerChois ==="SCISSORS" && userChoice === "PAPER")){
    alert("computer win");
}
else {
    alert("user wins");
}