
'use strict';

const EE = require('events');
const ee = new EE();
const fs = require('fs');
const objConstructor = require(`${__dirname}/models/bitmap-object.js`).ImageObj;
const bmpTransformer = require(`${__dirname}/lib/bitmap-transform.js`);

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
  bmpTransformer.isolateColors(obj, bmpTransformer.writeFile);
});

ee.emit('getFile');
