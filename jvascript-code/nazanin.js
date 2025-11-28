const enterNumber = prompt("Enter a scour");

if ( enterNumber>= 90 && enterNumber<= 100){
    console.log ("groupA")
} 
else if(enterNumber>= 80){
    console.log("groupB")
}
else if(enterNumber>= 70){
    console.log("groupC")
}
else if(enterNumber>=60){
    console.log("grosupD")
}
else{
    console.log("fail")
}
const name ="nazanin"
const lastName = "Hussini"
if(name === "nazanin" && lastName === "Hussini"){
    console.log("Hi My name nazanin")
}
else{
    console.log("We may not konw you")
}
const enteredEmail = prompt("Enter your email")
const enteredPassword = prompt("Enter your Password")
const email = "nazaninhussini@gmail.com"
const Password = "nazanin123"
if (enteredEmail=== email && enteredPassword=== Password){
    console.log("Welcom, you hav logeed in seccessfully")
}
else if (enteredEmail=== email && enteredPassword!== Password){
    console.log("You hav entered wrong password")
}
else if(enteredEmail!== email && enteredPassword=== Password){
    console.log("You hav entered wrong email")
}
else{
    console.log("you hav entered both the email or password incorrect")
}
const enteredNumber = prompt("Enter a number");
const taqsim = prompt("Enter the number you want to divide")
if (enteredNumber%taqsim ===0){
    console.log("عدد" + enteredNumber + "بر عدد" + taqsim + "پوره قابل تقسیم است")
}
else{
    console.log("عدد" + enteredNumber + "بر عدد"+ taqsim + "پوره قابل تقسیم نیست")
}