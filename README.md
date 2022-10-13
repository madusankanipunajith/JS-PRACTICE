# About Java Script language

## Variables

### Varible data types in JS
We can fine 6 types of variable data types in JS. They are,
- number
```
var myVar = 123
```
- string
```
var varName = 'Madusanka'
```
- object
```
var varName = {}
```
- boolean
```
var myVar = true
```
- null
```
var myVar = null
```
- undefined
```
var myVar;
```

```
console.log(typeof varName);
```

Futhermore, In JS variables' data types can be mutable. which means, if there is a variable with number it can be easily change into string type.(if it is not with **const** type)

```
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
```
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

```
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

```
    var name = 'Madusanka';
    var name = 'Nipunajith'; // this is correct
```
- const [with ES6] => can't be mutable (constant value)
```
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
```
let value = 2 + 3;
let x = 2;
console.log(value); // 5
console.log(x++); // 5
console.log(x); // 6
console.log(x == value); // false
console.log (x > value); // false
```



