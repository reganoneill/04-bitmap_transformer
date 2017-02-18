
'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, function(err, data){
  //this logs our buffer as-is
  console.log('original data :', data);
  //this creates an array from the buffer - it looks crazy when you log it btw
  var arrayFromBuffer = new Int32Array(data);
  //this creates a brand new Buffer object using the array we previously created (which was created from the original Buffer)
  var newBuffTest = new Buffer.from(arrayFromBuffer);
  console.log(newBuffTest);

  var colorTableToChange = newBuffTest.toString('hex', 54, 1078);
  // console.log(colorTableToChange);

  var arr = [];
  var transformColor = colorTableToChange.match(/\w{8}/g).forEach(grp => (arr).push(grp.replace(/^\w{2}/g, '00')));
  var newColor = arr.join('');
  var newMiddleBuff = Buffer.from(newColor, 'hex');
  var newColorArray = new Int32Array(newMiddleBuff);

 var firstPart = arrayFromBuffer.slice(0, 54);
 var lastPart = arrayFromBuffer.slice(1079);
 var buffPtOne = new Buffer.from(firstPart);
 var buffPtThree = new Buffer.from(lastPart);
 const totalLength = buffPtOne.length + newMiddleBuff.length + buffPtThree.length;
var transformedBuff = Buffer.concat([buffPtOne, newMiddleBuff, buffPtThree], totalLength);
fs.writeFile(`${__dirname}/assets/regan-bitmap.bmp`, transformedBuff);

 });//end read file
