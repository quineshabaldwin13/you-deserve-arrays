const prompt = require('prompt-sync')({ sigint: true });

let inputArray = [ ];
let size = prompt('3');

for (let i = 0; i < size; i++) {
    inputArray[i] = prompt('Enter Element ' + (i + 1));
}

if (typeof inputArray[3] === "string") {
    console.log(inputArray[3]);
    console.log(+" is string" + " " + inputArray[3].substr(1, 1));
} else {
    console.log(onputArray[3] + " is not a string");
}