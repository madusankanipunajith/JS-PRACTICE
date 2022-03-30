var sriLanka = [250,277,300];
var england = [185,244,360];

// function expression
const average = (x) =>{
    var sum = 0;
    if (x.length > 0) {
        x.forEach(e => {
            sum = sum + Number(e);  
        });

        return sum/x.length;
    }else{
        console.log("Array is required");
        return 0;
    }
}

//function declaration 
function printAverage(sri, eng) {
    const slAverage = average(sri);
    const engAverage = average(eng);

    console.log("Sl average : "+slAverage.toFixed(2));
    console.log("Eng average : "+engAverage.toFixed(2));

    if (slAverage > engAverage) {
        console.log("SL wins");
    }else{
        console.log("Eng wins");
    }
}

printAverage(sriLanka,england);