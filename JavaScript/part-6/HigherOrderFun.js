function multipleGreet(func,count){ //higher orderfunction
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet=function(){
    console.log("hello")
}
multipleGreet(greet,100);





  


