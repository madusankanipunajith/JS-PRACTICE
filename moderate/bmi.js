var kasun = {
    name: "Kasun Fernando",
    mass: 50,
    height: 1.58
};

var chamal = {
    name: "Chamal Nirmala",
    mass: 55,
    height: 1.60
};

const calculateBMI = (mass, height) =>{
    let bmi = Number(mass/height**2);
    return bmi; 
}

const addBMI = (a,b) => {
    a["bmi"] = calculateBMI(a.mass,a.height).toFixed(2);
    b["bmi"] = calculateBMI(b.mass, b.height).toFixed(2);
}

addBMI(kasun, chamal);

console.log(kasun);
console.log(chamal);