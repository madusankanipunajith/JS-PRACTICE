// object literals
var nimal ={
    firstName: "Nimal",
    lastName: "Perera",
    age: 24,
    isMarried: false,
    job: "Developer",
    subjects: ["Java", "C++", "Ballerina", "JS", "Python"],
    degree:{
        name: "Software Engineering",
        duration: "4 Years",
        credits: 120
    },
    projects:[
        {
            name: "Ecommerce App",
            technology: "Flutter",
            version: 1.1
        },
        {
            name: "Music Player",
            technology: "Java",
            version: 1.2
        },
        {
            name: "POS",
            technology: "C#",
            version: 2.0
        }
    ],
    yearOfBirth: function (year) {
        return year - this.age;
    }
}

console.log(nimal);
console.log(nimal.firstName);
console.log(nimal["lastName"]);
var x = "age"
console.log(nimal[x]);
console.log(nimal.subjects);
console.log(nimal.subjects[2]);
console.log(nimal.degree);
console.log(nimal.degree.name);
console.log(nimal.degree["credits"]);
console.log(nimal["degree"].duration);
console.log(nimal.projects);
console.log(nimal.projects[0]);
console.log(nimal.projects[2].technology);
console.log(nimal.yearOfBirth(2022));


// new Object syntax
var kasun = new Object();
// add properties to the object
kasun.firstName = "Kasun";
kasun.lastName = "Fernando";
kasun["age"] = 25;

console.log(kasun);