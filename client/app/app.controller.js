class componentController {
    constructor() {
        const self = this;
        self.answer = '';
        self.answer2 = '';
        self.answer3 = '';
    }

    stringRevert(text) {
        const arr = text.split(' ').reverse();
        for (let i = 0; i < arr.length; i++) {
            this.answer += arr[i] + ' ';
        }
    }

    coinsCounter(amount) {
        const denominations = [1, 2, 5, 10, 20, 50, 100, 200];

        // intialize an array of zeros with indices up to amount
        let waysOfDoingNcents = [];
        for (let i = 0; i <= amount; i++) {
            waysOfDoingNcents[i] = 0;
        }
        // there is 1 way to renturn 0 cents
        waysOfDoingNcents[0] = 1;

        for (let j = 0; j < denominations.length; j++) {
            // we can only start returning change with coins in our denominations
            let coin = denominations[j];

            // we start bottom up, each time reducing change amout with curr coin.
            for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
                let higherAmountRemainder = higherAmount - coin;
                // ways to create change is equivalent to reducing the problem to a known problem
                // and gaining all the ways to solve for smaller problems
                waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
            }
        }

        this.answer2 = waysOfDoingNcents[amount];
    }

    dateRange(date1, date2) {
        const year1 = date1.getFullYear(),
            year2 = date2.getFullYear(),
            month1 = date1.getMonth() + 1,
            month2 = date2.getMonth() + 1;

        let years = year2 - year1;
        if (years > 0) {
            years = years * 12;
        }

        let months = month2 - month1 + years;

        if (months > 1) {
            months = months - 1
        } else {
            months = 0
        }
        debugger;
        this.answer3 = months;
    }
}


export default componentController;