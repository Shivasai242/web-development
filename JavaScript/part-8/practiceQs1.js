//Qs1
let nums=[10,20,37];

let ans=nums.every((el)=>el%10==0);

console.log(ans);


//Qs2
function getMin(arr){

let min=arr.reduce((min,el)=>{
    if(min<el){
        return min;
    }
    else{
        return el;
    }
});

return min;

}

let arr=[2,5,7,8,1];