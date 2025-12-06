const number = [1,2,3,4,5,7,5,8];
const result= number.map((item)=>{
    return item+2
})
number.forEach((item)=>{
    item+1;
})
const alphba =["a","b","c","a","b","d","e"];
const natija =alphba.sort((a,b)=>{
    return b.localeCompare(a)
})
alphba.findIndex((item)=>{
    console.log(item);
})
const alpha =alphba.findLastIndex((item)=>{
    return item;
})