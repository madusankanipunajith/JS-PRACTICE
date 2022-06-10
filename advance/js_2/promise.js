var exec1 = () =>{
    setTimeout(() => {
        console.log("This is execution one happend after 3 seconds");
    }, 3000);
}

var exec2 = () =>{
    setTimeout(() => {
        console.log("This is execution two happend after 5 seconds");
        return new Promise((resolve, reject)=>{
            var error = false;

            if (!error) {
                resolve();    
            }else{
                reject('something went wrong');
            }
        })
    }, 5000);
}

exec2().then(()=>{
    exec1();
}).catch((error)=>{
    console.log(error);
})
