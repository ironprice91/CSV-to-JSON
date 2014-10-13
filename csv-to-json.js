var fs = require('fs');


var sourceFileName = process.argv[2];
var inputContent = fs.readFileSync(sourceFileName, 'utf-8');

var array = [];
var keys = [];
var content = array.push(inputContent);

var arrayValues = array.toString().split('\n');
var values = arrayValues.slice(1);
keys.push(arrayValues[0]);
var key = keys.toString().split(',');

console.log('values: ', values);
console.log('--------');


for(var i = 0; i < values.length; i++){
	console.log(values[i]);
}
console.log('--------');
var value = values.toString().split(',');

var name = [];
// names
for(var i = 0; i < value.length; i = i+3){
	name.push(value[i]);
}

var age = [];
// age
for(var e = 1; e < value.length; e = e+3){
	age.push(value[e]);
}

var city = [];
// city
for(var o = 2; o < value.length; o = o+3){
	city.push(value[o]);
}

console.log('keys: ', key);
console.log('name: ', name);
console.log('age: ', age);
console.log('city: ', city);

console.log('--------');
// use map
console.log(inputContent);