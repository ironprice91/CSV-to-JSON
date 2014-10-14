var fs = require('fs');


var sourceFileName = process.argv[2];
var destinationFileName = process.argv[3];
var inputContent = fs.readFileSync(sourceFileName, 'utf-8');

var array = [];
var keys = [];
var obj0 = {};
var obj1 = {};
var obj2 = {};
var content = array.push(inputContent);

var arrayValues = array.toString().split('\n');
var values = arrayValues.slice(1);
keys.push(arrayValues[0]);
var key = keys.toString().split(',');

console.log('values: ', values);
console.log('--------');

var test = values.map(function(item){
	console.log(key['name'] = item.split(',')[0], key['age'] = item.split(',')[1], key['city'] = item.split(',')[2] );

});

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

console.log('--------');
// use map
obj0[keys.toString().split(',')[0]] = name[0];
obj0[keys.toString().split(',')[1]] = age[0];
obj0[keys.toString().split(',')[2]] = city[0];

obj1[keys.toString().split(',')[0]] = name[1];
obj1[keys.toString().split(',')[1]] = age[1];
obj1[keys.toString().split(',')[2]] = city[1];

obj2[keys.toString().split(',')[0]] = name[2];
obj2[keys.toString().split(',')[1]] = age[2];
obj2[keys.toString().split(',')[2]] = city[2];

var newObject = [JSON.stringify(obj0),JSON.stringify(obj1),JSON.stringify(obj2)];
console.log(newObject);

console.log('--------');
console.log(inputContent);

// writing into output.js
fs.writeFileSync(destinationFileName, newObject);