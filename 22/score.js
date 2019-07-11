'use strict';

class Score {

    constructor(names) {

        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let lookup = new Map();

        alphabet.forEach(letter => lookup.set(letter, alphabet.indexOf(letter) + 1));

        this.names = names;
        this.lookup = lookup;
    }

    getScore(name) {
        let namePosition = this.names.indexOf(name) + 1;
        let nameAsInts = name.split('').map(letter => this.lookup.get(letter));
        let score = nameAsInts.reduce((prev, curr) => prev + curr);
        let total = score * namePosition;
        if(name === 'COLIN') { console.log(`Sanity Check: ${name} => ${total}`); }
        return total;
    }
}

module.exports = Score;