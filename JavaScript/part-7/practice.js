//praticeQs1
const square=(n)=>n*n;

console.log(square(4));








//practiceQs2
let id=setInterval(()=>{
    console.log("Hello World");
},2000);


setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran");
},10000);



