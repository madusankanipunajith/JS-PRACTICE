var picnic = {
    
    bills: [1230, 982, 1640, 1460, 944],
    tips: [],
    totals: [],
    calculateTip: function (cost) {
        switch (cost) {
            case (cost < 1000):
                return cost * 0.2;

            case (cost >= 1000 && cost <= 1500):
                return cost * 0.15;

            default:
                return cost * 0.1;
        }
    },
    executeBills: (bill, tips, totals, calculateTip) => {
        try {
            bill.forEach(element => {
                tips.push(calculateTip(element));
                totals.push(element + calculateTip(element));
            });
        } catch (error) {
            console.log(error);
        }

    },
    executeBills2: () => {
        try {
           for (let i = 0; i < this.bills.length; i++) {
                const element = this.bills[i];
                this.tips.push(this.calculateTip(element));
                this.totals.push(element + this.calculateTip(element));
           }
        } catch (error) {
            console.log(error);
        }
    }
}

//picnic.executeBills(picnic.bills, picnic.tips, picnic.totals, picnic.calculateTip);
picnic.executeBills2();

console.log(picnic.bills);
console.log(picnic.tips);
console.log(picnic.totals);