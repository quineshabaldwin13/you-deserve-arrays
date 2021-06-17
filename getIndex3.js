const prompt = require('prompt-sync')({ sigint: true });

let inputArray = [ ];
let size = prompt( '4');

for(let i=0; i<size; i++) {
    inputArray[i] = prompt('Enter Element ' + (i+1));
}
let arr_size = inputArray.length;
if(arr_size>=4)
console.log(inputArray[3]);
else
console.log(inputArray[inputArray.length - 1]);
