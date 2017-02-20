'use strict';

const fs = require('fs');

module.exports = function invertColors(obj) {
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


  let invertFileHelper = function(obj) {
    console.log('invert');
    fs.writeFile(`${__dirname}/../assets/dana-bitmap.bmp`, obj, function(err) {
      if (err) throw err;
    });
  };
  invertFileHelper(newBuffer);
};
