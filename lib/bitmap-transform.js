'use strict';

const imgObj = require(`${__dirname}/../models/bitmap-object.js`).bmpArray;
const fs = require('fs');

module.exports = exports = {};

exports.isolateColors = function(obj, callback) {
  console.log('obj:', obj);
  let colorsArray = [];
  for (const value of obj) {
    colorsArray.push(value);
  }
  callback(colorsArray, exports.writeFile);
};

exports.invertColors = function(arr, next) {
  // let header = imgObj[0].metaData;
  // let pixels = imgObj[0].pixelArray;
  // let inverted = imgObj[0].colorTable.forEach(function(ele) { .fill(0);//arr.map(function(ele) {
  // //   return 255 - ele;
  // // });
  let newBuffer = arr;
  // console.log('new array:', newBuffer);
  let newArray = Buffer.from(newBuffer);
  console.log('new buffer:', newArray);
  next(newArray);
};

exports.writeFile = function(obj) {
  console.dir(obj);
  fs.writeFile(`${__dirname}/../assets/dana-bitmap.bmp`, obj, function(err) {
    if (err) throw err;
  });
};
