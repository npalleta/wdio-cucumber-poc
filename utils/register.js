var Functions = require('../utils/functions')

class Register {

    constructor() {
        this.title = 'My Register';
    }

    getCnpj() {
        var aux = this.getRandom() * 5 + this.getRandom() * 4 + this.getRandom() * 3 + this.getRandom() * 2 + this.getRandom() * 9 + this.getRandom() * 8 + this.getRandom() * 7 + this.getRandom() * 6 + 0 * 5 + 0 * 4 + 0 * 3 + 1 * 2;
        aux = mod(aux, 11);
        var d1 = aux < 2 ? 0 : 11 - aux;
        //
        aux = this.getRandom() * 6 + this.getRandom() * 5 + this.getRandom() * 4 + this.getRandom() * 3 + this.getRandom() * 2 + this.getRandom() * 9 + this.getRandom() * 8 + this.getRandom() * 7 + 0 * 6 + 0 * 5 + 0 * 4 + 1 * 3 + d1 * 2;
        aux = mod(aux, 11);
        var d2 = aux < 2 ? 0 : 11 - aux;
        //
        return "" + Functions.addLeadingZeros(getRandomLimitedHundred(0, 99), 2) + "." + Functions.addLeadingZeros(getRandomLimitedHundred(0, 999), 3) + "." + Functions.addLeadingZeros(getRandomLimitedHundred(0, 999), 3) + "/" + 0 + 0 + 0 + 1 + "-" + d1 + d2;
    }

    getCpf() {
        //
        var aux = Functions.getRandom() * 10 + Functions.getRandom() * 9 + Functions.getRandom() * 8 + Functions.getRandom() * 7 + Functions.getRandom() * 6 + Functions.getRandom() * 5 + Functions.getRandom() * 4 + Functions.getRandom() * 3 + Functions.getRandom() * 2;
        aux = Functions.getModRound(aux, 11);
        var d1 = aux < 2 ? 0 : 11 - aux;
        //       
        aux = Functions.getRandom() * 11 + Functions.getRandom() * 10 + Functions.getRandom() * 9 + Functions.getRandom() * 8 + Functions.getRandom() * 7 + Functions.getRandom() * 6 + Functions.getRandom() * 5 + Functions.getRandom() * 4 + Functions.getRandom() * 3 + d1 * 2;
        aux = Functions.getModRound(aux, 11);
        var d2 = aux < 2 ? 0 : 11 - aux;
        //
        return "" + Functions.addLeadingZeros(Functions.getRandomLimitedHundred(0, 999), 3) + Functions.addLeadingZeros(Functions.getRandomLimitedHundred(0, 999), 3) + Functions.addLeadingZeros(Functions.getRandomLimitedHundred(0, 999), 3) + d1 + d2;
    }
}

module.exports = new Register();