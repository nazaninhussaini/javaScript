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


