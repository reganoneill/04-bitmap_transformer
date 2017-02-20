'use strict';

const imgObj = require(`${__dirname}/../models/bitmap-object.js`).bmpArray;
// const filer = require(`${__dirname}/fs-write-file.js`);
// const fs = require('fs');

module.exports = exports = {};

// exports.invertColors = function(obj, callback) {
//
//   let bufferArray = new Int32Array(obj);
//
//   let invertTransform = bufferArray.reduce(function(acc, ele, index) {
//     if (index < 54) acc.push(ele);
//     if (index >= 54 && index < 1078) {
//       let inverted = 255 - ele;
//       acc.push(inverted);
//     }
//     if (index >= 1078) acc.push(ele);
//     return acc;
//   }, []);
//
//   let newBuffer = Buffer.from(invertTransform);
//
//   callback(newBuffer, exports.writeFile);
// };

// exports.invertColors = function(obj, cb) {
//
//   let bufferArray = new Int32Array(obj);
//
//   let grayScaleTransform = bufferArray.reduce(function(acc, ele, index) {
//     if (index < 54) acc.push(ele);
//     if (index >= 54 && index < 1078) {
//       let grayed = Math.round(ele * 0.3);
//       acc.push(grayed);
//     }
//     if (index >= 1078) acc.push(ele);
//     return acc;
//   }, []);
//
//   let newBuffer = Buffer.from(grayScaleTransform);
//
//   cb(newBuffer, exports.writeFile);
// };

exports.invertColors = function(obj, cb) {
  let bufferArray = new Int32Array(obj);
  let metaData = bufferArray.slice(0, 54);
  let colorTable = bufferArray.slice(54, 1078);
  let pixelArray = bufferArray.slice(1078);
  let manipulateTable = function(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
      colorTable[i] = (255 - colorTable[i]);
    }
    cb();
  };

  let createBuffer = function() {
    let meta = Buffer.from(metaData);
    let pixel = Buffer.from(pixelArray);
    let redScale = Buffer.from(colorTable);
    let newBuffer = Buffer.concat([meta, redScale, pixel]);
    cb(newBuffer, exports.writeFile);
  };

  manipulateTable(colorTable, createBuffer);
};

exports.writeFile = function(obj) {
  // console.dir(obj);
  // filer(`${__dirname}/../assets/dana-bitmap.bmp`, obj, function(err) {
  //   if (err) throw err;
  // });
};
