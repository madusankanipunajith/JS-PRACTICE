# About Java Script language

## Variables

### Varible data types in JS
We can fine 6 types of variable data types in JS. They are,
- number
```js
var myVar = 123
```
- string
```js
var varName = 'Madusanka'
```
- object
```js
var varName = {}
```
- boolean
```js
var myVar = true
```
- null
```js
var myVar = null
```
- undefined
```js
var myVar;
```

```js
console.log(typeof varName);
```

Futhermore, In JS variables' data types can be mutable. which means, if there is a variable with number it can be easily change into string type.(if it is not with **const** type)

```js
var myVar = 123;
console.log(typeof myVar);
myVar = 'Madusanka';
console.log(typeof myVar);

```
When we are naming a variable, we can't use predifined syntaxes of JS as follows.
- var
- catch
- if and etc

### Local and Global variables in JS.
When we consider about the visibility of the JS variables, there are 2 types called local scope and global scope.
```js
var name = 'Madusanka-Global';
function init() {
    var name = 'Madusanka-Local';
    console.log (name);
}
console.log(name); // global
init(); // local

```
### Variable types in JS
There are mainly 3 types when it comes to the JS variable types. They are,
- let [with ES6] => same as var but can't use same variable name in the same scope. Also we can't initialize before define. 

```js
    let name = 'Madusanka';
    let name = 'Nipunajith'; // this is wrong

    const init = () => {
        let name = 'Nipunajith'; // this is correct since it is in another scope
    }

    {
       let name = 'Nipunajith'; // this is correct since it is in another scope 
    }
```
- var => can be mutable and can use same variable name twice in the same scope. We can initialize a var type variable before we define.

```js
    var name = 'Madusanka';
    var name = 'Nipunajith'; // this is correct
```
- const [with ES6] => can't be mutable (constant value)
```js
    const name = 'Madusanka';
    name = 'Nipunajith' // this is wrong

    const items = [1, 2, 3];
    item[0] = 12;
    console.log(items) // can change properties but can't reassign.

    const item = {name: 'Madusanka', age: 21};
    item[0] = 12;
    console.log(item) // 0: 12, name: 'Madusanka', age: 21 
```

## Operators in JS
- Arithmatic + - * % /
- Incremental ++ --
- Comparison == > <= >= < !=
- Logical && || !
- Assignment =
- Turnary ?:

```js
let value = 2 + 3;
let x = 2;
console.log(value); // 5
console.log(x++); // 5
console.log(x); // 6
console.log(x == value); // false
console.log (x > value); // false
console.log(true && false) // false
console.log(value && x) // 2
console.log(0 && 10) // 0
console.log(10 || 12) // 10
console.log(0 || 12) // 12
console.log(!true) // false
console.log(!value) // false
```
```js
// assume variables have been defined as above example
if (value && age){
    console.log('OK');
}else{
    console.log('NO');
}

output : OK
```
```js
let sample = (value && age) ? "X" : "C"; // condtion ? if true : else
console.log(sample) // X
```
## if-else && if-else if-else in JS
```js
let age = 22;
// if statement considers as true if the passed value of variable is not an undefine,null or 0 value
if (age > 25) {
    console.log('Age is greater than 25');
}else{
    console.log('Age is less than or equal to 25');
}

let name = 'Madusanka';
if (name) {
    console.log('True');
}else{
    console.log('False');
}
```
## switch in JS
It is somewhat similar to the if else conditions but advance.
**break** keyword is very imporatant here.
you can use {} as well.
```js
let vehicle = 'car'; 
switch(vehicle){
    case 'car' :
        console.log('car side'); // implementation
        break;
    case 'van':
        console.log('van side');
        break;
    case 'ship':
    case 'boat':
        console.log('Multiple values'); // important part in switch case   
        break;     
    default:
        console.log('default'); // since default keyword is in the last stage we don't need to add default keyword
}

// Implementation with blocks
switch(vehicle){
    case 'car': {
        let name = 'Madusanka';
        console.log('car side'+ name); // implementation
        break;
    }
    case 'van':{
        let name = 'Nipunajith';
        console.log('van side'+ name);
        break;
    }
    case 'ship':
    case 'boat':{
        console.log('Multiple values'); // important part in switch case   
        break;  
    }

    default:{
        console.log('default'); // since default keyword is in the last stage we don't need to add default keyword
    }
}
```
## Loops in JS
- while loop
- do while loop
- for loop
```js
let i = 0;
let arr = [1,2,3,5,6,7,8,9,0];
// while loop
while (i < 10) {
    console.log(i);
    i++; // i = i+1
}

while (i < arr.length){
    console.log(arr[i]);
    i++;
}

// do-while loop
do {
    console.log(i);
    i++;
}while(i < 10);

// for loop
for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
}
for(let i=0; i < arr.length; i+=2){
    console.log(arr[i]);
}
for(let i=0; i < arr.length; i++){
    if (i == 4){
        break; // terminate the loop eventually while executing the loop.
        // continue; 
    }
    console.log(arr[i]);
}
```
Let's see how to handle nested loops using labels
```js
iloop:
for(var i = 0; i < 10; i++){
    console.log('Outer loop')
    jloop:
    for(var j=0; j < 10; j++){
        console.log('Inner loop')
        if (i == 8){
            break iloop;
        }
        if(j == 9){
            break jloop;
        }
        if(i == 2){
            continue iloop;
        }
    }
}
```
Let's see how to handle object using loops
```js
let myObj = {
    name : 'Madusanka',
    age : 22,
    address : 'Gampaha'
};
for(var i in myObj){
    console.log(i); // name age address 
    console.log(myObj[i]); // Madusanka 22 Gampaha
}
```
## Functions in JS
Let's discuss about regular functions
```js
function calcAge(age){
    console.log('Age is '+age);
}

function getName(){
    return 'Madusanka';
}

// function as a parameter
function calcWidth(func){
    func(); 
}

function myFunc(){
    console.log('This is my function');
}

calcAge(25); // calling the function
console.log(getName());
calcWidth(myFunc);
```
Let's discuss about callback functions
When it comes to the Js, callbacks functions are very useful and important. Basically, it is an implementation of a function inside another function. you can get an idea by looking at following examples.
```js
console.log('init');
const doSomething = (number, callback) =>{
    console.log('Internal process of the function '+number);
    callback(); // after doing the internal process callback function will be executed
}
doSomething(12, ()=>{
    console.log('callback function executes');
});
```
Let's see another example
```js
console.log('init');

function doSomething(number, success, error){
    console.log('interal process of do something...');
    if(number % 2 == 0){
        setTimeout(()=>{
            console.log('Timed out');
            success();
        },2000);
    }else{
        error();
    }
}
doSomething(12, function(){
    console.log('success');
}, function(){
    console.log('error');
});

console.log('end');
```
Another version of above code section.
```js
console.log('init');

function doSomething(number, success, error){
    console.log('interal process of do something...');
    if(number % 2 == 0){
        setTimeout(success,2000);
    }else{
        setTimeout(error,2000);
    }
}
doSomething(12, function(){
    console.log('success');
}, function(){
    console.log('error');
});

console.log('end');
```
This is another interesting example using callbacks
```js
const doSomething = (number, success, error) =>{
    if(number % 2 === 0){
        setTimeout(()=>{
          success("Madusanka Nipunajith");
        },4000);
    }else{
      error("something went wrong");
    }
}

doSomething(12, (result)=>{
    console.log(result);
},(error)=>{
  console.log(error);
})
```
But there is some issue in this callback operation called callback-hell. to avoid this we have to use async await methods

## Promises and async-await in JS

**promise**
promises are used to handle future results. If we are waiting for a future result from an execution we can use promises. Furthermore, there are 2 main callback functions in the promise called resolve and reject. resolve callback is used to resolve the promise with a value or the result of the another promise. reject is used to reject the promise with a provided reason or error. resolve (success) and reject (error)
promises has 3 states. They are pending, success, reject.
Please refer following example.
```js
const value = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //exec
        resolve("result"); // reject("something went wrong");
    },4000); 
})

value.then((response)=>{
        console.log(respone);
    }).catch((error)=>{
        console.log(error);
});
```
This is another advance example using promises
```js
const execApi = (data) => {
    return new Promise((resolve, reject)=>{
        if (data === "X"){
            setTimeout(()=>{
                reject("something went wrong");
            },4000);
        }else{
            setTimeout(()=>{
                resolve("This is a response");
            },4000);
        }
    });
}

execApi("X").then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
});

// chain of multiple then
execApi("X").then((response)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("This is the 2nd response");
        },4000);
    })
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('done');
});
```
**Async-Await**

By using async-await pair we can get the output outside from the promise. when you look at the above scenarios, we only have done is executing the output recieved inside the function. while you are using this async-await pair try-catch pair is also more important. if you want to handle reject capability you need to add try-catch pair as follows. 
```js
async function doSomething() {
    try{
        const value = await execApi("X");
        console.log(value); // resolve 
    }catch(error){
        console.log(error); // reject
    }
}
```
**Imidiately Invoke Functions(IIF)**

You can run the function imediately if you use IIF.
```js
(()=>{
    console.log('IIF is executed');
})();

(async () =>{
    try{
        const value = await execApi("X");
        console.log(value); // resolve 
    }catch(error){
        console.log(error); // reject
    }
})();
```
