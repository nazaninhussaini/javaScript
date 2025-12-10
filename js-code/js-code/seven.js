const AboutMe = "   I am Nazanin Hussaini I am student in sarifi programming at caste 1-2 js class     "
const result = AboutMe.trim()

const myName = "    I am Nazanin Hussaini"
const result_1 = myName.trimStart();

const familyName = "I am student in sharifi progeamming     ";
const result_2 = familyName.trimEnd();

const contact = "me family 7 person dad mom 4 brothers 1 sister and me "
const result_3 = contact.replace("4","3");

const contactMe = "I am Nazanin my last name is Rasa I am 18 years old ";
const result_contact = contactMe.replace("Rasa","Hussaini");

const Gaff = "ha";
const result_4 = Gaff.repeat(6);

const meFriend = "masoda Best me friend "
const result_5 = meFriend.substring(0,1) .toUpperCase() +meFriend.substring(1) ;

const spilt_name = "my name is nazanin";
const result_6 = spilt_name.split(" ");

const contact_start = "Hello welcame to javaSraipt classrom "
if(contact_start.startsWith("Hello")){
    console.log("welcome to classrom");
}
else{
    console.log("we don't not allow")
}