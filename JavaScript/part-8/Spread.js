//spread with Array literals
let arr=[1,2,3,4,5];
let newArr=[...arr];

let chars=[..."hello"];

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];

let nums=[...odd,...even];

//spread with object literals
const data={
    email:"shivasaigoudbairi@gmail.com",
    password:"abcd",

};

const dataCopy={...data,id:123,country:"india"}



let obj1={...arr};//obj -> key:value

let obj2={..."hello"};



