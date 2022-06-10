var promise1 = Promise.resolve('Hello world');
var promise2 = 10;
var promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'Good bye...');
})

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

// Async Await

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

async function init() {
    console.log("Hello");
    await exec2();
    console.log("World");
} 

init();