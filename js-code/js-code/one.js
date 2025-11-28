function greatin(name, lastName, gender){
    switch (gender){
        case "male":
            return " سلام اسم شما"+name+" وتخلص شما" + lastName +"وشما اقا هستید ";
            break;
        default:
            return "سلام اسم شما"+name+"وتخلص شما"+lastName +"وشما خانم هستید";
            break; 
    }
}
const male = greatin("Ali Behzad" , "Hussaini", "male")
const female = greatin("Nazanin","Rasa" ,"female");


const name = "Nazanin";
const lastName = "Hussaini";
const eage = 18;
const result = `You are ${name} ${lastName} and you are ${eage} years old`;



const score = 50;
const natjha = score >40 ? "You passed": "You faild";
const number =70;
const natija = number > 70 ? "You passed": "You faild";