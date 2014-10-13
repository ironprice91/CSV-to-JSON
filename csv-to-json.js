var fs = require('fs');


var sourceFileName = process.argv[2];
var inputContent = fs.readFileSync(sourceFileName, 'utf-8');

var array = [];
var keys = [];
var content = array.push(inputContent);

var arrayValues = array.toString().split('\n');
var values = arrayValues.slice(1);
keys.push(arrayValues[0]);
console.log(keys);
console.log(values);



console.log('--------');
console.log(inputContent);
