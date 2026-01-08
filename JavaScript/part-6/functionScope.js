let sum=54;  //global scope
function calSum(a,b){
  let sum=a+b;//function scope
  console.log(sum);
}
calSum(1,2);
console.log(sum);


  


