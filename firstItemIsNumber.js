const prompt = require('prompt-sync')({ sigint: true });

let inputArray = [ ];
let size = prompt('2');

for (let i=0; i < size; i++) {
    inputArray[i] = prompt('Enter Element ' + (i + 1));
}
if (isNaN(inputArray[0])) {
    console.log( true);
} else {
    console.log(false);
}