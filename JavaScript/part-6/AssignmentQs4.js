let str="shivasai";
function countVowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(
            
            str.charAt(i)=="a" ||
            str.charAt(i)=="e" ||
            str.charAt(i)=="i" ||
            str.charAt(i)=="o" ||
            str.charAt(i)=="u" 
            
        )   {
            count++;
        }
    }
    return count;
}




  


