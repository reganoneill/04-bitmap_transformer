
'use strict';

const EE = require('events');
const ee = new EE();
const fs = require('fs');
const objConstructor = require(`${__dirname}/models/bitmap-object.js`).ImageObj;
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
var arr = [];
var newColorzzz = bmp.colorTable.match(/\w{8}/g).forEach(grp => (arr).push(grp.replace(/^\w{2}/g, '00')));


console.log('result', arr.join(''));

ee.once('getFile', function() {
  fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, function(err, data) {
    if (err) throw err;
    ee.emit('objCreate', data);
  });
});

ee.on('objCreate', function(data) {
  let testObj = new objConstructor(data);
  console.log('testObj:', testObj.colorsArray);
});

ee.emit('getFile');
