const myHtmlBody = document.body;
const myDiv = document.createElement("div");
myHtmlBody.append(myDiv);

const idSelect = document.getElementById("a");
myHtmlBody.append(idSelect);

const classNameSelect = document.getElementsByClassName ("naz");
myHtmlBody.append(classNameSelect);

const qureySelect = document.querySelector("h1");
myHtmlBody.append(qureySelect)

const h2 = document.createElement ("h2")
h2.textContent = "HI Iam Nazanin Hussaini";
myDiv.append(h2);

// const idBox = document.getElementById("p");
// const querySelector = document.querySelectorAll("section");
// querySelector[1].setAttribute("class","f");
//به ایرور سر خوردیم 

const loop = document.querySelectorAll("#d");
while(i<loop){
    loop[i].setAttribute("class","c");
    i++;
} 