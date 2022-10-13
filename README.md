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
### Variable types of JS
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

## Operators
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


