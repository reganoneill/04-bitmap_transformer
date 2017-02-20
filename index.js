
'use strict';

const EE = require('events');
const ee = new EE();
const fs = require('fs');
const objConstructor = require(`${__dirname}/models/bitmap-object.js`).ImageObj;
const bmpTransformer = require(`${__dirname}/lib/bitmap-transform.js`);
const greenScale = require(`${__dirname}/lib/bitmap-greenscale.js`);
const reWrite = require(`${__dirname}/lib/fs-write-file.js`);

// var arr = [];

// var newColorzzz = bmp.colorTable.match(/\w{8}/g).forEach(grp => (arr).push(grp.replace(/^\w{2}/g, '00')));
//
// console.log('result', arr.join(''));

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
  bmpTransformer.invertColors(obj, reWrite);
  greenScale(obj);
});

ee.emit('getFile');
