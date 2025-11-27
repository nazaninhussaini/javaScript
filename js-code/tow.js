const bortherName = "Ali Behzad"
if (bortherName === "Farid"){
    console.log("You are my middle brother");
}
else if (bortherName === "Ali Behzad"){
    console.log("you are my older brother");
}
else if(bortherName === "Mohammad"){
    console.log("you are my small brother");
}
else {
    console.log("we don't know you");
}

const sisterName = "Mazghan";
switch(sisterName){
    case "Mazghan":
        console.log("You are my small sister");
        break;
    case "masoda":
        console.log("You are my middle sister");
        break;
    default :
        console.log("we don't know you")
}

const number = 20;
const result = number <=20 && number >= 15 ?"you are in group A" :number >=7 ? "you are in group B" : "you are in group C"; 