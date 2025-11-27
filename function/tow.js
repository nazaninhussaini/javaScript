const sum = (a,b,c)=> a+b+c;
console.log (sum(8,6,5));
//functin declaretion
function greating (name="nazanin"){
    console.log(`Hi my best frind ${name}`);
}
greating("masoda");
//function expriation 
const ahwalpursy = (Name="Nazanin",lastName="Hussaini",gender="female") =>{
    console.log(`Hi dear ${Name} ${lastName} you are ${gender}`);
}
ahwalpursy ("Masoda","Yawari");
//spread opreator
const divaid =(...a)=>{
    let total = 0;
    for(let i=0; i<a.length; i++){
        total =total+a[i];
    }
    console.log(total);
}
divaid (1,5,9,3,5,7,1,0);