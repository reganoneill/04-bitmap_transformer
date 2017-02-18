'use strict';

// const imgObj = require(`${__dirname}/../models/bitmap-object.js`).bmpArray;
const fs = require('fs');

module.exports = exports = {};

exports.invertColors = function(obj, callback) {

  let bufferArray = new Int32Array(obj);

  let invertTransform = bufferArray.reduce(function(acc, ele, index) {
    if (index < 54) acc.push(ele);
    if (index >= 54 && index < 1078) {
      let inverted = 255 - ele;
      acc.push(inverted);
    }
    if (index >= 1078) acc.push(ele);
    return acc;
  }, []);

  let newBuffer = Buffer.from(invertTransform);

  callback(newBuffer, exports.writeFile);
};

// exports.invertColors = function(arr, next) {
//
//
//   let newBuffer = arr.reduce(function(acc, ele, index, array) {
//
//   }, [ ]);
//   // console.log('new array:', newBuffer);
//   let newArray = Buffer.from(newBuffer);
//   console.log('new buffer:', newArray);
//   next(newArray);
// };

exports.writeFile = function(obj) {
  // console.dir(obj);
  fs.writeFile(`${__dirname}/../assets/dana-bitmap.bmp`, obj, function(err) {
    if (err) throw err;
  });
};
