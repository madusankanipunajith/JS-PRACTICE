var empName = "Kasun";
var jobRole = "Doctor";

switch (jobRole.toLowerCase()) {
    case "teacher":
        console.log(empName+" is a Teacher");
        break;

    case "doctor":
        console.log(empName+" is a Doctor");
        break;

    default:
        console.log(empName+" does something else");
        break;
}

var age = 20;
switch (true) {
    case age >= 30:
        console.log("Too old");
        break;

    case age >= 20 && age < 30:
        console.log("Mature");
        break;

    default:
        console.log("Too young");
        break;
}