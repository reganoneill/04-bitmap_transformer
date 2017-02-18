
'use strict';

const fs = require('fs');
// const bitmap = fs.readFileSync(`${__dirname}/assets/palette-bitmap.bmp`);
//
// const bitmapUpdate = function(data) {
//   fs.writeFileSync(`${__dirname}/assets/dana-bitmap.bmp`, data);
// };




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
  console.log('here is our new transformed buff section:', newMiddleBuff);
  var newColorArray = new Int32Array(newMiddleBuff);

 var firstPart = arrayFromBuffer.slice(0, 54);
 var lastPart = arrayFromBuffer.slice(1079);
 var buffPtOne = new Buffer.from(firstPart);
 var buffPtThree = new Buffer.from(lastPart);
 console.log('here is the first part of our new buffer:',buffPtOne);
 console.log('it has a length of :',buffPtOne.length);

 console.log('here is the last part of our new buffer:',buffPtThree);
 console.log('it has a length of :',buffPtThree.length);

 const totalLength = buffPtOne.length + newMiddleBuff.length + buffPtThree.length;
console.log('length of our new buff:', totalLength);
var transformedBuff = Buffer.concat([buffPtOne, newMiddleBuff, buffPtThree], totalLength);
console.log(transformedBuff);
fs.writeFileSync(`${__dirname}/assets/regan-bitmap.bmp`, transformedBuff);
  // var btmpColorTableSection = arrayFromBuffer.slice(54, 170);
  // console.log('index 54-170 of array made from bitmap buffer stream', btmpColorTableSection);
  // //this breaks
  // var hexVals = btmpColorTableSection.forEach(bit => bit.toString('hex'));
  // console.log('the hex vals', hexVals);



  //make new Object
  //save property (color table) of readFile to property of new Object
  //modify property
  //make modified property Buffer friendly so we can splice it into buffer and write it
  var newBit = {};
  newBit.bigArray = data.toString();
  // newBit.colorTable = data.toString('hex', 54, 1078);
  newBit.colorTable = data.toString('hex', 54, 170);
  // console.log('original color table:', newBit.colorTable);
  // var arr = [];
  // var newColorzzz = newBit.colorTable.match(/\w{8}/g).forEach(grp => (arr).push(grp.replace(/^\w{2}/g, '00')));
  // var newColor = arr.join('');
  // console.log('modified color table:', newColor);
  // console.log(data.toString());


//new buffer array


//    fs.writeFile(`${__dirname}/assets/dana-bitmap.txt`, data, function(err, data){
// //     if (err) throw err;
// //     console.log('write file msg:', 'new file created!');
// //   });
//
//
//  });

 });


















// const bmp = {};
// bmp.type = bitmap.toString('utf-8', 0, 2);
// bmp.size = bitmap.readInt32LE(2);
// bmp.startOfPixelArray = bitmap.readInt32LE(10);
// bmp.width = bitmap.readInt32LE(18);
// bmp.height = bitmap.readInt32LE(22);
// bmp.bpp = bitmap.readInt32LE(28);
// bmp.area = bitmap.readInt32LE(34);
// bmp.colorsInPalette = bitmap.readInt32LE(46);
// bmp.importantColors = bitmap.readInt32LE(50);
// bmp.colorTable = bitmap.toString('hex', 54, 1078);
// var arr = [];
// var newColorzzz = bmp.colorTable.match(/\w{8}/g).forEach(grp => (arr).push(grp.replace(/^\w{2}/g, '00')));








// console.log('result', arr.join(''));
// console.log('buffer color table (54-1078):', bmp.colorTable);

//write new Buffer from old one with modified colorTable
