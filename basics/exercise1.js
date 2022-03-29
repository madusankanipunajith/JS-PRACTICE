var k_height, k_mass, c_height, c_mass;

const bmi_value = (mass, height) => {
    var bmi = mass / height**2;
    return bmi;
}

const result = (c_bmi, k_bmi) =>{

    console.log("Kasun's BMI : " +k_bmi);
    console.log("Chamal's BMI : " +c_bmi);

    if(c_bmi > k_bmi){
        console.log("Chamal's BMI is greater than Kasun's BMI");
    }else{
        console.log("Kasun's BMI is greater than Chamal's BMI");
    }
}

k_height = 150;
k_mass = 55;
c_height = 160;
c_mass = 60;

result(bmi_value(c_mass,c_height),bmi_value(k_mass,k_height));