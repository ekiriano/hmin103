var fs = require('fs');
var dummyjson = require('./dummy-json');
 

var template = fs.readFileSync('SuperTemplate.hbs', {encoding: 'utf8'});
var result = dummyjson.parse(template);
var obj = JSON.parse(result);

var template1 = fs.readFileSync('MaisonTemplate.hbs', {encoding: 'utf8'});
var result1 = dummyjson.parse(template1);
var obj1 = JSON.parse(result1);

var template2 = fs.readFileSync('AppartementTemplate.hbs', {encoding: 'utf8'});
var result2 = dummyjson.parse(template2);
var obj2 = JSON.parse(result2);