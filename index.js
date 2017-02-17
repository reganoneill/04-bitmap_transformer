'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/assets/palette-bitmap.bmp`);

// const bitmapUpdate = function(data) {
//   fs.writeFileSync(`${__dirname}/assets/dana-bitmap.bmp`, data);
// };

const bmp = {};

bmp.type = bitmap.toString('utf-8', 0, 2);
bmp.size = bitmap.readInt32LE(2);
bmp.width = bitmap.readInt32LE(18);
bmp.height = bitmap.readInt32LE(22);
bmp.numberOfColors = bitmap.readInt32LE(46);
bmp.pixelArray = bitmap.readInt32LE(10);
// bmp.colorTable = bitmap.toString('hex', 54, 1078);
// bmp.colorTable = bitmap.slice(54, 1079);
// bmp.singleColor = bmp.colorTable.readInt32LE(4);
// bmp.length = bitmap.length;
// bmp.colorInteger = bmp.colorTable.replace(/\w/g, '0');
// bmp.colorsArray = bmp.colorTable.reduce(function(acc, ele, index) {
//   acc.push(ele.readInt32LE(index));
//   return acc;
// }, []);
// bmp.newbuffer = bmp.colorTable.splice(54, 0, bmp.blackColorTable);

// bmp.testBuffer = function(callback) {
//   let colorTableBuffer = bitmap.slice(54, 1079);
//   let blackColorTable = colorTableBuffer.map(function(ele) {
//     return ele * 0;
//   });
//   let newBuffer = colorTableBuffer.splice(54, 0, blackColorTable);
//   callback(newBuffer);
// };
// bmp.imgHeader = bitmap.slice(0, 1078);
// bmp.imgBuffer = bitmap.slice(1078).reverse();
// bmp.imgConcat = bmp.imgHeader + bmp.imgBuffer;
//
// bmp.testBuffer(bitmapUpdate);

console.dir(bmp);
