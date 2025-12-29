//logical operators

//logical AND
let marks=35;
if(marks>=33 && marks>=80){
    console.log("pass");
    console.log("A+");
}


//logical OR
if(marks>=33 || marks>=80){
    console.log("pass");
    console.log("A+");
}


//logical Not
if(!marks>=33){
    console.log("pass");
    console.log("A+");
}

if((marks>33 && marks<=80) || !false){
    console.log("pass"); //pass
}

