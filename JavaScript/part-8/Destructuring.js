//destructuring with array
let names=["tony","bruce","peter","steve"];
// let winner=names[0];
// let runnerup=names[1];
// let secondrunnerup=names[2];


let[winner,runnerup, ...others]=names;




//destructuring with objects
const student={
    name:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username:"karan123",
    password:"abcd"
};


let { username:user,password:secret,city:place="mumbai" } =student;

