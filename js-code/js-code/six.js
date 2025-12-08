const numbers = [ 1,2,3,4,5,6,7,8,9,10];
const result= numbers.reduce((result,number)=>{
    return result+number
})
const zarb = [ 2,4,6,8,10,12,13,4];
const result_1 = zarb.reduce((result,zarb)=>{
    return result*zarb
})
const myFriend = ["Masoda","rayhan","Masoda","mubareka","Masoda","nastarn","rayhan","mubareka","Masoda"];
const friend = myFriend.reduce((first,friend)=>{
    first[friend] = (first[friend] ||0) + 1;
    return first; 
} ,{})
const jomla = ["Hi","Iam","Nazanin","Iam","student","in","sharifi","programming"];
const natija = jomla.join(" ");
const name = ["Nazanin","Ali Behzad","Ahamd Farid","Mohammad"];
name.shift();
name.unshift("nazi");
name.pop();
name.push("mozghan");

const some_every = name.some((names)=>{
    return names.includes("a")

})
