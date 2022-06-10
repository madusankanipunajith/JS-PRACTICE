var exec1 = () =>{
    setTimeout(() => {
        console.log("This is execution one happend after 3 seconds");
    }, 3000);
}

var exec2 = (callback) =>{
    setTimeout(() => {
        console.log("This is execution two happend after 5 seconds");
        callback();
    }, 5000);
}

exec2(exec1);