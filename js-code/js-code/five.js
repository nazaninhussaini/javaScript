//metodth map 
const number = [11,22,23,34,45,67,65,88];
const result= number.map((item)=>{
    return item+2
})
//metodth forEach
number.forEach((item)=>{
    item+1;
})
//metodth sort
const alphba =["a","b","c","a","b","d","e"];
const natija =alphba.sort((a,b)=>{
    return a.localeCompare(b)
})
//metodth find index
alphba.findIndex((item)=>{
    console.log(item);
})
//metodth find last index
const alpha =alphba.findLastIndex((item)=>{
    return item;
})
//medthod every 
const none = [12 ,22 ,33,65,85,60,50];
const resultNumber = none.every((item)=>{
    return item%2===0;
})