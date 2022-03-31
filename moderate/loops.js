// for loops
for (let index = 0; index <= 10; index++) {
    console.log("1 : "+index);
}

for (let index = 10; index >= 0; index--){
    console.log("2 : "+index);
}

var students = ["Nimal", "Kamal", "Dasun", "John"];
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log(element);
}

// for/in loops => Loops through the properties of the object
var person ={
    firstName: "Chamara",
    lastName: "Silva",
    age: 25
};

for (const i in person) {
    if (Object.hasOwnProperty.call(person, i)) {
        const element = person[i];
        console.log(element);
    }
}

// for/of loops => Loops over the data structures such as arrays, strings and etc
var fullName = "Madusanka Nipunajith";
for (const i of fullName) {
    console.log(i);
}
for (const iterator of students) {
    console.log(iterator);
}

// while loops
var marks = [33,44,55,66,77,88,99,100];
let k = 0;
while (k < marks.length) {
    console.log(marks[k]);
    k++;
}

// do-while loops
let l = 10;
do {
    console.log(l);
    l--;
} while (l>=1);

