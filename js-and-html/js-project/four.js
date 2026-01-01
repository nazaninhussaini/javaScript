const div = document.querySelectorAll("div");
const firstDiv = div[0];
const newDiv = document.createElement("div");
newDiv.classList.add("newBox");
newDiv.style.height = "250px";
newDiv.style.width = "250px";
newDiv.style.border = "2px solid black";
newDiv.style.borderRadius = "8px";
newDiv.style.backgroundColor = "yellow";
firstDiv.appendChild(newDiv);
firstDiv.firstElementChild.after(newDiv);
//div.forEach((div,index)=>{
 //   if(index === 2 || index === 3){
   //     div.remove()
    //}
//})
