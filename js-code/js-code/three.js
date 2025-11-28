const listofMashin = [];
listofMashin.push("prado");
listofMashin.push("ILaxs");
listofMashin.push("2000");
listofMashin.push("BMW");
listofMashin.push("Futenar");
listofMashin.push("Licsess");


const zarb =[];
zarb.push(27);
zarb.push(40);
zarb.push(15);
zarb.push(26);
zarb.push(39);
zarb.push(88);
let total =1;
for(let i=0; i< zarb.length ; i++){
    total *= zarb [i];
    console.log(total);
}
const letters =[];
let words = "خانه";
let reversWord = "";
for(let n = 0 ; n<words.length ; n++){
    letters.push(words[n]);
}
for(let n = 0; n<words.length ; n++){
    reversWord += letters.pop();
}
if(words === reversWord){
    console.log(words+ " "+"این لغت درست است" +" ")
}
else{
    console.log(words+" "+"این لغت درست نمی باشد" +" ")
}