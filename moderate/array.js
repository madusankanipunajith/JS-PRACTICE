var students = ["Madusanka", "Kasun", "Nimal", "Ruwan", "Piyal"];
var marks = new Array(10,20,30,40,50);

console.log(students);
console.log(students.length);
console.log(marks[3] + 10);

students[5] = "Namudara";
marks[marks.length] = 100;

console.log(students);
console.log(marks);

marks.pop();
console.log(marks);

marks.push(200);
console.log(marks);

students.shift();
console.log(students);
console.log(marks.indexOf(40));



