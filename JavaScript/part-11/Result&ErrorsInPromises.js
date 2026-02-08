// function savetoDb(data, success, failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDb("apna college",()=>{
//     console.log("success : your data was saved");
//     savetoDb("hello world",
//         ()=>{
//         console.log("success2: data2 saved");
//         savetoDb("jeevan",()=>{
//             console.log("success3: data3 saved");
//         },()=>{
//             console.log("failure2 :weak connection");
//          })
//     },()=>{
//         console.log("failure2 :weak connection");
//     })
// },
// ()=>{
//     console.log("failure : weak connection. data was saved");
// });

function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("success : data was saved");
        }
        else{
            reject("failure : weak connection");
        }
        
    })

}


savetoDb("apna college")
.then((result)=>{
    console.log("data1 saved.");
    console.log("result of promise: ", result);
    return savetoDb("helloworld");
    })
.then((result)=>{
    console.log("data2 saved.");
    console.log("result of promise: ", result);
    return savetoDb("jeevan");
})
.then((result)=>{
    console.log("data3 saved.")
    console.log("result of promise: ", result);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("error of promise: ", error);
});


