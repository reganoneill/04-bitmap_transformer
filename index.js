'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/assets/palette-bitmap.bmp`);

const bitmapUpdate = function(data) {
  fs.writeFileSync(`${__dirname}/assets/dana-bitmap.bmp`, data);
};

var colorTableArray = [];



const bmp = {};

bmp.type = bitmap.toString('utf-8', 0, 2);
bmp.size = bitmap.readInt32LE(2);
bmp.startOfPixelArray = bitmap.readInt32LE(10);
bmp.width = bitmap.readInt32LE(18);
bmp.height = bitmap.readInt32LE(22);
bmp.bpp = bitmap.readInt32LE(28);
bmp.area = bitmap.readInt32LE(34);
bmp.colorsInPalette = bitmap.readInt32LE(46);
bmp.importantColors = bitmap.readInt32LE(50);
bmp.colorTable = bitmap.toString('hex', 54, 1078);
// var bigOlTableArraySTring = bmp.colorTable.match(/.{1,8}/g);
var arr = [];
var newColorzzz = bmp.colorTable.match(/\w{8}/g).forEach(grp => (arr).push(grp.replace(/^\w{2}/g, '00')));


console.log('result', arr.join(''));

//new functionality 4:29 - feb 17
// var newStringFromColorTable = bmp.colorTable;
// // console.log(bmp.colorTable);
// var arr = []
//
// var x = newStringFromColorTable.match(/\w{8}/g).forEach(grp => (arr).push(grp.replace(/^\w{2}/g, '00')));
// console.log(arr);

// console.dir(bmp);
// console.log('color table array:', colorTableArray);




//this works but ditching for above
// var bigOlTableArraySTring = bmp.colorTable.match(/.{1,8}/g);
// console.log('chchchyea:', bigOlTableArraySTring);






















// bmp.fileOffset2PixelArray = bitmap.readInt32LE(10);
// // bmp.colorsUsed = bitmap.readInt32LE(42);
// // bmp.colorsUsedHEX = bitmap.toString('hex',42);
// bmp.colorTable = bitmap.readInt32LE(54);

// bmp.colorTableHexxx = bitmap.toString('hex', 52, 58);
//logging the offset i.e. starting address of the byte where the bitmap image data(pixel array) can be found
// bmp.pixelArray = bitmap.readInt32LE(10);
// bmp.colorArray = bitmap.slice(54, 1078);

// bmp.getRBG = function(){};

// bmp.imgHeader = bitmap.slice(0, 1078);
// bmp.imgBuffer = bitmap.slice(1078).reverse();
// bmp.imgConcat = bmp.imgHeader + bmp.imgBuffer;


// console.log(bmp.pixelArray);
// bitmapUpdate(bmp.imgConcat);


// console.log(bitmap);
// console.log('color array - from 54 to 1078', bmp.colorArray);

// what is a 32 bit integer in relation to a rgb value?
//color array = slice 54-1078
//separate into parts of 4 bits then go through color array jumping 4's
