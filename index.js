
'use strict';

const EE = require('events');
const ee = new EE();
const fs = require('fs');
const objConstructor = require(`${__dirname}/models/bitmap-object.js`).ImageObj;
const invert = require(`${__dirname}/lib/bitmap-transform.js`);
const greenScale = require(`${__dirname}/lib/bitmap-greenscale.js`);
const grayScale = require(`${__dirname}/lib/bitmap-grayscale.js`);

ee.on('getFile', function() {
  fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, function(err, data) {
    if (err) throw err;
    ee.emit('objCreate', data);
  });
});

ee.on('objCreate', function(data) {
  let testObj = new objConstructor(data);
  ee.emit('transformObj', data);
});

ee.on('transformObj', function(obj) {
  for(var i = 2; i < process.argv.length; i++){
    if (process.argv[i] === 'invert' ) invert(obj);
    if (process.argv[i] === 'grayscale') grayScale(obj);
    if (process.argv[i] === 'greenscale') greenScale(obj);
  }
  if (!process.argv[2]) {
    invert(obj);
    grayScale(obj);
    greenScale(obj);
  }
});

ee.emit('getFile');
