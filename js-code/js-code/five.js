//metodth map 
const number = [1,2,3,4,5,7,5,8];
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
    return b.localeCompare(a)
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