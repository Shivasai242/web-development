//Qs1
let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Qs2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");


//QS3
let btn=document.querySelector("#btn");
btn.classList.add("btnStyle");


//Qs4
let h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";
document.querySelector("body").append(h1);


//QS5
let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> practice";
document.querySelector("body").append(p);