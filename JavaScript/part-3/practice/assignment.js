//Qs1
let arr=[7,9,0,-2];
let n=3;
let ans=arr.slice(0,n);
console.log(ans);

//Qs2
let num=arr.splice(1,n);
console.log(num);

//Qs3
let str=prompt("please enter a string");
if(str.length==0){
    console.log("string is empty");
}
else{
    console.log("string is not empty");
}

//Qs4
let clg="ApNaCoLlegE";
let idx=3;
if(clg[idx]==clg[idx].toLowerCase()){
    console.log("character is lowercase");
}
else{
    console.log("character is not lowercase")
}


//Qs5
let string=prompt("please enter a string");
console.log(`original string=${string}`);
console.log(`string without spaces=${string.trim()}`)

//Qs6
let array=["hello",'a',23,64,99,-6];
let item=64;
if(arr.indexOf(item)!=-1){
    console.log("element exists in array");
}
else{
    console.log("element exists in array");
}