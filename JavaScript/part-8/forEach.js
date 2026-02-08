//1st method
let  arr=[1,2,3,4,5];
//let print=function(el){
  //  console.log(el);
//};
//arr.forEach(print);



//2nd method
arr.forEach(function(el){
    console.log(el)

    });



    //3rd method
    arr.forEach((el)=>{
    console.log(el)

    });




    let array=[{
        name:"aman",
        marks:95
    }, {
        name:"shradha",
        marks:94.4
    }, {
        name:"rajat",
        marks:92
    }];

    array.forEach((student)=>{
        console.log(student.marks)
    });







