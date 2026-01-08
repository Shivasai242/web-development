let greet="hello";//global scope

function changeGreet(){ //function scope
  let greet="namasthe";
  console.log(greet);
      

function innerGreet(){  //lexical scope
  console.log(greet);
}
}

console.log(greet);
changeGreet();




  


