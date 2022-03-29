// Create variables
var firstName = 'Chamara';
var lastName = 'Perera';
var age = 26;
var isOk = true;
var job, height;

// Print only variable
console.log(firstName);
// Print the variable with a string
console.log('My name is '+lastName);
// Type Coercion
console.log('My age is '+age);
console.log('It is '+isOk);
console.log('I am a '+job);

// Get variable type
console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(isOk));
console.log(typeof(job));

// Define
job = 'Doctor';
// Variable Mutation
lastName = 'Fernando';
console.log('I am '+lastName+' I am a '+job);

// Dsiplay an alert
alert('My name is '+lastName+'. I am '+age+' years old. And am I ok? '+isOk+'.');

// Get user input
height = prompt('What is your height?');
alert('My height is '+height+' feet.');

// comparison operators : >= > <== < == === !== !== 
var a = 20;
var b = '20';
var c = 5;
var d = 15;

if (a == b) {
    console.log("Only values are equal");
    if (a === b){
        console.log("Both values are types are equal");
    }else if (a !== b) {
        console.log("Only values or types are equal");
    }
}

// Ternary operator : condition ? <expression if true> : <expression if false>
c <= 5 ? console.log("c is less than or equal to 5") : console.log("c is greater than to 5");

// logical operators : && || >> << !
