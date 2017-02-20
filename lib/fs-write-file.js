'use strict';

const fs = require('fs');

const fileHelper = module.exports = function(obj, fileName) {
  console.log('obj:', obj);
  fs.writeFile(`${__dirname}/../assets/${fileName}.bmp`, obj, function(err) {
    if (err) throw err;
  });
};
