'use strict';

const fs = require('fs');

module.exports = function grayScale(obj) {
  let bufferArray = new Int32Array(obj);
  let metaData = bufferArray.slice(0, 54);
  let colorTable = bufferArray.slice(54, 1078);
  let pixelArray = bufferArray.slice(1078);

  let manipulateTable = function(arr, cb) {
    for (let i = 0; i < arr.length; i += 4) {
      let scale = colorTable[i];
      colorTable[i + 1] = scale;
      colorTable[i + 2] = scale;
    }
    cb();
  };

  let createBuffer = function() {
    let meta = Buffer.from(metaData);
    let pixel = Buffer.from(pixelArray);
    let redScale = Buffer.from(colorTable);
    let newBuffer = Buffer.concat([meta, redScale, pixel]);
    writeGrayFile(newBuffer);
  };

  let writeGrayFile = function(obj) {
    console.log('gray');
    fs.writeFile(`${__dirname}/../assets/gray-scale.bmp`, obj, function(err) {
      if (err) throw err;
    });
  };
  manipulateTable(colorTable, createBuffer);
};
