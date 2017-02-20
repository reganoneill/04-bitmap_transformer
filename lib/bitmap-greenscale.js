'use strict';

const fs = require('fs');

module.exports = function greenScale(obj) {
  let bufferArray = new Int32Array(obj);
  let metaData = bufferArray.slice(0, 54);
  let colorTable = bufferArray.slice(54, 1078);
  let pixelArray = bufferArray.slice(1078);

  let manipulateTable = function(arr) {
    for (var i = 1; i < arr.length; i += 4) {
      colorTable[i] = 255;
    }
    createBuffer();
  };

  let createBuffer = function() {
    let meta = Buffer.from(metaData);
    let pixel = Buffer.from(pixelArray);
    let redScale = Buffer.from(colorTable);
    let newBuffer = Buffer.concat([meta, redScale, pixel]);
    fileHelper(newBuffer);
  };


  let fileHelper = function(obj) {
    console.log('green');
    fs.writeFile(`${__dirname}/../assets/green.bmp`, obj, function(err) {
      if (err) throw err;
    });
  };
  manipulateTable(colorTable);
};
