// try catch keyword in error handling

// try => Let you test a block of code for errors
// catch => Let you handle the error
// throw => Let you create a custom errors
// finally => Let you execute the code regardless of the result

// function declaration
function findLargest(a,b,c) {
    try {
        if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
            throw "Error : Enter only numbers";
        }else if (a==b || a==c || b==c) {
            throw "Error : Enter different numbers";
        } else {
            // only check one condition when finding the largest value for the testing purposes
            if (a > b && b > c) {
                console.log("a is the largest number");
            }else if (b > a & a > c) {
                console.log("b is the largest nymber");
            } else if (c > a && a > b){
                console.log("c is the largest number");
            }else{
                console.log("Invalid inputs");
            }
        }
    } catch (error) {
        console.log(error);
    }finally{
        console.log("Good Bye...");
    }
}

findLargest(10,20,20);
