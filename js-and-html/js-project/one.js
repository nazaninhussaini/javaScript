const myDiv = document.querySelector("div.one");
const button = document.querySelector("button");
const image = document.createElement("img");
image.setAttribute("src","../img/c4.jpeg");
image.setAttribute("alt","Please Chek your network");
image.classList.add("image");

const button1 = document.createElement("button")
button1.textContent = "Remov Boutton"; 
const h1 = document.createElement("h1");
h1.textContent = "کود نویسی ویبسایت  ";
const p = document.createElement("p");
p.textContent = "کود نویسی یک از مهم ترین بخش ها یا رشته های بزرگ ومهم جهان است در دنیا امروزی که همه چیز با تکنالوژی مدیریت میشود کود نویسی نقش مهم را ایفا میکند از برنامه های گوشی گرفته تا ساخت بهترین ربات ها همه از برکت کود نویسی است کود نویسی شاخه های زیادی دارد. زبان های زیادی در جهان وجود دارد برای ساختن و نوشتن کود. من درحال خواندن زبان جاوااسکریپت استم که یکی از پر کار برد ترین زبان های برنامه نویسی است.   "
myDiv.append(image , h1 , p , button1 );

button.addEventListener("click", ()=>{
    myDiv.classList.add("show");
    button.style.display = "none"
})

button1.addEventListener("click" , ()=>{
    myDiv.classList.remove("show");
    button.style.display = "block"
})