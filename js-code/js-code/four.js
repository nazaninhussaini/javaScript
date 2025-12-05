//array in metoud slice
const listmyFrends= ["Masoda","Rayhan","Yasamin","Mobarka","Nastarn"]
console.log( listmyFrends.slice(0,2));
const classFrend =listmyFrends.slice(1,5)
//array in metoud find
const myFrend = listmyFrends.find((myFrend)=>{
    return myFrend=== "Masoda"
})
//array in metod find
const result =listmyFrends.find((myFrend)=>{
    return myFrend.includes("k");
})
//array in metod filter
const filter = listmyFrends.filter((name)=>{
    return name.includes("o")
})