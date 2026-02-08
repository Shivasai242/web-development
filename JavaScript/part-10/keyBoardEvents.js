let inp=document.querySelector("input");

inp.addEventListener("keydown",function(event){
    //console.log("key =",event.key);
    // console.log("key was pressed");
    console.log("code =",event.code); //ArrowUp,ArrowDown,ArrowLeft,ArrowRight
    if(event.code=="Arrowup"){
        console.log("character moves forward");
    }
    else if(event.code=="ArrowDown"){
        console.log("character moves backward");
    }
    else if(event.code=="ArrowLeft"){
        console.log("character moves left");
    }
    else if(event.code=="ArrowRight"){
        console.log("character moves right");
    }
});


// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// });