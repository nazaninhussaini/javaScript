//general selector 
const myHtmlBody = document.body;
const myDiv = document.createElement("div");
myHtmlBody.append(myDiv);
//ID selector 
const idSelect = document.getElementById("a");
myHtmlBody.append(idSelect);
//class Name selector
const classNameSelect = document.getElementsByClassName ("naz");
myHtmlBody.append(classNameSelect);
//query selector
const qureySelect = document.querySelector("h1");
myDiv.append(qureySelect)
//creat Element with javaScript
const h2 = document.createElement ("h2")
h2.textContent = "HI Iam Nazanin Hussaini";
myDiv.append(h2);
//Add class with querySelectorAll
const idBox = document.getElementById("p");
const querySelect = document.querySelectorAll("section");
querySelect[1].setAttribute("class","f")
//loop eith for 
const loop = document.getElementsByClassName("one");
for (let i= 0 ; i< loop.length; i++){
    loop[i].classList.add("f");
}
//loop with foreach 
const loop1 = document.querySelectorAll(".one");
loop1.forEach(loop1=>{
    loop1.classList.add("g")
});
//loop with foreach
const loopH3 = document.getElementById("h");
const loop2 = document.querySelectorAll(".nazi");
loop2.forEach(loop2=>{
    querySelect.appendloop2;
})


