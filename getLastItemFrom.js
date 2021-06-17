const prompt = require('prompt-sync')({ sigint: true });

let inputArray = [ ];
let size = prompt( '3');

for (let i = 0; i < size; i++) {
    inputArray[i] = prompt('Enter Element ' + (i + 1));
}

console.log(inputArray[inputArray.length - 1 ]);
