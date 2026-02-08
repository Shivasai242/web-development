const object={
    message:'Hello world',
    logMessage(){
        console.log(this.message);

    }
};

setTimeout(object.logMessage,1000);



