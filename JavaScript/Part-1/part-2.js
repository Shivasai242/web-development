//Qs1
let num=20;
if(num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

//Qs2
//let name=prompt("please enter your name :");
//let age=prompt("please enter your age");
//alert(`${name} is ${age} years old`);


//QS3
let quarter=4;
switch(quarter){
    case 1:
        console.log("january,february,march");
        break;
    case 2:
        console.log("april,augest,june");
        break;
    case 3:
        console.log("july,augest,september");
        break;
    case 4:
        console.log("october,november,december");
        break;
    default:
        console.log("NOT A QUARTER!");
        
}


//Qs4
let string="apples";
if((string[0]=="a"|| start[0]=='A')&&(string.length>5)){
    console.log("golden string");
}
else{
        console.log("Not a golden string");

}

//Qs5
let a=5;
let b=18;
let c=13;
if(a>b){
    if(a>c){
        console.log(a, "is largest");
    }
    else{
         console.log(c, "is largest");

    }
}
else{
    if(b>c){        
        console.log(b, "is largest");
    }
    else{
        console.log(c, "is largest");

    }

}

//Qs6
let num1=32;
let num2=47852;
if((num1%10)==(num2%10)){
   console.log("numbers have the same last digit which is",num1%10);
}
else{
   console.log("numbers dont have the same last digit");

}
    
