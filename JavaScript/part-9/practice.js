//QS1
let para1=document.createElement('p');
para1.innerText="hey I'm red!";
document.querySelector('body').prepend(para1);

para1.classList.add('red');




//QS2
let h3=document.createElement('h3');
h3.innerText="I'm a blue h3!";
document.querySelector('body').prepend(h3);

h3.classList.add('blue');




//QS3
let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");

h1.innerText="I'm in a div";
para2.innerText="Me too";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").prepend(div);

