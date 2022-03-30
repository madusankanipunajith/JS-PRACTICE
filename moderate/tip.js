var bills = [1230, 982, 1640];
var tips = [];
var finalAmounts = [];

const tipCalculator = (bill) =>{
    let tip = 0;

    if (bill < 1000) {
        tip = Number(bill*0.2);    
    }else if(bill >= 1000 && bill <= 1500){
        tip = Number(bill*0.15);
    }else{
        tip = Number(bill*0.1);
    }

    return tip.toFixed(2);
}

bills.map((bill)=>{
    tips.push(tipCalculator(bill));
    finalAmounts.push((Number(tipCalculator(bill)) + Number(bill)).toFixed(2));
})

console.log("Tips : "+tips);
console.log("Final amounts : "+finalAmounts);


