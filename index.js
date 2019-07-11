'use strict';

let grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let memo = { '1': {} };

for(let x = 0; x < grid.length; x++) {
    for(let y = 0; y < grid[x].length; y++) {
        console.log(grid[x][y]);
        
    }
}