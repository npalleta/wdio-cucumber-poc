class Functions {

    constructor() {
        this.title = 'My Functions';
    }

    getRandom() { 
        return Math.round(Math.random() * 9);
    }

    getRandomLimitedHundred(min, max) {
        return Math.round(Math.random() * 999); 
    }

    getModRound(a, b) {
        return Math.round(a - (Math.floor(a / b) * b));
    }

    addLeadingZeros(num, len) {
        var str = '' + num;
        while (str.length < len) {
            str = '0' + str;
        }
        return str;
    }      
}

module.exports = new Functions();