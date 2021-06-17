const prompt = require('prompt-sync')({ sigint: true });

let inputArray = [ ] ;
let size = prompt('10');

for(let i=0; i<size; i++) {
    inputArray[i] = prompt('Enter Element ' + (i+1));
}
let arr_size = inputArray.length;
if(arr_size>=10)
console.log("Array size is atleast 10 or not" + true);
else
console.log("Array sizeis atleasr 10 or not" + false);