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


// Bitwise operators (not recently used but should know) : & | ~ ^ >> <<
console.log(5 & 1); // AND
console.log(5 | 1); // OR
console.log(~5); // NOT
console.log(5 ^ 1); // XOR 1 1 -> 0 , 0 1 -> 1
console.log(5 << 1); // Zero fill left shift => 0101 -> 1010
console.log(5 >> 1); // Signed right shift => 0101 -> 0010
console.log(5 >>> 1); // Zero fill right shift => 0101 -> 0010

console.log((10).toString(2)); // 10 to binary
console.log((0b1010).toString(10)); // binary to decimal
console.log(parseInt("1010", 2));
