// local scope
const addNum = () =>{
    var a = 10;
    var b = 20;
    console.log(a+b);
}
addNum();

// global scope
var subject = "Maths";
const mySub = () =>{
    console.log("Favourite subject is "+subject);
    subject = "Science";
}
mySub();
console.log(subject);

