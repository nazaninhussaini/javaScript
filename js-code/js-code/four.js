//array in metoud slice
const listmyFrends= ["Masoda","Rayhan","Yasamin","Mobarka","Nastarn"]
console.log( listmyFrends.slice(1,2));
const classFrend =listmyFrends.slice(1,3)
//array in metoud find
const myFrend = listmyFrends.find((myFrend)=>{
    return myFrend=== "rayhan"
})
//array in metod find
const result =listmyFrends.find((myFrend)=>{
    return myFrend.includes("k");
})
//metohd array filter  
const filter = listmyFrends.filter((name)=>{
    return name.includes("a")
})