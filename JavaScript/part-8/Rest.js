function sum(...args){ 
    return args.reduce((sum,el)=>sum+el);
}


function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    });
}