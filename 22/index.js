'use strict';

const fs = require('fs');
const Score = require('./score');

fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) throw err;

    data = data.replace(/"/g, '').toUpperCase().split(',').sort();

    let score = new Score(data);
    let scoreList = data.map(name => score.getScore(name));
    let total = scoreList.reduce((prev, curr) => prev + curr);
    console.log(`Names Scores Total: ${total}`);
});