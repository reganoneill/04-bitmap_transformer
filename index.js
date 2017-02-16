'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/assets/palette-bitmap.bmp`);

const bitmapUpdate = function(data) {
  fs.writeFileSync(`${__dirname}/assets/dana-bitmap.bmp`, data);
};

const bmp = {};

bmp.type = bitmap.toString('utf-8', 0, 2);
bmp.size = bitmap.readInt32LE(2);
bmp.width = bitmap.readInt32LE(18);
bmp.height = bitmap.readInt32LE(22);
bmp.pixelArray = bitmap.readInt32LE(10);
bmp.imgHeader = bitmap.slice(0, 1078);
bmp.imgBuffer = bitmap.slice(1078).reverse();
bmp.imgConcat = bmp.imgHeader + bmp.imgBuffer;

bitmapUpdate(bmp.imgConcat);

// console.dir(bmp);
